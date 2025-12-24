import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumbs from '../components/Breadcrumbs'
import { useStoryForm } from '../context/StoryFormContext'

function GuidedStoryStep5() {
  const navigate = useNavigate()
  const { formData, updateFormData } = useStoryForm()
  const [value, setValue] = useState(formData.step5 || '')

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Share Your Story', path: '/share-story' },
    { label: 'Guided Story', path: '/guided-story' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    updateFormData('step5', value)
    navigate('/review-story')
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
            <div className="stepper-step stepper-step-completed">
              <div className="stepper-step-number">3</div>
              <div className="stepper-step-label">Step 3</div>
            </div>
            <div className="stepper-line stepper-line-completed"></div>
            <div className="stepper-step stepper-step-completed">
              <div className="stepper-step-number">4</div>
              <div className="stepper-step-label">Step 4</div>
            </div>
            <div className="stepper-line stepper-line-completed"></div>
            <div className="stepper-step stepper-step-active">
              <div className="stepper-step-number">5</div>
              <div className="stepper-step-label">Step 5</div>
            </div>
          </div>
        </div>

        <div className="guided-story-form">
          <div className="guided-story-header">
            <h1 className="guided-story-title">Closing notes</h1>
            <p className="guided-story-step-indicator">Step 5 of 5</p>
          </div>

          <form className="story-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <textarea
                className="story-textarea"
                id="closing-notes"
                name="closing-notes"
                rows="8"
                placeholder="Add any closing thoughts or notes to your story..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="form-actions">
              <Link to="/guided-story/step4" className="btn-secondary">Back</Link>
              <button type="submit" className="btn-primary">Review Your Story</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default GuidedStoryStep5

