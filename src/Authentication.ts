export interface Authentication {
    /**
     * Apply authentication settings to header and query params.
     */
    applyToRequestAsync(requestOptions: {
        headers?: Record<string, string>;
        qs?: Record<string, string>;
    }): Promise<void>;
}
