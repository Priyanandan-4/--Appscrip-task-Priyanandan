"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ChevronDown, ChevronUp, Filter } from 'lucide-react'
import styles from "./product-filters.module.css"

const filterCategories = [
    { id: "idealFor", label: "IDEAL FOR", options: ["Men", "Women", "Children"] },
    { id: "occasion", label: "OCCASION", options: ["Casual", "Formal", "Outdoor"] },
    { id: "work", label: "WORK", options: ["Office", "Travel", "Sport"] },
    { id: "fabric", label: "FABRIC", options: ["Cotton", "Leather", "Synthetic"] },
    { id: "segment", label: "SEGMENT", options: ["Premium", "Mid-range", "Budget"] },
    { id: "suitableFor", label: "SUITABLE FOR", options: ["Adults", "Teens", "Kids"] },
    { id: "rawMaterials", label: "RAW MATERIALS", options: ["Organic", "Recycled", "Natural"] },
    { id: "pattern", label: "PATTERN", options: ["Solid", "Striped", "Patterned"] },
]

export default function ProductFilters() {
    const [expandedFilters, setExpandedFilters] = useState([])
    const [showFilters, setShowFilters] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        
        // Initial check
        checkIfMobile()
        
        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile)
        
        // Clean up
        return () => window.removeEventListener('resize', checkIfMobile)
    }, [])

    const toggleFilter = (filterId) => {
        setExpandedFilters((prev) => (
            prev.includes(filterId) ? prev.filter((id) => id !== filterId) : [...prev, filterId]
        ))
    }

    const toggleAllFilters = () => {
        setShowFilters(!showFilters)
    }

    const handleFilterChange = (categoryId, value) => {
        const params = new URLSearchParams(searchParams.toString())

        if (value === "All") {
            params.delete(categoryId)
        } else {
            params.set(categoryId, value)
        }

        router.push(`?${params.toString()}`)
    }

    const clearFilters = () => router.push("/")

    // Count active filters
    const activeFiltersCount = filterCategories.reduce((count, category) => {
        return searchParams.has(category.id) ? count + 1 : count
    }, 0)

    return (
        <aside className={styles.filtersContainer}>
            <div className={styles.mobileFilterHeader}>
                <button 
                    className={styles.mobileFilterToggle}
                    onClick={toggleAllFilters}
                    aria-expanded={showFilters}
                >
                    <Filter size={16} />
                    <span>FILTER</span>
                    {activeFiltersCount > 0 && (
                        <span className={styles.filterBadge}>{activeFiltersCount}</span>
                    )}
                    {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
            </div>

            <div className={`${styles.filters} ${showFilters || !isMobile ? "" : styles.filtersHidden}`}>
                <div className={styles.filtersHeader}>
                    <div className={styles.itemCount}>3425 ITEMS</div>
                    {filterCategories.some((category) => searchParams.get(category.id)) && (
                        <button
                            className={styles.clearFilters}
                            onClick={clearFilters}
                        >
                            CLEAR FILTERS
                        </button>
                    )}
                </div>

                <div className={styles.filterControls}>
                    {filterCategories.map((category) => {
                        const selectedValue = searchParams.get(category.id) || "All"

                        return (
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
                                    {["All", ...category.options].map((option) => (
                                        <div key={`${category.id}-${option}`} className={styles.filterOption}>
                                            <input
                                                type="radio"
                                                id={`${category.id}-${option}`}
                                                name={category.id}
                                                checked={selectedValue === option}
                                                onChange={() => handleFilterChange(category.id, option)}
                                                className={styles.radioInput}
                                            />
                                            <label htmlFor={`${category.id}-${option}`} className={styles.radioLabel}>
                                                {option}
                                                {option !== "All" && selectedValue === "All" && (
                                                    <span className={styles.optionCount}>(125)</span>
                                                )}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </aside>
    )
}
