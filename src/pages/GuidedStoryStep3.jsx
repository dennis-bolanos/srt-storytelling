import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumbs from '../components/Breadcrumbs'
import { useStoryForm } from '../context/StoryFormContext'

function GuidedStoryStep3() {
  const navigate = useNavigate()
  const { formData, updateFormData } = useStoryForm()
  const [value, setValue] = useState(formData.step3 || '')

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Share Your Story', path: '/share-story' },
    { label: 'Guided Story', path: '/guided-story' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    updateFormData('step3', value)
    navigate('/guided-story/step4')
  }

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="guided-story-container">
        <div className="stepper-container">
          <div className="stepper">
            <div className="stepper-step stepper-step-completed">
              <div className="stepper-step-number">1</div>
              <div className="stepper-step-label">Step 1</div>
            </div>
            <div className="stepper-line stepper-line-completed"></div>
            <div className="stepper-step stepper-step-completed">
              <div className="stepper-step-number">2</div>
              <div className="stepper-step-label">Step 2</div>
            </div>
            <div className="stepper-line stepper-line-completed"></div>
            <div className="stepper-step stepper-step-active">
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
            <h1 className="guided-story-title">What did you learn?</h1>
            <p className="guided-story-step-indicator">Step 3 of 5</p>
          </div>

          <form className="story-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <textarea
                className="story-textarea"
                id="what-learned"
                name="what-learned"
                rows="8"
                placeholder="Share what you learned from this experience..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="form-actions">
              <Link to="/guided-story/step2" className="btn-secondary">Back</Link>
              <button type="submit" className="btn-primary">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default GuidedStoryStep3

