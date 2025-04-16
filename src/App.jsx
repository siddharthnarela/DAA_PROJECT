import { useState } from 'react';
import Map from './components/Map';
import Navigation from './components/Navigation';
import LocationSelector from './components/LocationSelector';
import { cities } from './utils/mapData';
import { findShortestPath } from './utils/dijkstra';

function App() {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [path, setPath] = useState([]);
  const [distance, setDistance] = useState(0);

  const handleCalculateRoute = () => {
    if (startLocation && endLocation) {
      const result = findShortestPath(startLocation, endLocation);
      setPath(result.path);
      setDistance(result.distance);
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-4 bg-gray-900 text-gray-100">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center text-purple-400">
          GPS Navigation with Dijkstra's Algorithm
        </h1>
      </header>

      <div className="flex flex-col md:flex-row gap-4 flex-1">
        <div className="w-full md:w-1/3 bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
          <LocationSelector 
            cities={cities}
            startLocation={startLocation}
            endLocation={endLocation}
            setStartLocation={setStartLocation}
            setEndLocation={setEndLocation}
            onCalculate={handleCalculateRoute}
          />

          {path.length > 0 && (
            <Navigation path={path} distance={distance} />
          )}
        </div>

        <div className="w-full md:w-2/3 bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
          <Map 
            cities={cities} 
            path={path}
          />
        </div>
      </div>
    </div>
  );
}

export default App;