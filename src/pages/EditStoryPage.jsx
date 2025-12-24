import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumbs from '../components/Breadcrumbs'

function EditStoryPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    state: 'California',
    image: '',
    author: '',
    authorTitle: ''
  })

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
        setFormData({
          title: story.title || story.formData.step1 || '',
          category: story.category || '',
          description: story.description || story.formData.step2 || '',
          state: story.state || 'California',
          image: story.image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=592&h=320&fit=crop',
          author: story.author || '',
          authorTitle: story.authorTitle || ''
        })
      } else {
        // Use existing story data
        setFormData({
          title: story.title || '',
          category: story.category || '',
          description: story.description || '',
          state: story.state || 'California',
          image: story.image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=592&h=320&fit=crop',
          author: story.author || '',
          authorTitle: story.authorTitle || ''
        })
      }
    }
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Load existing stories
    const savedStories = JSON.parse(localStorage.getItem('userStories') || '[]')
    const storyIndex = savedStories.findIndex(s => s.id === parseInt(id))
    
    if (storyIndex !== -1) {
      // Update the story
      savedStories[storyIndex] = {
        ...savedStories[storyIndex],
        ...formData,
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
            <label htmlFor="title" className="form-label">Story Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-input"
              value={formData.title}
              onChange={handleChange}
              required
            />
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
            <label htmlFor="description" className="form-label">Description *</label>
            <textarea
              id="description"
              name="description"
              className="form-textarea"
              rows="6"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Write a brief description of your story..."
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="image" className="form-label">Image URL *</label>
            <input
              type="url"
              id="image"
              name="image"
              className="form-input"
              value={formData.image}
              onChange={handleChange}
              required
              placeholder="https://images.unsplash.com/..."
            />
            {formData.image && (
              <div className="image-preview">
                <img src={formData.image} alt="Preview" onError={(e) => { e.target.style.display = 'none' }} />
              </div>
            )}
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
            <button type="submit" className="btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default EditStoryPage

