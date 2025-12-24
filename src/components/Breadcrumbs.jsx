import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li className={index === items.length - 1 ? "breadcrumb-item breadcrumb-current" : "breadcrumb-item"}>
              {index === items.length - 1 ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link to={item.path} className="breadcrumb-link">{item.label}</Link>
              )}
            </li>
            {index < items.length - 1 && (
              <li className="breadcrumb-separator" aria-hidden="true">&gt;</li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs

