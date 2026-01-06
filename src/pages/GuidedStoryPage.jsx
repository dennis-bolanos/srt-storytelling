import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumbs from '../components/Breadcrumbs'
import { useStoryForm } from '../context/StoryFormContext'

function GuidedStoryPage() {
  const navigate = useNavigate()
  const { formData, updateFormData } = useStoryForm()
  const [value, setValue] = useState(formData.step1 || '')

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Create & Share Your Story', path: '/share-story' },
    { label: 'Guided Story', path: '/guided-story' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    updateFormData('step1', value)
    navigate('/guided-story/step2')
  }

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="guided-story-container">
        <div className="stepper-container">
          <div className="stepper">
            <div className="stepper-step stepper-step-active">
              <div className="stepper-step-number">1</div>
              <div className="stepper-step-label">Step 1</div>
            </div>
            <div className="stepper-line"></div>
            <div className="stepper-step">
              <div className="stepper-step-number">2</div>
              <div className="stepper-step-label">Step 2</div>
            </div>
            <div className="stepper-line"></div>
            <div className="stepper-step">
              <div className="stepper-step-number">3</div>
              <div className="stepper-step-label">Step 3</div>
            </div>
            <div className="stepper-line"></div>
            <div className="stepper-step">
              <div className="stepper-step-number">4</div>
              <div className="stepper-step-label">Step 4</div>
            </div>
            <div className="stepper-line"></div>
            <div className="stepper-step">
              <div className="stepper-step-number">5</div>
              <div className="stepper-step-label">Step 5</div>
            </div>
          </div>
        </div>

        <div className="guided-story-form">
          <div className="guided-story-header">
            <h1 className="guided-story-title">Story Title</h1>
            <p className="guided-story-step-indicator">Step 1 of 5</p>
          </div>

          <form className="story-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="story-textarea step-1"
                id="story-title"
                name="story-title"
                placeholder="Enter your story title..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
                style={{ height: '48px', padding: '12px 16px' }}
              />
            </div>

            <div className="form-actions">
              <Link to="/share-story" className="btn-secondary">Back</Link>
              <button type="submit" className="btn-primary">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default GuidedStoryPage

