import Image from "next/image"
import Link from "next/link"
import { Heart, ChevronDown } from "lucide-react"
import styles from "./product-grid.module.css"


const products = [
  {
    id: 1,
    name: "PRADO MULVANY DRESS BACKPACK",
    slug: "prado-mulvany-dress-backpack",
    image: "/images/bag.jpg",
    alt: "Gray Prado Mulvany Dress Backpack made from recycled materials",
    isNew: true,
    isFavorite: false,
    inStock: true,
  },
  {
    id: 2,
    name: "PRADO MULVANY DRESS BACKPACK",
    slug: "prado-mulvany-dress-backpack-blue",
    image: "/images/ppxoc.jpg",
    alt: "Blue Prado Mulvany Dress Backpack with leather straps",
    isNew: false,
    isFavorite: false,
    inStock: false,
  },
  {
    id: 3,
    name: "LEATHER KEYCHAIN HOLDER",
    slug: "leather-keychain-holder",
    image: "/images/keychain.jpg",
    alt: "Handcrafted brown leather keychain holder with brass hardware",
    isNew: false,
    isFavorite: true,
    inStock: true,
  },
  {
    id: 4,
    name: "PRODUCT NAME",
    slug: "PRODUCT NAME",
    image: "/images/cap.jpg",
    alt: "PRODUCT NAME",
    isNew: false,
    isFavorite: false,
    inStock: true,
  },
  {
    id: 5,
    name: "PRODUCT NAME",
    slug: "PRODUCT NAME",
    image: "/images/bag-two.jpg",
    alt: "PRODUCT NAME",
    isNew: false,
    isFavorite: false,
    inStock: true,
  },
  {
    id: 6,
    name: "PRODUCT NAME",
    slug: "leather-wallet",
    image: "/images/ppxoc-two.jpg",
    alt: "PRODUCT NAME",
    isNew: false,
    isFavorite: false,
    inStock: true,
  },
  {
    id: 7,
    name: "PRODUCT NAME",
    slug: "leather-wallet",
    image: "/images/bag-three.jpg",
    alt: "PRODUCT NAME",
    isNew: false,
    isFavorite: false,
    inStock: true,
  },
  {
    id: 8,
    name: "PRODUCT NAME",
    slug: "leather-wallet",
    image: "/images/bag-four.jpg",
    alt: "PRODUCT NAME",
    isNew: false,
    isFavorite: false,
    inStock: true,
  },
  {
    id: 9,
    name: "PRODUCT NAME",
    slug: "leather-wallet",
    image: "/images/bag-five.jpg",
    alt: "PRODUCT NAME",
    isNew: false,
    isFavorite: false,
    inStock: true,
  },
  {
    id: 10,
    name: "PRODUCT NAME",
    slug: "leather-wallet",
    image: "/images/bag-six.jpg",
    alt: "PRODUCT NAME",
    isNew: false,
    isFavorite: false,
    inStock: true,
  },{
    id: 11,
    name: "PRODUCT NAME",
    slug: "leather-wallet",
    image: "/images/bag-seven.jpg",
    alt: "PRODUCT NAME",
    isNew: false,
    isFavorite: false,
    inStock: true,
  },{
    id: 12,
    name: "PRODUCT NAME",
    slug: "leather-wallet",
    image: "/images/bag-eight.jpg",
    alt: "PRODUCT NAME",
    isNew: false,
    isFavorite: false,
    inStock: true,
  },
  
]

export default function ProductGrid() {
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
        {products.map((product) => (
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
                  // Placeholder until the image loads
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
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
        ))}
      </div>
    </section>
  )
}
