import { Blob } from './Blob';

function createObjectURLImage(blob: Blob) {
    const bytes = blob.__first_blob_part__ as Uint8Array;
    const binary = bytes.reduce((acc, byte) => {
        acc += String.fromCharCode(byte);
        return acc;
    }, '');
    const base64String = Buffer.from(binary, 'binary').toString('base64');
    return `data:${blob.type};base64,${base64String}`
}

function createObjectURLText(blob: Blob) {
    const base64String = Buffer.from(blob.__first_blob_part__ as string).toString('base64');
    return `data:${blob.type};base64,${base64String}`
}

function createObjectURL(blob: Blob) {
    if (blob.type.includes('image')) {
        return createObjectURLImage(blob);
    } else if (blob.type.includes('text')) {
        return createObjectURLText(blob);
    }
    return '';
}

export function mockURL(window: any) {
    window.URL = {
        createObjectURL,
        revokeObjectURL: () => {}
    };
    window.location = '';
}