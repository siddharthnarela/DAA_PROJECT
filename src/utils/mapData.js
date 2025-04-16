export const cities = {
  'nyc': {
    name: 'New York City',
    connections: [
      { to: 'boston', distance: 350 },
      { to: 'philadelphia', distance: 150 },
      { to: 'washington', distance: 380 }
    ]
  },
  'boston': {
    name: 'Boston',
    connections: [
      { to: 'nyc', distance: 350 },
      { to: 'toronto', distance: 800 }
    ]
  },
  'philadelphia': {
    name: 'Philadelphia',
    connections: [
      { to: 'nyc', distance: 150 },
      { to: 'washington', distance: 220 }
    ]
  },
  'washington': {
    name: 'Washington D.C.',
    connections: [
      { to: 'philadelphia', distance: 220 },
      { to: 'charlotte', distance: 640 },
      { to: 'nyc', distance: 380 }
    ]
  },
  'charlotte': {
    name: 'Charlotte',
    connections: [
      { to: 'washington', distance: 640 },
      { to: 'atlanta', distance: 400 }
    ]
  },
  'atlanta': {
    name: 'Atlanta',
    connections: [
      { to: 'charlotte', distance: 400 },
      { to: 'miami', distance: 950 },
      { to: 'new_orleans', distance: 700 }
    ]
  },
  'miami': {
    name: 'Miami',
    connections: [
      { to: 'atlanta', distance: 950 }
    ]
  },
  'new_orleans': {
    name: 'New Orleans',
    connections: [
      { to: 'atlanta', distance: 700 },
      { to: 'houston', distance: 540 }
    ]
  },
  'houston': {
    name: 'Houston',
    connections: [
      { to: 'new_orleans', distance: 540 },
      { to: 'san_antonio', distance: 310 },
      { to: 'dallas', distance: 390 }
    ]
  },
  'dallas': {
    name: 'Dallas',
    connections: [
      { to: 'houston', distance: 390 },
      { to: 'denver', distance: 1060 }
    ]
  },
  'san_antonio': {
    name: 'San Antonio',
    connections: [
      { to: 'houston', distance: 310 }
    ]
  },
  'denver': {
    name: 'Denver',
    connections: [
      { to: 'dallas', distance: 1060 },
      { to: 'slc', distance: 600 },
      { to: 'chicago', distance: 1400 }
    ]
  },
  'chicago': {
    name: 'Chicago',
    connections: [
      { to: 'denver', distance: 1400 },
      { to: 'toronto', distance: 700 }
    ]
  },
  'toronto': {
    name: 'Toronto',
    connections: [
      { to: 'chicago', distance: 700 },
      { to: 'boston', distance: 800 }
    ]
  },
  'slc': {
    name: 'Salt Lake City',
    connections: [
      { to: 'denver', distance: 600 },
      { to: 'las_vegas', distance: 580 },
      { to: 'seattle', distance: 1160 }
    ]
  },
  'las_vegas': {
    name: 'Las Vegas',
    connections: [
      { to: 'slc', distance: 580 },
      { to: 'la', distance: 430 },
      { to: 'sf', distance: 670 }
    ]
  },
  'la': {
    name: 'Los Angeles',
    connections: [
      { to: 'las_vegas', distance: 430 },
      { to: 'sf', distance: 620 }
    ]
  },
  'sf': {
    name: 'San Francisco',
    connections: [
      { to: 'la', distance: 620 },
      { to: 'las_vegas', distance: 670 },
      { to: 'seattle', distance: 1300 }
    ]
  },
  'seattle': {
    name: 'Seattle',
    connections: [
      { to: 'sf', distance: 1300 },
      { to: 'slc', distance: 1160 }
    ]
  }
};