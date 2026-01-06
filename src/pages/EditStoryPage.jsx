import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumbs from '../components/Breadcrumbs'

const MIN_CHARACTERS = 100
const FEELING_OPTIONS = [
  'Super excited',
  'Good enough',
  'Just OK',
  'Not a fan',
  'Disappointed'
]

function EditStoryPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    state: 'California',
    author: '',
    authorTitle: '',
    step1: '',
    image: '',
    step2: '',
    step3: '',
    step4: '',
    step5: ''
  })
  
  const [imagePreview, setImagePreview] = useState('')
  const fileInputRef = useRef(null)
  
  const characterCount = formData.step3 ? formData.step3.length : 0
  const remainingCharacters = MIN_CHARACTERS - characterCount
  const isStep3Valid = characterCount >= MIN_CHARACTERS

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'My Stories', path: '/my-stories' },
    { label: 'Edit Story', path: `/edit-story/${id}` }
  ]

  const states = ['California', 'New York', 'Texas', 'Washington', 'Florida', 'Arizona']
  const categories = ['Productivity', 'Mindfulness', 'Collaboration', 'Adventure', 'Nature', 'Travel', 'Wellness', 'Innovation']

  useEffect(() => {
    // Load story from localStorage
    const savedStories = JSON.parse(localStorage.getItem('userStories') || '[]')
    const story = savedStories.find(s => s.id === parseInt(id))

    if (story) {
      // If story has formData (from guided flow), use that
      if (story.formData) {
        const image = story.image || story.formData.image || ''
        setFormData({
          title: story.title || story.formData.step1 || '',
          category: story.category || '',
          state: story.state || 'California',
          author: story.author || '',
          authorTitle: story.authorTitle || '',
          step1: story.formData.step1 || story.title || '',
          image: image,
          step2: story.formData.step2 || '',
          step3: story.formData.step3 || '',
          step4: story.formData.step4 || '',
          step5: story.formData.step5 || ''
        })
        setImagePreview(image)
      } else {
        // Migrate old format to new format
        const image = story.image || ''
        setFormData({
          title: story.title || '',
          category: story.category || '',
          state: story.state || 'California',
          author: story.author || '',
          authorTitle: story.authorTitle || '',
          step1: story.title || '',
          image: image,
          step2: story.description || '',
          step3: '',
          step4: '',
          step5: ''
        })
        setImagePreview(image)
      }
    }
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => {
      const updated = {
        ...prev,
        [name]: value
      }
      // Sync step1 with title for backward compatibility
      if (name === 'step1') {
        updated.title = value
      } else if (name === 'title') {
        updated.step1 = value
      }
      return updated
    })
  }

  const handleFeelingChange = (feeling) => {
    setFormData(prev => ({
      ...prev,
      step4: feeling
    }))
  }

  const handleImageUrlChange = (e) => {
    const url = e.target.value
    setFormData(prev => ({
      ...prev,
      image: url
    }))
    setImagePreview(url)
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (!file.type.startsWith('image/')) {
        return
      }
      if (file.size > 5 * 1024 * 1024) {
        return
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        const dataUrl = reader.result
        setImagePreview(dataUrl)
        setFormData(prev => ({
          ...prev,
          image: dataUrl
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setImagePreview('')
    setFormData(prev => ({
      ...prev,
      image: ''
    }))
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Load existing stories
    const savedStories = JSON.parse(localStorage.getItem('userStories') || '[]')
    const storyIndex = savedStories.findIndex(s => s.id === parseInt(id))
    
    if (storyIndex !== -1) {
      // Update the story with wizard format
      savedStories[storyIndex] = {
        ...savedStories[storyIndex],
        title: formData.step1,
        category: formData.category,
        state: formData.state,
        author: formData.author,
        authorTitle: formData.authorTitle,
        image: formData.image,
        formData: {
          step1: formData.step1,
          image: formData.image,
          step2: formData.step2,
          step3: formData.step3,
          step4: formData.step4,
          step5: formData.step5
        },
        // Preserve date and status if they exist
        date: savedStories[storyIndex].date || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        status: savedStories[storyIndex].status || 'Pending Review'
      }
      
      // Save back to localStorage
      localStorage.setItem('userStories', JSON.stringify(savedStories))
      
      // Navigate back to my-stories
      navigate('/my-stories')
    }
  }

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="edit-story-container">
        <div className="edit-story-header">
          <h1 className="edit-story-title">Edit Story</h1>
          <p className="edit-story-subtitle">Update your story information</p>
        </div>

        <form className="edit-story-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="step1" className="form-label">Story Title *</label>
            <input
              type="text"
              id="step1"
              name="step1"
              className="form-input"
              value={formData.step1}
              onChange={handleChange}
              required
              placeholder="Enter your story title..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="image-url" className="form-label">Insert your image *</label>
            <input
              type="url"
              id="image-url"
              name="image-url"
              className="form-input"
              placeholder="https://images.unsplash.com/..."
              value={formData.image}
              onChange={handleImageUrlChange}
              required
            />
            <div className="form-group" style={{ marginTop: '16px' }}>
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
            {imagePreview && (
              <div className="form-group" style={{ marginTop: '16px' }}>
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
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category" className="form-label">Category *</label>
              <select
                id="category"
                name="category"
                className="form-input"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="state" className="form-label">State *</label>
              <select
                id="state"
                name="state"
                className="form-input"
                value={formData.state}
                onChange={handleChange}
                required
              >
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="step2" className="form-label">Why does it matter? *</label>
            <textarea
              id="step2"
              name="step2"
              className="form-textarea story-textarea"
              rows="8"
              value={formData.step2}
              onChange={handleChange}
              required
              placeholder="Explain why this story matters to you..."
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="step3" className="form-label">What did you learn? *</label>
            <textarea
              id="step3"
              name="step3"
              className="form-textarea story-textarea"
              rows="8"
              value={formData.step3}
              onChange={handleChange}
              required
              minLength={MIN_CHARACTERS}
              placeholder="Share what you learned from this experience..."
            ></textarea>
            <div className={`character-counter ${!isStep3Valid ? 'character-counter-warning' : 'character-counter-valid'}`}>
              {remainingCharacters > 0 ? (
                <span>{remainingCharacters} characters remaining (minimum {MIN_CHARACTERS})</span>
              ) : (
                <span>{characterCount} characters</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">How do you feel about this? *</label>
            <div className="checkbox-group">
              {FEELING_OPTIONS.map((feeling, index) => (
                <label key={index} className="checkbox-option">
                  <input
                    type="radio"
                    name="step4"
                    value={feeling}
                    checked={formData.step4 === feeling}
                    onChange={() => handleFeelingChange(feeling)}
                    required
                  />
                  <span className="checkbox-label">{feeling}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="step5" className="form-label">Closing notes *</label>
            <textarea
              id="step5"
              name="step5"
              className="form-textarea story-textarea"
              rows="8"
              value={formData.step5}
              onChange={handleChange}
              required
              placeholder="Add any closing thoughts or notes to your story..."
            ></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="author" className="form-label">Author Name *</label>
              <input
                type="text"
                id="author"
                name="author"
                className="form-input"
                value={formData.author}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="authorTitle" className="form-label">Author Title *</label>
              <input
                type="text"
                id="authorTitle"
                name="authorTitle"
                className="form-input"
                value={formData.authorTitle}
                onChange={handleChange}
                required
                placeholder="e.g., Adventure Guide, Nature Enthusiast"
              />
            </div>
          </div>

          <div className="form-actions">
            <Link to="/my-stories" className="btn-secondary">Cancel</Link>
            <button 
              type="submit" 
              className="btn-primary"
              disabled={!isStep3Valid}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default EditStoryPage

