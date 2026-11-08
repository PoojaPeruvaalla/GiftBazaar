

import "./About.css";
import { Link } from "react-router";

const About = () => {

  return (
    <div className="about-page">

      {/* HERO SECTION */}

      <section className="about-hero">

        <div className="about-hero-content">

          <p className="about-tag">WELCOME TO GIFTBAZAAR</p>

          <h1>
            Making Every Moment
            <span> Special ❤️</span>
          </h1>

          <p>
            We believe every gift tells a story. At GiftBazaar,
            we help you find the perfect gift to express your
            love, gratitude and happiness.
          </p>

          <Link to="/shop">
            <button className="about-btn">
              Explore Gifts
            </button>
          </Link>

        </div>

      </section>


      {/* OUR STORY */}

      <section className="about-story">

        <div className="story-image">
          <img
            src="src/assets/4.jpg"
            alt="Beautiful gift boxes"
          />
        </div>

        <div className="story-content">

          <p className="about-tag">OUR STORY</p>

          <h2>
            A Little Gift,
            <span> A Lot of Happiness</span>
          </h2>

          <p>
            GiftBazaar was created with one simple thought:
            making gifting easier, more meaningful and memorable.
          </p>

          <p>
            Whether it is a birthday, anniversary, wedding or
            just a random day when you want to make someone smile,
            we bring together thoughtful gifts for every occasion.
          </p>

          <p>
            From personalized gifts to beautiful gift hampers,
            we make finding the right gift a delightful experience.
          </p>

        </div>

      </section>


      {/* OUR MISSION */}

      <section className="mission-section">

        <p className="about-tag">WHAT WE BELIEVE</p>

        <h2>Our Mission & Vision</h2>

        <div className="mission-cards">

          <div className="mission-card">
            <span>🎯</span>
            <h3>Our Mission</h3>
            <p>
              To make gifting simple, affordable and meaningful
              by bringing thoughtful gifts closer to everyone.
            </p>
          </div>

          <div className="mission-card">
            <span>💗</span>
            <h3>Our Vision</h3>
            <p>
              To become a trusted gifting destination where
              every celebration becomes a beautiful memory.
            </p>
          </div>

          <div className="mission-card">
            <span>🎁</span>
            <h3>Our Promise</h3>
            <p>
              To offer carefully selected gifts and a smooth
              shopping experience for every customer.
            </p>
          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}

      <section className="why-section">

        <h2>Why Choose GiftBazaar?</h2>

        <div className="why-grid">

          <div>
            <span>🎀</span>
            <h3>Unique Gifts</h3>
            <p>Find something special for every person.</p>
          </div>

          <div>
            <span>💝</span>
            <h3>Every Occasion</h3>
            <p>Gifts for birthdays, weddings and celebrations.</p>
          </div>

          <div>
            <span>✨</span>
            <h3>Easy Shopping</h3>
            <p>Discover your favourite gifts with ease.</p>
          </div>

          <div>
            <span>❤️</span>
            <h3>Made With Love</h3>
            <p>Thoughtful gifting that creates happy moments.</p>
          </div>

        </div>

      </section>


      {/* BOTTOM BANNER */}

      <section className="about-banner">

        <h2>Make Someone's Day Special!</h2>

        <p>
          The perfect gift is just a click away.
        </p>

        <Link to="/shop">
          <button>Shop Now →</button>
        </Link>

      </section>

    </div>
  );
};

export default About;

