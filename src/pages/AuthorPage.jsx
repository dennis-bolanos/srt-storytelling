import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Layout from '../components/Layout'
import StoryCard from '../components/StoryCard'
import Breadcrumbs from '../components/Breadcrumbs'
import { stories } from '../data/stories'

function AuthorPage() {
  const { authorName } = useParams()
  // Decode the author name from URL (replace %20 with space, etc.)
  const decodedAuthorName = decodeURIComponent(authorName)
  
  // Filter stories by author
  const authorStories = stories.filter(story => story.author === decodedAuthorName)

  if (authorStories.length === 0) {
    return (
      <Layout>
        <Breadcrumbs items={[{ label: 'Home', path: '/' }]} />
        <div className="story-detail-container">
          <h1>Author not found</h1>
          <p>No stories found for author: {decodedAuthorName}</p>
          <Link to="/" className="btn-secondary">Back to Home</Link>
        </div>
      </Layout>
    )
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: decodedAuthorName, path: `/author/${authorName}` }
  ]

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="author-page-container">
        <div className="author-page-header">
          <h1 className="author-page-title">Stories by {decodedAuthorName}</h1>
          <p className="author-page-subtitle">
            {authorStories.length} {authorStories.length === 1 ? 'story' : 'stories'}
          </p>
        </div>

        <div className="story-stack">
          {authorStories.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default AuthorPage

