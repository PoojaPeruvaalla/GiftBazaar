import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./Shop.css";

const Shop = ({ props }) => {
const [gift, setGift] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

// Wishlist data from parent component
const like = props?.like || [];
const setLike = props?.setLike;

// Filter states
const [category, setCategory] = useState("All");
const [occasion, setOccasion] = useState("All");
const [recp, setRecp] = useState("All");
const [search, setSearch] = useState("");

// Fetch products from JSON Server
useEffect(() => {
axios.get("https://giftbazaar-api.onrender.com/gifts")
.then((response) => {
setGift(response.data);
})
.catch((error) => {
console.error("Error fetching gifts:", error);
setError("Unable to load products. Please try again.");
})
.finally(() => {
setLoading(false);
});
}, []);

// Wishlist toggle
function WishListFun(item) {
if (!setLike) return;


setLike((prev) => {
  const exists = prev.some((gift) => gift.id === item.id);

  if (exists) {
    return prev.filter((gift) => gift.id !== item.id);
  }

  return [...prev, item];
});

}

// Dynamic categories
const categories = useMemo(() => {
return [
"All",
...new Set(gift.map((item) => item.category).filter(Boolean)),
];
}, [gift]);

// Dynamic occasions
const occasions = useMemo(() => {
return [
"All",
...new Set(
gift.flatMap((item) =>
Array.isArray(item.occasion) ? item.occasion : []
)
),
];
}, [gift]);

// Dynamic recipients
const recipients = useMemo(() => {
return [
"All",
...new Set(
gift.flatMap((item) =>
Array.isArray(item.recipient) ? item.recipient : []
)
),
];
}, [gift]);

// Filter products
const filteredGifts = useMemo(() => {
return gift.filter((item) => {
const itemCategory = (item.category || "").toLowerCase();
const itemName = (item.name || "").toLowerCase();


  const selectedCategory = category.toLowerCase();
  const selectedOccasion = occasion.toLowerCase();
  const selectedRecp = recp.toLowerCase();
  const searchTerm = search.toLowerCase().trim();

  // Category filter
  if (
    selectedCategory !== "all" &&
    itemCategory !== selectedCategory
  ) {
    return false;
  }

  // Occasion filter
  if (
    selectedOccasion !== "all" &&
    !(Array.isArray(item.occasion) ? item.occasion : []).some(
      (oc) => oc.toLowerCase() === selectedOccasion
    )
  ) {
    return false;
  }

  // Recipient filter
  if (
    selectedRecp !== "all" &&
    !(Array.isArray(item.recipient) ? item.recipient : []).some(
      (recipient) => recipient.toLowerCase() === selectedRecp
    )
  ) {
    return false;
  }

  // Search filter
  if (searchTerm && !itemName.includes(searchTerm)) {
    return false;
  }

  return true;
});


}, [gift, category, occasion, recp, search]);

// Clear all filters
function clearFilters() {
setCategory("All");
setOccasion("All");
setRecp("All");
setSearch("");
}

return ( <main className="shop-page">


  {/* Shop Heading */}
  <div className="shop-heading">
    <p className="shop-subtitle">MAKE EVERY MOMENT SPECIAL</p>
    <h1>Find the Perfect Gift</h1>
    <p>Thoughtful gifts for every person and every occasion.</p>
  </div>

  {/* Search and Category Section */}
  <section className="shop-top-section">

    <div className="shop-search">
      <input
        type="text"
        placeholder="Search for gifts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    <div className="category-filters">
      {categories.map((cat) => (
        <button
          type="button"
          key={cat}
          onClick={() => setCategory(cat)}
          className={category === cat ? "active-filter" : ""}
        >
          {cat}
        </button>
      ))}
    </div>

  </section>

  {/* Main Shop Content */}
  <section className="shop-content">

    {/* Sidebar */}
    <aside className="shop-sidebar">

      <div className="filter-heading">
        <h2>Filters</h2>
        <button type="button" onClick={clearFilters}>
          Clear All
        </button>
      </div>

      {/* Occasion Filters */}
      <div className="filter-group">
        <h3>Occasions</h3>

        {occasions.map((item) => (
          <button
            type="button"
            key={item}
            onClick={() => setOccasion(item)}
            className={occasion === item ? "selected-option" : ""}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Recipient Filters */}
      <div className="filter-group">
        <h3>Recipients</h3>

        {recipients.map((item) => (
          <button
            type="button"
            key={item}
            onClick={() => setRecp(item)}
            className={recp === item ? "selected-option" : ""}
          >
            {item}
          </button>
        ))}
      </div>

    </aside>

    {/* Product Section */}
    <div className="shop-products">

      <div className="products-heading">
        <h2>Our Gifts</h2>
        <p>
          {loading
            ? "Loading products..."
            : `${filteredGifts.length} products found`}
        </p>
      </div>

      {loading ? (
        <div className="shop-message">
          <div className="loader"></div>
          <p>Loading your gifts...</p>
        </div>
      ) : error ? (
        <div className="shop-message error-message">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      ) : filteredGifts.length === 0 ? (
        <div className="shop-message">
          <h3>No gifts found!</h3>
          <p>Try changing your search or filters.</p>
          <button onClick={clearFilters}>Clear Filters</button>
        </div>
      ) : (

        <div className="product-grid">

          {filteredGifts.map((item) => {
            const isLiked = like.some(
              (gift) => gift.id === item.id
            );

            return (
              <article className="product-card" key={item.id}>

                <div className="product-image-container">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="product-image"
                  />

                  <button
                    type="button"
                    className="wishlist-button"
                    onClick={() => WishListFun(item)}
                    aria-label={
                      isLiked
                        ? "Remove from wishlist"
                        : "Add to wishlist"
                    }
                  >
                    {isLiked ? (
                      <FavoriteIcon />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </button>

                </div>

                <div className="product-details">

                  <p className="product-category">
                    {item.category}
                  </p>

                  <h3>{item.name}</h3>

                  <div className="product-price">
                    <span>₹{item.price}</span>

                    {item.originalPrice && (
                      <del>₹{item.originalPrice}</del>
                    )}
                  </div>

                  {item.rating && (
                    <p className="product-rating">
                      ★ {item.rating} / 5
                    </p>
                  )}

                </div>

              </article>
            );
          })}

        </div>
      )}

    </div>

  </section>

</main>

);
};

export default Shop;
