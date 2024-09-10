import crypto from 'crypto';
import { StringKeyWithStringValue } from 'httpClient';

export interface FormParamsType extends Array<Array<string>> {}

interface IRequestFile {
    name: string;
    filename: string;
    data: Buffer;
    contentType?: string;
}

export class RequestFile implements IRequestFile {
    constructor(
        readonly name: string,
        readonly filename: string,
        readonly data: Buffer,
        readonly contentType?: string
    ) {}
}

export class Multipart {
    readonly boundary: string;
    readonly body: Buffer;
    readonly headers: StringKeyWithStringValue;

    constructor(textFields: FormParamsType, files?: IRequestFile[]) {
        const random = crypto.randomUUID();
        this.boundary = '------------------------' + random.replace(/-/g, '');

        const bodyLines = [];
        for (const tuple of textFields) {
            bodyLines.push(`--${this.boundary}`);
            bodyLines.push(`Content-Disposition: form-data; name="${tuple[0]}"`);
            bodyLines.push('');
            bodyLines.push(tuple[1]);
        }
        for (const file of files || []) {
            bodyLines.push(`--${this.boundary}`);
            bodyLines.push(
                `Content-Disposition: form-data; name="${file.name}"; filename="${file.filename || 'filename'}"`
            );
            bodyLines.push(`Content-Type: ${file.contentType || 'application/octet-stream'}`);
            bodyLines.push('');
            bodyLines.push(file.data.toString('binary'));
        }
        bodyLines.push(`--${this.boundary}--`);

        this.body = Buffer.from(bodyLines.join('\r\n'), 'binary');

        this.headers = {
            'Content-Type': `multipart/form-data; boundary=${this.boundary}`,
            'Content-Length': this.body.length.toString(),
        };
    }
}
