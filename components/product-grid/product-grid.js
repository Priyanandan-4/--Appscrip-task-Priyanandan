"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, ChevronDown } from "lucide-react"
import styles from "./product-grid.module.css"
import data from "../../data/products.json"
import { useSearchParams } from "next/navigation"

export default function ProductGrid() {
    const searchParams = useSearchParams()

    const filters = {
        idealFor: searchParams.get("idealFor"),
        occasion: searchParams.get("occasion"),
        work: searchParams.get("work"),
        fabric: searchParams.get("fabric"),
        segment: searchParams.get("segment"),
        suitableFor: searchParams.get("suitableFor"),
        rawMaterials: searchParams.get("rawMaterials"),
        pattern: searchParams.get("pattern"),
    }

    const filteredProducts = data.products.filter((product) => {
        return Object.entries(filters).every(([key, value]) => {
            if (!value || value === "All") return true
            return product[key] === value
        })
    })

    return (
        <section className={styles.productGridSection}>
            <div className={styles.productGridHeader}>
                <h2 className="visually-hidden">Product Listing</h2>
                <div className={styles.sortDropdown}>
                    <span className={styles.sortLabel}>RECOMMENDED</span>
                    <ChevronDown size={16} />
                </div>
            </div>

            <div className={styles.productGrid}>
                {filteredProducts.length === 0 ? (
                    <p>No products match your filter.</p>
                ) : (
                    filteredProducts.map((product) => (
                        <article key={product.id} className={styles.productCard}>
                            <div className={styles.productImageContainer}>
                                {product.isNew && <span className={styles.newBadge}>NEW PRODUCT</span>}
                                {!product.inStock && <span className={styles.outOfStockBadge}>OUT OF STOCK</span>}
                                <Link href={`/products/${product.slug}`} className={styles.productLink}>
                                    <Image
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.alt}
                                        width={300}
                                        height={300}
                                        className={styles.productImage}
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,..."
                                    />
                                </Link>
                                <button
                                    className={`${styles.favoriteButton} ${product.isFavorite ? styles.favoriteActive : ""}`}
                                    aria-label={product.isFavorite ? "Remove from favorites" : "Add to favorites"}
                                >
                                    <Heart size={20} />
                                </button>
                            </div>
                            <h3 className={styles.productName}>{product.name}</h3>
                            <p className={styles.productPrice}>Sign in or create an account to see pricing</p>
                        </article>
                    ))
                )}
            </div>
        </section>
    )
}
