import fetch, { Request, Response } from 'cross-fetch';

export function mockFetch(window: typeof globalThis) {
    window.fetch = fetch;
    window.Request = Request;
    window.Response = Response;
}