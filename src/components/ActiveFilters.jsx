import React from 'react'

function ActiveFilters({ selectedState, selectedCategory, onRemoveState, onRemoveCategory, onClearAll }) {
  const hasActiveFilters = selectedState !== 'All' || selectedCategory !== 'All'

  if (!hasActiveFilters) {
    return null
  }

  return (
    <div className="active-filters">
      <div className="active-filters-header">
        <h4 className="my-6">Active Filters</h4>
        <button className="clear-all-btn" onClick={onClearAll}>
          Clear All
        </button>
      </div>
      <div className="active-filters-list">
        {selectedState !== 'All' && (
          <div className="active-filter-item">
            <span className="active-filter-label">State:</span>
            <span className="active-filter-value">{selectedState}</span>
            <button 
              className="active-filter-remove" 
              onClick={onRemoveState}
              aria-label={`Remove ${selectedState} filter`}
            >
              <span className="material-icons">close</span>
            </button>
          </div>
        )}
        {selectedCategory !== 'All' && (
          <div className="active-filter-item">
            <span className="active-filter-label">Category:</span>
            <span className="active-filter-value">{selectedCategory}</span>
            <button 
              className="active-filter-remove" 
              onClick={onRemoveCategory}
              aria-label={`Remove ${selectedCategory} filter`}
            >
              <span className="material-icons">close</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ActiveFilters

