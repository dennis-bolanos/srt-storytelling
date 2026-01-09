import React from 'react'
import { Link } from 'react-router-dom'
import { getAuthorAvatar } from '../utils/authorAvatars'

function StoryCard({ story }) {
  // Handle both array and single value formats for backward compatibility
  const states = Array.isArray(story.states) ? story.states : [story.state || story.states].filter(Boolean)
  const categories = Array.isArray(story.categories) ? story.categories : [story.category || story.categories].filter(Boolean)
  const primaryState = states[0] || ''

  // Generate a consistent random share count based on story ID (for demo purposes)
  // This ensures the same story always shows the same share count
  const getShareCount = (id) => {
    // Use story ID as seed for consistent random number
    const seed = id || Math.floor(Math.random() * 1000)
    const random = ((seed * 9301 + 49297) % 233280) / 233280
    // Generate share count between 10 and 9999
    const count = Math.floor(10 + random * 9989)
    return count
  }

  const shareCount = getShareCount(story.id)

  // Format share count (e.g., 1.2K, 5.3M)
  const formatShareCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M'
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K'
    }
    return count.toString()
  }

  return (
    <article className="story-box" data-state={primaryState}>
      <div className="pending-frame">
        <img src={story.image} alt={story.title} />
        <div className="share-count-badge">
          <span className="material-icons share-icon">share</span>
          <span className="share-number">{formatShareCount(shareCount)}</span>
        </div>
      </div>
      <div className="story-tags">
        {states.map((state, index) => (
          <span key={`state-${index}`} className="story-tag">{state}</span>
        ))}
        {categories.map((category, index) => (
          <span key={`category-${index}`} className="story-tag">{category}</span>
        ))}
      </div>
      <div className="story-content">
        <div className="title-category">
          <p className="title">{story.title}</p>
        </div>
        <p className="description">{story.description}</p>
        <div className="story-actions">
          <Link to={`/story/${story.id}`} className="view-more-btn">View More</Link>
        </div>
        <div className="user-card">
          <div className="user-thumb">
            <div className="user-icon">
              <img src={getAuthorAvatar(story.author)} alt={story.author} />
            </div>
          </div>
          <div className="user-details">
            <div className="user-details-left">
              <Link to={`/author/${encodeURIComponent(story.author)}`} className="user-name-link">
                <p className="user-name">{story.author}</p>
              </Link>
              <p className="user-title">{story.authorTitle}</p>
              {story.unit && <p className="story-unit">{story.unit}</p>}
            </div>
            <div className="user-details-right">
              {story.date && <p className="story-date">{story.date}</p>}
              {story.location && (
                <p className="story-location">
                  <span className="material-icons location-icon">location_on</span>
                  {story.location}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default StoryCard

