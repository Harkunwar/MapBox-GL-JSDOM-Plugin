import CrossBlob from 'cross-blob';

export class Blob extends CrossBlob {
    __first_blob_part__: BlobPart;
    constructor(blobParts?: BlobPart[], options?: BlobPropertyBag) {
        super(blobParts, options);
        this.__first_blob_part__ = blobParts?.[0] as BlobPart;
    }
}

export function mockBlob(window: typeof globalThis) {
    window.Blob = Blob;
}
