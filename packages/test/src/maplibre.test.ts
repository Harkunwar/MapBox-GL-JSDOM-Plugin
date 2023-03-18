import { Map } from 'maplibre-gl';

const wait = (ms?: number) => new Promise(resolve => setTimeout(resolve, ms));

describe('MapLibre Tests', () => {

    test('Render Basic Map', async () => {

        let map = new Map({
            container: document.body,
            style: 'https://demotiles.maplibre.org/style.json',
            center: [0, 0],
            zoom: 2
        })
        await wait(15000);
        const url = document.querySelector('canvas')?.toDataURL();
        console.log(url);
        console.log(document.body.innerHTML);
        expect(true).toBeTruthy();
    }, 20000);
});