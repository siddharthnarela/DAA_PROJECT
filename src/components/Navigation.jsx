const Navigation = ({ path, distance }) => {
  return (
    <div className="mt-6 p-4 bg-gray-700 rounded-lg border border-gray-600">
      <h2 className="text-lg font-semibold mb-2 text-purple-300">Navigation Results</h2>
      <div className="mb-2">
        <p className="font-medium">Total Distance: <span className="text-purple-400">{distance.toFixed(2)} km</span></p>
      </div>
      <div>
        <h3 className="font-medium mb-1 text-gray-300">Route:</h3>
        <ul className="list-disc list-inside text-sm">
          {path.map((cityId, index) => (
            <li key={cityId} className={`${index === 0 ? 'text-green-400 font-medium' : index === path.length - 1 ? 'text-red-400 font-medium' : 'text-gray-300'}`}>
              {cityId}
              {index < path.length - 1 && (
                <span className="inline-block mx-1">→</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;