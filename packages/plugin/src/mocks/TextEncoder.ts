import { TextEncoder } from "util";


export function mockTextEncoder(window: typeof globalThis) {
    window.TextEncoder = TextEncoder as typeof window.TextEncoder;
}