import React from 'react'
import Layout from '../components/Layout'
import Breadcrumbs from '../components/Breadcrumbs'
import { stories } from '../data/stories'
import { getCoordinatesForLocation } from '../utils/locationCoordinates'
import StoryMap from '../components/StoryMap'

function StorytellingMapPage() {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Storytelling Map', path: '/storytelling-map' }
  ]

  // Get all stories (both static and user-created) with valid locations
  const userStories = JSON.parse(localStorage.getItem('userStories') || '[]')
  const allStories = [...stories, ...userStories]
  const storiesWithLocations = allStories.filter(story => story.location)

  // Calculate center of all story locations
  const calculateMapCenter = () => {
    if (storiesWithLocations.length === 0) {
      return [39.8283, -98.5795] // Center of US
    }

    const coords = storiesWithLocations.map(story => 
      getCoordinatesForLocation(story.location)
    )
    
    const avgLat = coords.reduce((sum, coord) => sum + coord[0], 0) / coords.length
    const avgLng = coords.reduce((sum, coord) => sum + coord[1], 0) / coords.length
    
    return [avgLat, avgLng]
  }

  const mapCenter = calculateMapCenter()

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="storytelling-map-container">
        <div className="storytelling-map-header">
          <h1 className="storytelling-map-title">Storytelling Map</h1>
          <p className="storytelling-map-subtitle">
            Explore stories from locations across the United States
          </p>
        </div>

        <div className="storytelling-map-wrapper">
          <StoryMap 
            storiesWithLocations={storiesWithLocations} 
            mapCenter={mapCenter}
          />
        </div>
      </div>
    </Layout>
  )
}

export default StorytellingMapPage
