import Link from "next/link";

import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* First column */}
          <div className={styles.footerColumn}>
            <h2 className={styles.footerHeading}>BE THE FIRST TO KNOW</h2>
            <p className={styles.footerText}>
              Sign up for updates from metaà muse.
            </p>
            <div className={styles.footerSubscribe}>
              <input
                type="email"
                placeholder="Email"
                aria-label="Email for newsletter"
                className={styles.footerInput}
              />
              <button className={styles.footerButton}>SUBSCRIBE</button>
            </div>
          </div>

          {/* Second column */}
          <div className={styles.footerColumn}>
            <h2 className={styles.footerHeading}>CONTACT US</h2>
            <p className={styles.footerText}>+44 221 133 5360</p>
            <p className={styles.footerText}>customercare@metamuse.com</p>

            <h2 className={styles.footerHeading}>CURRENCY</h2>
            <div className={styles.currencySelector}>
              <Image
                width={200}
                height={200}
                src="/images/american-flag.jpg" // or your desired image
                alt="currency flag"
                className={styles.currencyImage}
              />
              <span>USD</span>
            </div>

            <p className={styles.footerSmallText}>
              Transactions will be completed in Euros and a currency conversion
              will be applied at checkout.
            </p>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.linksColumn}>
            <h3 className={styles.linksHeading}>metaà muse</h3>
            <ul className={styles.linksList}>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/stories">Stories</Link>
              </li>
              <li>
                <Link href="/artisans">Artisans</Link>
              </li>
              <li>
                <Link href="/boutiques">Boutiques</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/compliance">EU Compliance Docs</Link>
              </li>
            </ul>
          </div>
          <div className={styles.linksColumn}>
            <h3 className={styles.linksHeading}>QUICK LINKS</h3>
            <ul className={styles.linksList}>
              <li>
                <Link href="/orders-shipping">Orders & Shipping</Link>
              </li>
              <li>
                <Link href="/seller">Join/Login as a Seller</Link>
              </li>
              <li>
                <Link href="/payment">Payment & Pricing</Link>
              </li>
              <li>
                <Link href="/returns">Return & Refunds</Link>
              </li>
              <li>
                <Link href="/faqs">FAQs</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h2 className={styles.footerHeading}>FOLLOW US</h2>
            <div className={styles.socialLinks}>
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className={styles.socialLink}
              >
                <div className={styles.socialIcon}>in</div>
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <div className={styles.socialIcon}>ig</div>
              </Link>
            </div>

            <h2 className={styles.footerHeading}>metaà muse ACCEPTS</h2>
            <div className={styles.paymentMethods}>
              <div className={styles.paymentMethod} aria-label="Visa">
                <Image
                  src="/icons/gpay.svg"
                  width={50}
                  height={30}
                  alt="Google Pay"
                  className={styles.paymentImage}
                />
              </div>

              <div className={styles.paymentMethod} aria-label="Mastercard">
                <Image
                  src="/icons/creditcard.svg"
                  width={50}
                  height={30}
                  alt="Creditcard"
                  className={styles.paymentImage}
                />
              </div>
              <div
                className={`${styles.paymentMethod} ${styles.bg}`}
                aria-label="amaz"
              >
                <Image
                  src="/icons/amaz.svg"
                  width={30}
                  height={20}
                  alt="amaz"
                  className={styles.paymentImage}
                />
              </div>
              <div
                className={styles.paymentMethod}
                aria-label="American Express"
              >
                <Image
                  src="/icons/apple pay.svg"
                  width={30}
                  height={20}
                  alt="Apple Pay"
                  className={styles.paymentImage}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          Copyright © 2023 metaàmuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
