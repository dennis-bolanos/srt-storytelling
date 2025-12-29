import React from 'react'

function CategoryFilterPills({ stories, selectedCategory, onSelectCategory }) {
  // Get all unique categories from stories (handle both array and single value)
  const allCategories = stories.reduce((acc, story) => {
    const categories = Array.isArray(story.categories) ? story.categories : [story.category || story.categories].filter(Boolean)
    categories.forEach(category => acc.add(category))
    return acc
  }, new Set())
  
  const categories = Array.from(allCategories).sort()

  return (
    <div className="filter-container">
      <div className="filter-links">
        <button
          className={`filter-link ${selectedCategory === 'All' ? 'active' : ''}`}
          onClick={() => onSelectCategory('All')}
        >
          <p className="description">All</p>
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={`filter-link ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            <p className="description">{category}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilterPills

