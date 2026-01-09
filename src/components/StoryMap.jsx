import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCoordinatesForLocation } from '../utils/locationCoordinates'
import { createUnitIcon, unitColors } from '../utils/unitColors'
import L from 'leaflet'

function StoryMap({ storiesWithLocations, mapCenter }) {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const markersRef = useRef([])
  const legendRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    // Initialize map
    const map = L.map(mapRef.current, {
      center: mapCenter,
      zoom: 5,
      scrollWheelZoom: true
    })

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(map)

    // Create legend (will be updated when stories change)
    const legend = L.control({ position: 'bottomright' })
    legend.onAdd = function() {
      const div = L.DomUtil.create('div', 'map-legend')
      div.innerHTML = '<h4>Units</h4>'
      
      // Calculate unit counts
      const unitCounts = {}
      if (storiesWithLocations) {
        storiesWithLocations.forEach(story => {
          if (story.unit) {
            unitCounts[story.unit] = (unitCounts[story.unit] || 0) + 1
          }
        })
      }
      
      Object.entries(unitColors).forEach(([unit, color]) => {
        const count = unitCounts[unit] || 0
        div.innerHTML += `
          <div class="legend-item">
            <span class="legend-color" style="background-color: ${color}"></span>
            <span class="legend-label">${unit} (${count})</span>
          </div>
        `
      })
      
      return div
    }
    legend.addTo(map)
    legendRef.current = legend

    mapInstanceRef.current = map

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [mapCenter, storiesWithLocations])

  useEffect(() => {
    if (!mapInstanceRef.current || !storiesWithLocations) return

    // Update legend with current counts
    if (legendRef.current) {
      const legendElement = mapInstanceRef.current.getContainer().querySelector('.map-legend')
      if (legendElement) {
        // Calculate unit counts
        const unitCounts = {}
        storiesWithLocations.forEach(story => {
          if (story.unit) {
            unitCounts[story.unit] = (unitCounts[story.unit] || 0) + 1
          }
        })
        
        // Update legend content
        const legendItems = legendElement.querySelectorAll('.legend-item')
        Object.entries(unitColors).forEach(([unit, color], index) => {
          const count = unitCounts[unit] || 0
          if (legendItems[index]) {
            const label = legendItems[index].querySelector('.legend-label')
            if (label) {
              label.textContent = `${unit} (${count})`
            }
          }
        })
      }
    }

    // Clear existing markers
    markersRef.current.forEach(marker => {
      mapInstanceRef.current.removeLayer(marker)
    })
    markersRef.current = []

    // Add markers for each story
    storiesWithLocations.forEach(story => {
      const coordinates = getCoordinatesForLocation(story.location)
      
      // Create custom icon based on unit
      const icon = story.unit ? createUnitIcon(story.unit, L) : L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      })

      // Create popup content with clickable link
      const popupContent = document.createElement('div')
      popupContent.className = 'map-popup-content'
      popupContent.innerHTML = `
        <h3 class="map-popup-title">${story.title}</h3>
        <div class="map-popup-details">
          <p class="map-popup-author"><strong>Author:</strong> ${story.author}</p>
          <p class="map-popup-date"><strong>Date:</strong> ${story.date}</p>
          <p class="map-popup-location"><strong>Location:</strong> ${story.location}</p>
          ${story.unit ? `<p class="map-popup-unit"><strong>Unit:</strong> ${story.unit}</p>` : ''}
        </div>
        <button class="map-popup-cta" data-story-id="${story.id}">View Story Details</button>
      `

      // Add click handler to the button
      const button = popupContent.querySelector('.map-popup-cta')
      button.addEventListener('click', (e) => {
        e.preventDefault()
        navigate(`/story/${story.id}`)
        mapInstanceRef.current.closePopup()
      })

      const marker = L.marker(coordinates, { icon })
        .addTo(mapInstanceRef.current)
        .bindPopup(popupContent, {
          maxWidth: 300,
          className: 'custom-popup'
        })

      markersRef.current.push(marker)
    })
  }, [storiesWithLocations, navigate])

  if (!storiesWithLocations || storiesWithLocations.length === 0) {
    return (
      <div style={{ height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f2f4f8' }}>
        <p>No stories with locations found.</p>
      </div>
    )
  }

  return (
    <div 
      ref={mapRef} 
      style={{ height: '600px', width: '100%', position: 'relative' }}
    />
  )
}

export default StoryMap
