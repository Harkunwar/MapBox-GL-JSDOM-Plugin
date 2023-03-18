import { ImageData as ImageDataParent } from 'canvas';

export function mockImageData(window: typeof globalThis) {
    class ImageData extends ImageDataParent {}
    window.ImageData = ImageData as typeof globalThis['ImageData'];
}