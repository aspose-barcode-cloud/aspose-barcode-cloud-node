import { Multipart } from '../src/multipart';

describe('Multipart', () => {
    it('should generate boundary', () => {
        // Arrange
        const multipart = new Multipart([]);

        // Act
        const boundary = multipart.boundary;

        // Assert
        expect(boundary).toHaveLength(56);
        expect(boundary).toMatch(/^[-]{24}[a-z0-9]{32}$/);
    });

    it('should generate headers', () => {
        // Arrange
        const multipart = new Multipart([['test', 'value2']]);

        // Act
        const headers = multipart.headers;

        // Assert
        expect(headers['Content-Type']).toBe('multipart/form-data; boundary=' + multipart.boundary);
        expect(headers['Content-Length']).toBe('175');
    });

    it('should add multiple', () => {
        // Arrange
        const multipart = new Multipart([
            ['test', 'value1'],
            ['test', 'value2'],
        ]);

        // Act
        const headers = multipart.headers;

        // Assert
        expect(headers['Content-Type']).toBe('multipart/form-data; boundary=' + multipart.boundary);
        expect(headers['Content-Length']).toBe('290');
    });
});
