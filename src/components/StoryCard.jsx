import React from 'react'
import { Link } from 'react-router-dom'
import { getAuthorAvatar } from '../utils/authorAvatars'

function StoryCard({ story }) {
  // Handle both array and single value formats for backward compatibility
  const states = Array.isArray(story.states) ? story.states : [story.state || story.states].filter(Boolean)
  const categories = Array.isArray(story.categories) ? story.categories : [story.category || story.categories].filter(Boolean)
  const primaryState = states[0] || ''

  return (
    <article className="story-box" data-state={primaryState}>
      <div className="pending-frame">
        <img src={story.image} alt={story.title} />
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
            <Link to={`/author/${encodeURIComponent(story.author)}`} className="user-name-link">
              <p className="user-name">{story.author}</p>
            </Link>
            <p className="user-title">{story.authorTitle}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default StoryCard

