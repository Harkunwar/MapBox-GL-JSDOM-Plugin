import * as React from 'react'
import Map, { Marker } from 'react-map-gl'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css';

function App() {
  return (
    <div className="Map" style={{width: '100%', height: '100%'}}>
      <Map
        initialViewState={{
          latitude: 37.8,
          longitude: -122.4,
          zoom: 14
        }}
        mapLib={maplibregl}
        style={{ width: 800, height: 600 }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      >
        <Marker longitude={-122.4} latitude={37.8} color="red" />
      </Map>
    </div>
  )
}

export default App
