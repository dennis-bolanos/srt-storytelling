import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumbs from '../components/Breadcrumbs'
import { useStoryForm } from '../context/StoryFormContext'

function ReviewStoryPage() {
  const navigate = useNavigate()
  const { formData, resetFormData } = useStoryForm()

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Create & Share Your Story', path: '/share-story' },
    { label: 'Review Story', path: '/review-story' }
  ]

  const handleSubmit = () => {
    // Here you would typically send the data to a backend API
    // For now, we'll store it in localStorage to show in My Stories
    const newStory = {
      id: Date.now(),
      title: formData.step1 || 'Untitled Story',
      image: formData.image || '',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      status: 'Pending Review',
      formData: formData
    }
    
    // Get existing stories from localStorage
    const existingStories = JSON.parse(localStorage.getItem('userStories') || '[]')
    existingStories.unshift(newStory) // Add new story at the beginning
    localStorage.setItem('userStories', JSON.stringify(existingStories))
    
    // Reset form data after submission
    resetFormData()
    
    // Navigate to my-stories page
    navigate('/my-stories')
  }

  const stepLabels = {
    step1: 'Story Title',
    image: 'Insert your image',
    step2: 'Why does it matter?',
    step3: 'What did you learn?',
    step4: 'How do you feel about this?',
    step5: 'Closing notes'
  }

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="review-story-container">
        <div className="review-story-header">
          <h1 className="review-story-title">Review Your Story</h1>
          <p className="review-story-subtitle">Please review your story before submitting</p>
        </div>

        <div className="review-story-content">
          {Object.entries(stepLabels).map(([stepKey, label]) => (
            <div key={stepKey} className="review-section">
              <h2 className="review-section-title">{label}</h2>
              <div className="review-section-content">
                {stepKey === 'image' ? (
                  formData[stepKey] ? (
                    <div className="review-image">
                      <img src={formData[stepKey]} alt="Story image" />
                    </div>
                  ) : (
                    <p className="review-text-empty">No image provided</p>
                  )
                ) : formData[stepKey] ? (
                  <p className="review-text">{formData[stepKey]}</p>
                ) : (
                  <p className="review-text-empty">No answer provided</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="review-story-actions">
          <Link to="/guided-story/step5" className="btn-secondary">Back to Edit</Link>
          <button onClick={handleSubmit} className="btn-primary">Submit Story for Review</button>
        </div>
      </div>
    </Layout>
  )
}

export default ReviewStoryPage

