import React from 'react';

const Map = ({ cities, path }) => {
  // These values would be calculated based on your actual data
  const mapWidth = 800;
  const mapHeight = 500;
  const padding = 50;
  
  // For demonstration purposes - calculate positions
  const cityPositions = {};
  
  // Calculate normalized positions for cities
  Object.entries(cities).forEach(([id, city], index) => {
    // This is just an example - you'd use actual coordinates in a real app
    const angle = (index / Object.keys(cities).length) * Math.PI * 2;
    const radius = Math.min(mapWidth, mapHeight) / 2 - padding;
    
    cityPositions[id] = {
      x: mapWidth / 2 + radius * Math.cos(angle),
      y: mapHeight / 2 + radius * Math.sin(angle),
      name: city.name
    };
  });

  return (
    <div className="w-full h-96 relative bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      <svg width="100%" height="100%" viewBox={`0 0 ${mapWidth} ${mapHeight}`}>
        {/* Draw connections between cities */}
        {Object.entries(cities).map(([cityId, city]) => {
          return (city.connections || []).map((connection, idx) => {
            const targetCity = connection.to;
            if (cityPositions[cityId] && cityPositions[targetCity]) {
              return (
                <line
                  key={`${cityId}-${targetCity}-${idx}`}
                  x1={cityPositions[cityId].x}
                  y1={cityPositions[cityId].y}
                  x2={cityPositions[targetCity].x}
                  y2={cityPositions[targetCity].y}
                  stroke="#4B5563" // gray-600
                  strokeWidth="2"
                />
              );
            }
            return null;
          });
        })}
        
        {/* Draw path if available */}
        {path.length > 1 && path.map((cityId, index) => {
          if (index < path.length - 1) {
            const nextCityId = path[index + 1];
            if (cityPositions[cityId] && cityPositions[nextCityId]) {
              return (
                <line
                  key={`path-${cityId}-${nextCityId}`}
                  x1={cityPositions[cityId].x}
                  y1={cityPositions[cityId].y}
                  x2={cityPositions[nextCityId].x}
                  y2={cityPositions[nextCityId].y}
                  stroke="#8B5CF6" // purple-500
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              );
            }
          }
          return null;
        })}
        
        {/* Draw cities */}
        {Object.entries(cityPositions).map(([cityId, position]) => {
          const isStart = path.length > 0 && path[0] === cityId;
          const isEnd = path.length > 0 && path[path.length - 1] === cityId;
          const isOnPath = path.includes(cityId);
          
          return (
            <g key={cityId}>
              <circle
                cx={position.x}
                cy={position.y}
                r={isStart || isEnd ? 10 : isOnPath ? 8 : 6}
                fill={isStart ? '#10B981' : isEnd ? '#EF4444' : isOnPath ? '#8B5CF6' : '#6B7280'}
                stroke="#1F2937"
                strokeWidth="2"
              />
              <text
                x={position.x}
                y={position.y + 20}
                textAnchor="middle"
                fill="#E5E7EB"
                fontSize="12"
                fontWeight={isStart || isEnd ? 'bold' : 'normal'}
              >
                {position.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default Map;