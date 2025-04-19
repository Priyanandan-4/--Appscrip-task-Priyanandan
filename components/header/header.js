import Link from "next/link"
import Image from "next/image"
import { Search, Heart, ShoppingBag, Menu, ChevronDown, User } from "lucide-react"
import styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarContent}>
            <div className={styles.shippingText}>🔥 Free shipping worldwide</div>
            <div className={styles.topLinks}>
              <Link href="/track-order" className={styles.topLink}>
                Track your order
              </Link>
              <Link href="/register" className={styles.topLink}>
                Create account
              </Link>
              <Link href="/login" className={styles.topLink}>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.mainHeader}>
          <div className={styles.logoContainer}>
            <div className={styles.mobileMenu}>
              <button className={styles.iconButton} aria-label="Menu">
                <Menu size={24} />
              </button>
            </div>
            <Link href="/" aria-label="MetaShop Home">
              <Image src="/icons/logo.svg" alt="logo -" width={32} height={32} className={styles.logoSymbol} />
            </Link>
          </div>
          <div className={styles.logoText}>LOGO</div>
          <div className={styles.headerActions}>
            <button className={styles.iconButton} aria-label="Search">
              <Search size={20} />
            </button>
            <button className={styles.iconButton} aria-label="Favorites">
              <Heart size={20} />
            </button>
            <button className={styles.iconButton} aria-label="Shopping bag">
              <ShoppingBag size={20} />
            </button>
            <button className={`${styles.iconButton} ${styles.accountButton}`} aria-label="Account">
              <User size={20} />
            </button>
            <div className={`${styles.languageSelector} ${styles.language}`}>
              <span>ENG</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainNaAlign}>
        <nav className={styles.mainNav} aria-label="Main navigation">
          <Link href="/shop" className={styles.navLink}>
            SHOP
          </Link>
          <Link href="/skills" className={styles.navLink}>
            SKILLS
          </Link>
          <Link href="/stories" className={styles.navLink}>
            STORIES
          </Link>
          <Link href="/about" className={styles.navLink}>
            ABOUT
          </Link>
          <Link href="/contact" className={styles.navLink}>
            CONTACT US
          </Link>
        </nav>
      </div>
    </header>
  )
}