import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumbs from '../components/Breadcrumbs'
import { useStoryForm } from '../context/StoryFormContext'

function GuidedStoryStep2() {
  const navigate = useNavigate()
  const { formData, updateFormData } = useStoryForm()
  const [imageUrl, setImageUrl] = useState(formData.image || '')
  const [imagePreview, setImagePreview] = useState(formData.image || '')
  const [uploadError, setUploadError] = useState('')
  const fileInputRef = useRef(null)

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Create & Share Your Story', path: '/share-story' },
    { label: 'Guided Story', path: '/guided-story' }
  ]

  const handleImageUrlChange = (e) => {
    const url = e.target.value
    setImageUrl(url)
    setImagePreview(url)
    setUploadError('')
    if (url) {
      updateFormData('image', url)
    }
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setUploadError('Please select a valid image file')
        return
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setUploadError('Image size must be less than 5MB')
        return
      }

      // Create a preview using FileReader
      const reader = new FileReader()
      reader.onloadend = () => {
        const dataUrl = reader.result
        setImagePreview(dataUrl)
        setImageUrl(dataUrl)
        updateFormData('image', dataUrl)
        setUploadError('')
      }
      reader.onerror = () => {
        setUploadError('Error reading file')
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!imagePreview) {
      setUploadError('Please provide an image URL or upload an image')
      return
    }
    updateFormData('image', imagePreview)
    navigate('/guided-story/step3')
  }

  const handleRemoveImage = () => {
    setImageUrl('')
    setImagePreview('')
    setUploadError('')
    updateFormData('image', '')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
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
            <div className="stepper-step stepper-step-active">
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
            <h1 className="guided-story-title">Insert your image</h1>
            <p className="guided-story-step-indicator">Step 2 of 5</p>
          </div>

          <form className="story-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="image-url" className="form-label">Image URL</label>
              <input
                type="url"
                id="image-url"
                name="image-url"
                className="form-input"
                placeholder="https://images.unsplash.com/..."
                value={imageUrl}
                onChange={handleImageUrlChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="image-upload" className="form-label">Or upload an image</label>
              <input
                ref={fileInputRef}
                type="file"
                id="image-upload"
                name="image-upload"
                accept="image/*"
                onChange={handleFileUpload}
                className="file-input"
              />
            </div>

            {uploadError && (
              <div className="form-error">{uploadError}</div>
            )}

            {imagePreview && (
              <div className="form-group">
                <div className="image-preview-container">
                  <img src={imagePreview} alt="Preview" className="image-preview" />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="remove-image-btn"
                    aria-label="Remove image"
                  >
                    <span className="material-icons">close</span>
                  </button>
                </div>
              </div>
            )}

            <div className="form-actions">
              <Link to="/guided-story" className="btn-secondary">Back</Link>
              <button 
                type="submit" 
                className="btn-primary"
                disabled={!imagePreview}
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

export default GuidedStoryStep2

