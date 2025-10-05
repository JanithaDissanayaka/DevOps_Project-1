import type React from "react"


const OfferSection: React.FC = () => {
  return (
    <div className="offer-container">
      {/* Hero Offer Section */}
      <section className="hero-offer">
        <div className="hero-content">
          <h1 className="hero-title">
            GET A SPECIAL OFFER FOR
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
     <section>
        <div className="bg-yellow-400 px-6 py-12 sm:px-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Section */}
            <div className="text-left">
              <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-2">
                GET EXCLUSIVE UPDATE
              </h2>
              <p className="text-white text-sm sm:text-white pl-4">
                Stay ahead with the freshest scoop.
              </p>
            </div>

            {/* Right Section - Form */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Email"
                className="px-6 py-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black w-full sm:w-80"
              />
              <button className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OfferSection
