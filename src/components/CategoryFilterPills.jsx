import React from 'react'

function CategoryFilterPills({ stories, selectedCategory, onSelectCategory }) {
  // Get all unique categories from stories
  const categories = [...new Set(stories.map(story => story.category))].sort()
  
  // Calculate counts for each category
  const categoryCounts = categories.reduce((acc, category) => {
    acc[category] = stories.filter(story => story.category === category).length
    return acc
  }, {})
  
  const totalCount = stories.length

  return (
    <div className="filter-container">
      <div className="filter-links">
        <button
          className={`filter-link ${selectedCategory === 'All' ? 'active' : ''}`}
          onClick={() => onSelectCategory('All')}
        >
          <p className="description">All ({totalCount})</p>
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={`filter-link ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            <p className="description">{category} ({categoryCounts[category]})</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilterPills

