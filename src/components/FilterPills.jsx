import React from 'react'

function FilterPills({ stories, selectedState, onSelectState }) {
  // Get all unique states from stories (handle both array and single value)
  const allStates = stories.reduce((acc, story) => {
    const states = Array.isArray(story.states) ? story.states : [story.state || story.states].filter(Boolean)
    states.forEach(state => acc.add(state))
    return acc
  }, new Set())
  
  const states = Array.from(allStates).sort()

  return (
    <div className="filter-container">
      <div className="filter-links">
        <button
          className={`filter-link ${selectedState === 'All' ? 'active' : ''}`}
          onClick={() => onSelectState('All')}
        >
          <p className="description">All</p>
        </button>
        {states.map(state => (
          <button
            key={state}
            className={`filter-link ${selectedState === state ? 'active' : ''}`}
            onClick={() => onSelectState(state)}
          >
            <p className="description">{state}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterPills

