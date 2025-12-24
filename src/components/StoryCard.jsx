import React from 'react'
import { Link } from 'react-router-dom'
import { getAuthorAvatar } from '../utils/authorAvatars'

function StoryCard({ story }) {
  return (
    <article className="story-box" data-state={story.state}>
      <div className="pending-frame">
        <img src={story.image} alt={story.title} />
      </div>
      <div className="story-tags">
        <span className="story-tag">{story.state}</span>
        <span className="story-tag">{story.category}</span>
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

