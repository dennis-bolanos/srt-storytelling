// Unit color mapping
export const unitColors = {
  'Alpha Unit': '#0f62fe',    // Blue
  'Beta Unit': '#da1e28',     // Red
  'Charlie Unit': '#24a148',  // Green
  'Delta Unit': '#ff832b'     // Orange
}

// Function to get color for a unit
export function getUnitColor(unit) {
  return unitColors[unit] || '#878787' // Default gray if unit not found
}

// Create a colored circle icon for Leaflet
export function createUnitIcon(unit, L) {
  const color = getUnitColor(unit)
  
  // Create a custom SVG icon with colored circle
  const svgIcon = `
    <svg width="25" height="41" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12.5" cy="12.5" r="10" fill="${color}" stroke="#ffffff" stroke-width="2"/>
      <path d="M12.5,0 L12.5,25" stroke="${color}" stroke-width="2" fill="none"/>
    </svg>
  `
  
  return L.divIcon({
    className: 'custom-unit-marker',
    html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 3px solid #ffffff; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10]
  })
}
