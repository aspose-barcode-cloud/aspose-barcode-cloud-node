import { HttpOptions } from './httpClient';

export interface Authentication {
    /**
     * Apply authentication settings to header and query params.
     */
    applyToRequestAsync(requestOptions: HttpOptions): Promise<void>;
}
