import { cities } from './mapData';

export function findShortestPath(startCity, endCity) {
  // Initialize distances with Infinity for all cities except the start city
  const distances = {};
  const previous = {};
  const unvisited = new Set();

  Object.keys(cities).forEach(cityId => {
    distances[cityId] = cityId === startCity ? 0 : Infinity;
    previous[cityId] = null;
    unvisited.add(cityId);
  });

  while (unvisited.size > 0) {
    // Find the unvisited city with minimum distance
    let currentCity = null;
    let minDistance = Infinity;

    for (const cityId of unvisited) {
      if (distances[cityId] < minDistance) {
        minDistance = distances[cityId];
        currentCity = cityId;
      }
    }

    // If we can't find a city or reached the destination, break
    if (currentCity === null || currentCity === endCity) break;

    // Remove the current city from unvisited set
    unvisited.delete(currentCity);

    // Check all neighboring cities
    const cityData = cities[currentCity];
    if (cityData && cityData.connections) {
      for (const connection of cityData.connections) {
        const neighborCity = connection.to;
        if (unvisited.has(neighborCity)) {
          const tentativeDistance = distances[currentCity] + connection.distance;
          if (tentativeDistance < distances[neighborCity]) {
            distances[neighborCity] = tentativeDistance;
            previous[neighborCity] = currentCity;
          }
        }
      }
    }
  }

  // Reconstruct the path
  const path = [];
  let current = endCity;

  if (previous[endCity] !== null || endCity === startCity) {
    while (current !== null) {
      path.unshift(current);
      current = previous[current];
    }
  }

  return {
    path,
    distance: distances[endCity]
  };
}