import * as mocks from './mocks';

export default function(window: typeof globalThis) {
    Object.values(mocks).forEach((mock) => {
        mock(window);
    });
}