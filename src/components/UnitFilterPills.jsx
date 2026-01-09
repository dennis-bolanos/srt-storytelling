import React from 'react'

const UNITS = ['Alpha Unit', 'Beta Unit', 'Charlie Unit', 'Delta Unit']

function UnitFilterPills({ stories, selectedUnit, onSelectUnit }) {
  return (
    <div className="filter-container">
      <div className="filter-links">
        <button
          className={`filter-link ${selectedUnit === 'All' ? 'active' : ''}`}
          onClick={() => onSelectUnit('All')}
        >
          <p className="description">All</p>
        </button>
        {UNITS.map(unit => (
          <button
            key={unit}
            className={`filter-link ${selectedUnit === unit ? 'active' : ''}`}
            onClick={() => onSelectUnit(unit)}
          >
            <p className="description">{unit}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default UnitFilterPills
