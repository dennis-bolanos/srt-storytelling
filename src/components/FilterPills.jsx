import React from 'react'

function FilterPills({ stories, selectedState, onSelectState }) {
  const states = ['California', 'New York', 'Texas', 'Washington', 'Florida', 'Arizona']
  
  // Calculate counts for each state
  const stateCounts = states.reduce((acc, state) => {
    acc[state] = stories.filter(story => story.state === state).length
    return acc
  }, {})
  
  const totalCount = stories.length

  return (
    <div className="filter-container">
      <div className="filter-links">
        <button
          className={`filter-link ${selectedState === 'All' ? 'active' : ''}`}
          onClick={() => onSelectState('All')}
        >
          <p className="description">All ({totalCount})</p>
        </button>
        {states.map(state => (
          <button
            key={state}
            className={`filter-link ${selectedState === state ? 'active' : ''}`}
            onClick={() => onSelectState(state)}
          >
            <p className="description">{state} ({stateCounts[state]})</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterPills

