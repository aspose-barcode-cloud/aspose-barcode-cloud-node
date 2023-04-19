import { HttpOptions } from './httpClient';

export interface Authentication {
    /**
     * Apply authentication settings to header and query params.
     */
    applyToRequest(requestOptions: HttpOptions): void;
}
