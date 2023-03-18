import Worker from 'web-worker';

export function mockWorker(window: typeof globalThis) {
    window.Worker = Worker;
}