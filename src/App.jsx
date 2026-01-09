import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ShareStoryPage from './pages/ShareStoryPage'
import GuidedStoryPage from './pages/GuidedStoryPage'
import GuidedStoryStep2 from './pages/GuidedStoryStep2'
import GuidedStoryStep3 from './pages/GuidedStoryStep3'
import GuidedStoryStep4 from './pages/GuidedStoryStep4'
import GuidedStoryStep5 from './pages/GuidedStoryStep5'
import ReviewStoryPage from './pages/ReviewStoryPage'
import MyStoriesPage from './pages/MyStoriesPage'
import EditStoryPage from './pages/EditStoryPage'
import StoryDetailPage from './pages/StoryDetailPage'
import AuthorPage from './pages/AuthorPage'
import StorytellingMapPage from './pages/StorytellingMapPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/share-story" element={<ShareStoryPage />} />
      <Route path="/guided-story" element={<GuidedStoryPage />} />
      <Route path="/guided-story/step2" element={<GuidedStoryStep2 />} />
      <Route path="/guided-story/step3" element={<GuidedStoryStep3 />} />
      <Route path="/guided-story/step4" element={<GuidedStoryStep4 />} />
      <Route path="/guided-story/step5" element={<GuidedStoryStep5 />} />
      <Route path="/review-story" element={<ReviewStoryPage />} />
      <Route path="/my-stories" element={<MyStoriesPage />} />
      <Route path="/edit-story/:id" element={<EditStoryPage />} />
      <Route path="/story/:id" element={<StoryDetailPage />} />
      <Route path="/author/:authorName" element={<AuthorPage />} />
      <Route path="/storytelling-map" element={<StorytellingMapPage />} />
    </Routes>
  )
}

export default App

