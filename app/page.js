import Header from "@/components/header/header"

import ProductGrid from "@/components/product-grid/product-grid"
import styles from "./page.module.css"
import Script from "next/script"
import ProductFilters from "@/components/product-filters/product-filters"
import Footer from "@/components/footer/footer"

export const metadata = {
  title: "Discover Our Products | Premium Handcrafted Collection | MetaShop",
  description:
    "Browse our curated collection of handcrafted products. Find unique backpacks, accessories, and toys made by skilled artisans with sustainable materials.",
}

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <section className={styles.heroSection}>
            <h1 className={styles.pageTitle}>DISCOVER OUR PRODUCTS</h1>
            <p className={styles.pageDescription}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br/>scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </p>
          </section>

          <section className={styles.productsSection}>
            <div className={styles.productsContainer}>
              <ProductFilters />
              <ProductGrid />
            </div>
          </section>

       
        </div>
      </main>
      <Footer/>

      {/* Structured Data for Product List */}
      <Script
        id="product-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "Product",
                  name: "Prado Mulvany Dress Backpack",
                  image: "https://example.com/images/prado-mulvany-dress-backpack.jpg",
                  description: "Handcrafted backpack made from sustainable materials",
                  brand: {
                    "@type": "Brand",
                    name: "MetaShop",
                  },
                  offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/InStock",
                    price: "129.99",
                    priceCurrency: "USD",
                  },
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "Product",
                  name: "Handcrafted Toy Dinosaur",
                  image: "https://example.com/images/handcrafted-toy-dinosaur.jpg",
                  description: "Eco-friendly children's toy made from natural materials",
                  brand: {
                    "@type": "Brand",
                    name: "MetaShop",
                  },
                  offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/OutOfStock",
                    price: "39.99",
                    priceCurrency: "USD",
                  },
                },
              },
            ],
          }),
        }}
      />

      {/* Structured Data for Organization */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MetaShop",
            url: "https://metashop.example.com",
            logo: "https://metashop.example.com/images/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+44-221-133-5360",
              contactType: "customer service",
              email: "customercare@metashop.com",
            },
            sameAs: ["https://www.instagram.com/metashop", "https://www.linkedin.com/company/metashop"],
          }),
        }}
      />
    </>
  )
}
