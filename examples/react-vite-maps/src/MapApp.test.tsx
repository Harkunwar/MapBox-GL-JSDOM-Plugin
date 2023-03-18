import * as React from 'react';
import MapApp from './MapApp';
import maplibregl from 'maplibre-gl'
import { render, screen } from '@testing-library/react';

const wait = (ms?: number) => new Promise(resolve => setTimeout(resolve, ms));

describe('MapApp Renders', () => {
    it('Map is visible', async () => {
        render(<MapApp />);
        console.log("Runs");
        console.log(maplibregl.notSupportedReason({}));
        await wait(5000);

        const url = document.querySelector('canvas')?.toDataURL();
        console.log(url);
    });
});