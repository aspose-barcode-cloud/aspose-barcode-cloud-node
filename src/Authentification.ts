import Request from 'request';

export interface Authentication {
  /**
   * Apply authentication settings to header and query params.
   */
  applyToRequest(requestOptions: Request.Options): void;

  applyUnauthorized(): void;
}
