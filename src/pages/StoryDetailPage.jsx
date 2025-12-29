import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumbs from '../components/Breadcrumbs'
import { stories } from '../data/stories'
import { getAuthorAvatar } from '../utils/authorAvatars'

function StoryDetailPage() {
  const { id } = useParams()
  const story = stories.find(s => s.id === parseInt(id))

  if (!story) {
    return (
      <Layout>
        <div className="story-detail-container">
          <h1>Story not found</h1>
          <Link to="/" className="btn-secondary">Back to Home</Link>
        </div>
      </Layout>
    )
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Story Detail', path: `/story/${id}` }
  ]

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="story-detail-container">
        <div className="story-detail-header">
          <div className="story-tags">
            {(() => {
              const states = Array.isArray(story.states) ? story.states : [story.state || story.states].filter(Boolean)
              const categories = Array.isArray(story.categories) ? story.categories : [story.category || story.categories].filter(Boolean)
              return (
                <>
                  {states.map((state, index) => (
                    <span key={`state-${index}`} className="story-tag">{state}</span>
                  ))}
                  {categories.map((category, index) => (
                    <span key={`category-${index}`} className="story-tag">{category}</span>
                  ))}
                </>
              )
            })()}
          </div>
          <h1 className="story-detail-title">{story.title}</h1>
          <div className="story-detail-meta">
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
            <p className="story-date">Published on March 15, 2024</p>
          </div>
        </div>

        <div className="story-detail-images">
          <div className="story-detail-image-main">
            <img src={story.image.replace('w=592&h=320', 'w=1200&h=600')} alt={story.title} />
          </div>
          <div className="story-detail-image-grid">
            <div className="story-detail-image-item">
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop" alt="Story Image" />
            </div>
            <div className="story-detail-image-item">
              <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop" alt="Story Image" />
            </div>
            <div className="story-detail-image-item">
              <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=300&fit=crop" alt="Story Image" />
            </div>
          </div>
        </div>

        <div className="story-detail-content">
          <p className="story-detail-paragraph">
            In today's fast-paced world, mastering productivity isn't just about working harder—it's about working smarter. The key to unlocking your full potential lies in understanding how to optimize your daily routines, eliminate time-wasting activities, and focus on what truly matters. Many people fall into the trap of busyness, mistaking activity for achievement, but true productivity comes from strategic planning and intentional action. By implementing proven techniques such as time blocking, the Pomodoro Technique, and task prioritization methods like the Eisenhower Matrix, you can transform your workday from chaotic to controlled. The journey to peak productivity begins with a single step: recognizing that your time is your most valuable resource and treating it with the respect it deserves.
          </p>

          <p className="story-detail-paragraph">
            One of the most transformative strategies for boosting productivity is learning to say no to distractions and yes to deep work. In an era of constant notifications, social media updates, and endless meetings, the ability to focus deeply on important tasks has become a rare and valuable skill. Creating a distraction-free environment, whether that means turning off notifications, using website blockers, or finding a quiet space to work, can dramatically increase your output quality and quantity. Additionally, understanding your natural energy rhythms and scheduling your most demanding tasks during your peak performance hours can lead to significant improvements in both efficiency and effectiveness. Remember, productivity isn't about filling every moment with activity—it's about ensuring that the activities you do engage in move you closer to your most important goals.
          </p>

          <p className="story-detail-paragraph">
            Finally, sustainable productivity requires building systems and habits that support your long-term success rather than relying solely on willpower and motivation. By establishing clear workflows, automating repetitive tasks, and creating checklists for common processes, you can reduce decision fatigue and free up mental energy for more creative and strategic thinking. Regular reflection on what's working and what isn't allows you to continuously refine your approach, ensuring that your productivity strategies evolve with your changing needs and circumstances. The most productive people aren't those who work the longest hours, but those who have mastered the art of working intentionally, efficiently, and sustainably. Start implementing these strategies today, and watch as your daily productivity transforms from a source of stress into a source of satisfaction and achievement.
          </p>
        </div>

        <div className="story-detail-actions">
          <Link to="/" className="btn-secondary">Back to Stories</Link>
        </div>
      </div>
    </Layout>
  )
}

export default StoryDetailPage

