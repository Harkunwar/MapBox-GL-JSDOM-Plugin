export function mockPerformance(window: typeof globalThis) {
    window.performance.mark = () => (1 as unknown as PerformanceMark);
}