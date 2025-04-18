"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import styles from "./product-filters.module.css"

const filterCategories = [
  { id: "ideal-for", label: "IDEAL FOR", options: ["Men", "Women", "Children"] },
  { id: "occasion", label: "OCCASION", options: ["Casual", "Formal", "Outdoor"] },
  { id: "work", label: "WORK", options: ["Office", "Travel", "Sport"] },
  { id: "fabric", label: "FABRIC", options: ["Cotton", "Leather", "Synthetic"] },
  { id: "segment", label: "SEGMENT", options: ["Premium", "Mid-range", "Budget"] },
  { id: "suitable-for", label: "SUITABLE FOR", options: ["Adults", "Teens", "Kids"] },
  { id: "raw-materials", label: "RAW MATERIALS", options: ["Organic", "Recycled", "Natural"] },
  { id: "pattern", label: "PATTERN", options: ["Solid", "Striped", "Patterned"] },
]

export default function ProductFilters() {
  const [expandedFilters, setExpandedFilters] = useState([])
  const [showFilters, setShowFilters] = useState(true)

  const toggleFilter = (filterId) => {
    setExpandedFilters((prev) => (prev.includes(filterId) ? prev.filter((id) => id !== filterId) : [...prev, filterId]))
  }

  return (
    <aside className={`${styles.filters} ${showFilters ? "" : styles.filtersHidden}`}>
      <div className={styles.filtersHeader}>
        <div className={styles.itemCount}>3425 ITEMS</div>
        <button
          className={styles.toggleFilters}
          onClick={() => setShowFilters(!showFilters)}
          aria-expanded={showFilters}
          aria-controls="filter-controls"
        >
          {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
      </div>

      <div id="filter-controls" className={styles.filterControls}>
        <div className={styles.customizableFilter}>
          <input type="checkbox" id="customizable" className={styles.checkbox} />
          <label htmlFor="customizable" className={styles.checkboxLabel}>
            CUSTOMIZABLE
          </label>
        </div>

        {filterCategories.map((category) => (
          <div key={category.id} className={styles.filterCategory}>
            <button
              className={styles.filterToggle}
              onClick={() => toggleFilter(category.id)}
              aria-expanded={expandedFilters.includes(category.id)}
              aria-controls={`filter-${category.id}`}
            >
              <span>{category.label}</span>
              {expandedFilters.includes(category.id) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            <div
              id={`filter-${category.id}`}
              className={`${styles.filterOptions} ${expandedFilters.includes(category.id) ? styles.expanded : ""}`}
            >
              <div className={styles.filterOption}>
                <input
                  type="radio"
                  id={`${category.id}-all`}
                  name={category.id}
                  defaultChecked
                  className={styles.radioInput}
                />
                <label htmlFor={`${category.id}-all`} className={styles.radioLabel}>
                  All
                </label>
              </div>

              {category.options.map((option) => (
                <div key={`${category.id}-${option}`} className={styles.filterOption}>
                  <input
                    type="radio"
                    id={`${category.id}-${option}`}
                    name={category.id}
                    className={styles.radioInput}
                  />
                  <label htmlFor={`${category.id}-${option}`} className={styles.radioLabel}>
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
