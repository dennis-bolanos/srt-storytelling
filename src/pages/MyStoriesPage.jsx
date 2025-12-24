import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumbs from '../components/Breadcrumbs'

function MyStoriesPage() {
  const navigate = useNavigate()
  const [stories, setStories] = useState([])

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'My Stories', path: '/my-stories' }
  ]

  useEffect(() => {
    // Load stories from localStorage
    const savedStories = JSON.parse(localStorage.getItem('userStories') || '[]')
    
    // Merge with default placeholder stories if localStorage is empty
    if (savedStories.length === 0) {
      const defaultStories = [
        {
          id: 1,
          title: 'Exploring the Pacific Northwest: A Journey Through Washington\'s Natural Wonders',
          date: 'March 15, 2024',
          status: 'Pending Review'
        },
        {
          id: 2,
          title: 'The Everglades Experience: Discovering Florida\'s Unique Ecosystem',
          date: 'March 12, 2024',
          status: 'Approved'
        },
        {
          id: 3,
          title: 'Grand Canyon Adventures: Exploring Arizona\'s Desert Majesty',
          date: 'March 10, 2024',
          status: 'Pending Review'
        },
        {
          id: 4,
          title: 'Yosemite Valley: California\'s Natural Cathedral',
          date: 'March 8, 2024',
          status: 'Rejected'
        },
        {
          id: 5,
          title: 'Adirondack Mountains: New York\'s Natural Escape',
          date: 'March 5, 2024',
          status: 'Approved'
        }
      ]
      setStories(defaultStories)
    } else {
      setStories(savedStories)
    }
  }, [])

  // Listen for storage changes to update when new stories are added
  useEffect(() => {
    const handleStorageChange = () => {
      const savedStories = JSON.parse(localStorage.getItem('userStories') || '[]')
      setStories(savedStories)
    }

    window.addEventListener('storage', handleStorageChange)
    // Also check on focus in case it's the same window
    window.addEventListener('focus', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('focus', handleStorageChange)
    }
  }, [])

  const getStatusClass = (status) => {
    if (status === 'Approved') return 'status-approved'
    if (status === 'Rejected') return 'status-rejected'
    return 'status-pending'
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this story?')) {
      const updatedStories = stories.filter(story => story.id !== id)
      setStories(updatedStories)
      localStorage.setItem('userStories', JSON.stringify(updatedStories))
    }
  }

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="my-stories-container">
        <div className="my-stories-header">
          <h1 className="my-stories-title">My Stories</h1>
          <p className="my-stories-subtitle">Review and manage your submitted stories</p>
        </div>

        <div className="stories-table-container">
          <table className="stories-table">
            <thead>
              <tr>
                <th>Story Title</th>
                <th>Date Submitted</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {stories.map(story => (
                <tr key={story.id}>
                  <td className="story-title-cell">{story.title}</td>
                  <td>{story.date}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(story.status)}`}>
                      {story.status}
                    </span>
                  </td>
                  <td className="action-cell">
                    <button className="action-btn edit-btn" onClick={() => navigate(`/edit-story/${story.id}`)}>Edit</button>
                    <button className="action-btn delete-btn" onClick={() => handleDelete(story.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default MyStoriesPage

