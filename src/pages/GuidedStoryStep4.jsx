import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumbs from '../components/Breadcrumbs'
import { useStoryForm } from '../context/StoryFormContext'

const FEELING_OPTIONS = [
  'Super excited',
  'Good enough',
  'Just OK',
  'Not a fan',
  'Disappointed'
]

function GuidedStoryStep4() {
  const navigate = useNavigate()
  const { formData, updateFormData } = useStoryForm()
  const [selectedFeeling, setSelectedFeeling] = useState(formData.step4 || '')

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Create & Share Your Story', path: '/share-story' },
    { label: 'Guided Story', path: '/guided-story' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedFeeling) {
      return // Prevent submission if no option selected
    }
    updateFormData('step4', selectedFeeling)
    navigate('/guided-story/step5')
  }

  const handleFeelingChange = (feeling) => {
    setSelectedFeeling(feeling)
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
            <div className="stepper-step stepper-step-active">
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
            <h1 className="guided-story-title">How do you feel about this?</h1>
            <p className="guided-story-step-indicator">Step 4 of 5</p>
          </div>

          <form className="story-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="checkbox-group">
                {FEELING_OPTIONS.map((feeling, index) => (
                  <label key={index} className="checkbox-option">
                    <input
                      type="radio"
                      name="how-feel"
                      value={feeling}
                      checked={selectedFeeling === feeling}
                      onChange={() => handleFeelingChange(feeling)}
                      required
                    />
                    <span className="checkbox-label">{feeling}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-actions">
              <Link to="/guided-story/step3" className="btn-secondary">Back</Link>
              <button 
                type="submit" 
                className="btn-primary"
                disabled={!selectedFeeling}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default GuidedStoryStep4

