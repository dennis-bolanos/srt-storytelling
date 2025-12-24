import React from 'react'

function FilterPills({ activeFilters, onToggleFilter }) {
  const states = ['California', 'New York', 'Texas', 'Washington', 'Florida', 'Arizona']

  return (
    <div className="filter-container">
      <div className="filter-pills">
        {states.map(state => (
          <button
            key={state}
            className={`filter-pill ${activeFilters.includes(state) ? 'active' : ''}`}
            data-state={state}
            onClick={() => onToggleFilter(state)}
          >
            <span className="check-icon">✓</span>
            <span className="filter-text">{state}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterPills

