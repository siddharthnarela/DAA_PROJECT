const LocationSelector = ({ 
  cities, 
  startLocation, 
  endLocation, 
  setStartLocation, 
  setEndLocation, 
  onCalculate 
}) => {
  return (
    <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
      <h2 className="text-lg font-semibold mb-4 text-purple-300">Select Locations</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-gray-300">Start Location</label>
        <select 
          value={startLocation} 
          onChange={(e) => setStartLocation(e.target.value)}
          className="w-full p-2 border rounded bg-gray-800 border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Select a starting point</option>
          {Object.entries(cities).map(([id, city]) => (
            <option key={id} value={id}>{city.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-gray-300">Destination</label>
        <select 
          value={endLocation} 
          onChange={(e) => setEndLocation(e.target.value)}
          className="w-full p-2 border rounded bg-gray-800 border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Select a destination</option>
          {Object.entries(cities).map(([id, city]) => (
            <option key={id} value={id}>{city.name}</option>
          ))}
        </select>
      </div>

      <button 
        onClick={onCalculate}
        disabled={!startLocation || !endLocation}
        className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition disabled:bg-gray-600 disabled:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        Calculate Route
      </button>
    </div>
  );
};

export default LocationSelector;