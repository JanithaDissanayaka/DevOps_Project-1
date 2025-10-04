import type React from "react"


const OfferSection: React.FC = () => {
  return (
    <div className="offer-container">
      {/* Hero Offer Section */}
      <section className="hero-offer">
        <div className="hero-content">
          <h1 className="hero-title">
            GET A SPECIAL OFFER FOR FOR
            <br />
            YOUR SPECIAL OCCASION
          </h1>
          <ul className="offer-details">
            <li>20% off on dine-in & take-away (Mondays only)</li>
            <li>Valid until July 28, 2025</li>
            <li>Maximum discount: LKR 2,000 per card per day</li>
            <li>Exclusively for HNB Visa and Mastercard credit cardholders</li>
          </ul>
          <button className="cta-button">Book Reservation</button>
        </div>
      </section>

      {/* News and Articles Section */}
      <section className="news-section">
        <h2 className="news-title">OUR NEWS AND ARTICLES</h2>
        <div className="news-grid">
          <article className="news-card">
            <div className="news-image">
              <img src="/offer/burger.jpg" alt="Burger" />
            </div>
            <div className="news-content">
              <h3 className="news-card-title">LOOK HOW WE MAKE BEEF MEAT TASTY, WITH THIS TECHNIQUE</h3>
              <a href="#" className="read-more">
                Read More →
              </a>
            </div>
          </article>

          <article className="news-card">
            <div className="news-image">
              <img src="/offer/party.jpg" alt="Seafood" />
            </div>
            <div className="news-content">
              <h3 className="news-card-title">GET A 20% DISCOUNT AT OUR BIRTHDAY EVENT FOR IS 5000 SPEND</h3>
              <a href="#" className="read-more">
                Read More →
              </a>
            </div>
          </article>

          <article className="news-card">
            <div className="news-image">
              <img src="/offer/smoothie.jpg" alt="Smoothie" />
            </div>
            <div className="news-content">
              <h3 className="news-card-title">STRAWBERRY SMOOTHIE IS THE BEST BEVERAGE FOR YOUR HOT DAY</h3>
              <a href="#" className="read-more">
                Read More →
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2 className="newsletter-title">GET EXCLUSIVE UPDATE</h2>
          <p className="newsletter-subtitle">Subscribe to our newsletter</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Email" className="newsletter-input" required />
            <button type="submit" className="newsletter-button">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default OfferSection
