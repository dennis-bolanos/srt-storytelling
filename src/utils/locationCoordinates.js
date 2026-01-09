// Mapping of location strings to coordinates [lat, lng]
export const locationCoordinates = {
  'San Francisco, CA': [37.7749, -122.4194],
  'New York, NY': [40.7128, -74.0060],
  'Austin, TX': [30.2672, -97.7431],
  'Seattle, WA': [47.6062, -122.3321],
  'Phoenix, AZ': [33.4484, -112.0740],
  'Houston, TX': [29.7604, -95.3698],
  'Miami, FL': [25.7617, -80.1918],
  'Los Angeles, CA': [34.0522, -118.2437],
  'Crystal River, FL': [28.9022, -82.5926],
  'Corpus Christi, TX': [27.8006, -97.3964]
}

// Function to get coordinates for a location string
export function getCoordinatesForLocation(location) {
  // Try exact match first
  if (locationCoordinates[location]) {
    return locationCoordinates[location]
  }
  
  // Try to extract city and state and find a match
  const parts = location.split(',')
  if (parts.length >= 2) {
    const city = parts[0].trim()
    const state = parts[1].trim()
    const key = `${city}, ${state}`
    if (locationCoordinates[key]) {
      return locationCoordinates[key]
    }
  }
  
  // Default to center of US if not found
  return [39.8283, -98.5795]
}
