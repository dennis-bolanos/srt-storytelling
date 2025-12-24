import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import StoryCard from '../components/StoryCard'
import FilterPills from '../components/FilterPills'
import CategoryFilterPills from '../components/CategoryFilterPills'
import { stories } from '../data/stories'

function HomePage() {
  const [selectedState, setSelectedState] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const handleSelectState = (state) => {
    setSelectedState(state)
  }

  const handleSelectCategory = (category) => {
    setSelectedCategory(category)
  }

  const filteredStories = useMemo(() => {
    let filtered = stories

    // Filter by state
    if (selectedState !== 'All') {
      filtered = filtered.filter(story => story.state === selectedState)
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(story => story.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      filtered = filtered.filter(story => {
        const searchableText = [
          story.title,
          story.description,
          story.category,
          story.author,
          story.authorTitle,
          story.state
        ].join(' ').toLowerCase()
        
        return searchableText.includes(query)
      })
    }

    return filtered
  }, [selectedState, selectedCategory, searchQuery])

  return (
    <Layout>
      <div className="body-content-container">
        <div className="body-content" data-node-id="17:4788">
          <aside className="left-sidenav" data-node-id="20:3418">
            <div className="sidenav-filters">
              <h4 className="my-6">States</h4>
              <FilterPills stories={stories} selectedState={selectedState} onSelectState={handleSelectState} />
            </div>
            <div className="sidenav-filters">
              <h4 className="my-6">Categories</h4>
              <CategoryFilterPills stories={stories} selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} />
            </div>
          </aside>

          <main className="center-content" data-node-id="17:4792">
            <div className="section-text" data-node-id="17:4793">
              <div className="section-top" data-node-id="I17:4793;195:7369">
                <p className="section-title" data-node-id="I17:4793;195:7370">YOUR FEED</p>
              </div>
            </div>

            <div className="search-field" data-node-id="25:3172">
              <div className="search-icon">
                <span className="material-icons">search</span>
              </div>
              <input
                type="text"
                className="search-input"
                placeholder="Search stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoComplete="off"
              />
              <div className="search-dropdown-icon">
                <span className="material-icons">expand_more</span>
              </div>
            </div>

            <div className="story-stack" data-node-id="17:4794">
              {filteredStories.map(story => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          </main>

          <aside className="right-sidebar" data-node-id="17:4809">
            <div className="section-text" data-node-id="17:4810">
              <div className="section-top" data-node-id="I17:4810;195:7369">
                <p className="section-title" data-node-id="I17:4810;195:7370">Hello, clark kent!</p>
              </div>
            </div>
            <div className="button-container" data-node-id="17:7137">
              <Link to="/share-story" className="share-button" data-node-id="17:7129">
                <div className="comment-icon">
                  <span className="material-icons">comment</span>
                </div>
                <p className="button-text" data-node-id="I17:7129;185:2494">Share Your Story</p>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage

