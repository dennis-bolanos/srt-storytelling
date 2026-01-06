import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumbs from '../components/Breadcrumbs'

function ShareStoryPage() {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Create & Share Your Story', path: '/share-story' }
  ]

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="share-story-container">
        <div className="share-story-header">
          <h1 className="share-story-title">Create & Share Your Story</h1>
          <p className="share-story-subtitle">Choose how you'd like to create your story</p>
        </div>

        <div className="story-type-cards">
          <div className="story-type-card">
            <div className="story-type-card-content">
              <h2 className="story-type-title">Freeform</h2>
              <p className="story-type-description">Create your story with complete creative freedom. Write and structure your content however you'd like.</p>
              <button className="story-type-select-btn">Select</button>
            </div>
          </div>

          <div className="story-type-card">
            <div className="story-type-card-content">
              <h2 className="story-type-title">Guided</h2>
              <p className="story-type-description">Follow a structured template to help you create your story step by step with helpful prompts.</p>
              <Link to="/guided-story" className="story-type-select-btn">Select</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ShareStoryPage

