import React from 'react'
import { Link } from 'react-router-dom'

function StoryCard({ story }) {
  return (
    <article className="story-box" data-state={story.state}>
      <div className="pending-frame">
        <img src={story.image} alt={story.title} />
      </div>
      <div className="story-tags">
        <span className="story-tag">{story.state}</span>
      </div>
      <div className="story-content">
        <div className="title-category">
          <p className="category">{story.category}</p>
          <p className="title">{story.title}</p>
        </div>
        <p className="description">{story.description}</p>
        <div className="story-actions">
          <Link to={`/story/${story.id}`} className="view-more-btn">View More</Link>
        </div>
        <div className="user-card">
          <div className="user-thumb">
            <div className="user-icon">
              <img src="https://www.figma.com/api/mcp/asset/99811727-dfff-46cc-bb1d-14784cc5f280" alt="User" />
            </div>
          </div>
          <div className="user-details">
            <p className="user-name">{story.author}</p>
            <p className="user-title">{story.authorTitle}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default StoryCard

