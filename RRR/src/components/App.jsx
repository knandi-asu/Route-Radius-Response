// import React from 'react'

// function App(){
//     return <div>Welcome to RRR
//         <gmp-map center="33.409637451171875,-111.92316436767578" zoom="14" map-id="DEMO_MAP_ID">
//         <gmp-advanced-marker position="33.409637451171875,-111.92316436767578" title="My location"></gmp-advanced-marker>
//         </gmp-map>
//     </div>
// }

// export default App;

import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '50vw',
  height: '50vh',
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

const App = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyACZp1ruaDkTyr0z_AhGeEXDaGaV0CZrPM',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className='Main'>
        <div className='Left'>
            left
        </div>
        <div className='Right'>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    </div>
    
  );
};

export default App;