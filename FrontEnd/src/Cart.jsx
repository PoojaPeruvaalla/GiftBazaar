
import { Link } from "react-router";

const Cart = ({ prop, prop1 }) => {

  let cartArr = [...prop];

  function removeCartItem(item) {
    prop1.setCartItem((prev) =>
      prev.filter((cartItem) => cartItem.id !== item.id)
    );
  }

  function increaseQty(item) {
    prop1.setCartItem((prev) =>
      prev.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  }

  function decreaseQty(item) {
    prop1.setCartItem((prev) =>
      prev.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              quantity: Math.max(1, cartItem.quantity - 1)
            }
          : cartItem
      )
    );
  }

  let totalPrice = cartArr.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{
      backgroundColor: "#FFFAF7",
      minHeight: "100vh",
      padding: "35px 5%"
    }}>

      {/* Heading */}

      <h2 style={{
        textAlign: "center",
        color: "#A92C58",
        fontSize: "35px",
        marginBottom: "10px"
      }}>
        My Shopping Cart 🛒
      </h2>

      <p style={{
        textAlign: "center",
        color: "#777",
        marginBottom: "35px"
      }}>
        Your favourite gifts are waiting for you!
      </p>


      {cartArr.length === 0 ? (

        <div style={{
          textAlign: "center",
          backgroundColor: "white",
          padding: "60px 20px",
          borderRadius: "15px",
          maxWidth: "700px",
          margin: "auto"
        }}>

          <h2 style={{ color: "#A92C58", fontSize: "25px" }}>
            Your cart is empty!
          </h2>

          <p style={{ color: "#777", margin: "15px" }}>
            Looks like you haven't added anything yet.
          </p>

          <Link to="/shop" style={{ textDecoration: "none" }}>
            <button style={{
              backgroundColor: "#A92C58",
              color: "white",
              padding: "12px 30px",
              borderRadius: "25px",
              border: "none",
              cursor: "pointer"
            }}>
              Continue Shopping
            </button>
          </Link>

        </div>

      ) : (

        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 2fr) minmax(280px, 1fr)",
          gap: "30px",
          alignItems: "start"
        }}>

          {/* LEFT SIDE - CART ITEMS */}

          <section>

            <h3 style={{
              color: "#A92C58",
              marginBottom: "20px"
            }}>
              Cart Items ({cartArr.length})
            </h3>

            {cartArr.map((item) => (

              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "15px",
                  marginBottom: "18px",
                  border: "1px solid #F0E4EA",
                  boxShadow: "0 3px 12px rgba(169,44,88,0.06)"
                }}
              >

                {/* Product Image */}

                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "contain",
                    borderRadius: "10px",
                    backgroundColor: "#FFFAF7"
                  }}
                />


                {/* Product Details */}

                <div style={{ flex: 1 }}>

                  <h3 style={{
                    color: "#333",
                    marginBottom: "8px"
                  }}>
                    {item.name}
                  </h3>

                  <p style={{
                    color: "#A92C58",
                    fontWeight: "bold",
                    fontSize: "18px"
                  }}>
                    ₹{item.price}
                  </p>

                  <p style={{
                    color: "#777",
                    fontSize: "14px"
                  }}>
                    Subtotal: ₹{item.price * item.quantity}
                  </p>

                </div>


                {/* Quantity and Remove */}

                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "15px"
                }}>

                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    border: "1px solid #F0B6CB",
                    borderRadius: "25px",
                    padding: "5px 12px"
                  }}>

                    <button
                      onClick={() => decreaseQty(item)}
                      style={{
                        border: "none",
                        background: "none",
                        color: "#A92C58",
                        cursor: "pointer",
                        fontSize: "20px"
                      }}
                    >
                      −
                    </button>

                    <span style={{ fontWeight: "bold" }}>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(item)}
                      style={{
                        border: "none",
                        background: "none",
                        color: "#A92C58",
                        cursor: "pointer",
                        fontSize: "20px"
                      }}
                    >
                      +
                    </button>

                  </div>

                  <button
                    onClick={() => removeCartItem(item)}
                    style={{
                      border: "none",
                      background: "none",
                      color: "#D95375",
                      cursor: "pointer",
                      textDecoration: "underline"
                    }}
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

            <Link to="/shop" style={{
              color: "#A92C58",
              textDecoration: "none",
              fontWeight: "bold"
            }}>
              ← Continue Shopping
            </Link>

          </section>


          {/* RIGHT SIDE - ORDER SUMMARY */}

          <aside style={{
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "25px",
            border: "1px solid #F0E4EA",
            boxShadow: "0 3px 12px rgba(169,44,88,0.08)",
            position: "sticky",
            top: "20px"
          }}>

            <h3 style={{
              color: "#A92C58",
              fontSize: "23px",
              marginBottom: "25px"
            }}>
              Order Summary
            </h3>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
              color: "#555"
            }}>
              <span>Total Items</span>
              <span>{cartArr.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
              color: "#555"
            }}>
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
              color: "#555"
            }}>
              <span>Delivery</span>
              <span style={{ color: "green" }}>FREE</span>
            </div>

            <hr style={{
              border: "1px solid #F0E4EA",
              marginBottom: "20px"
            }} />

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
              fontSize: "20px",
              color: "#A92C58",
              marginBottom: "25px"
            }}>
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>

            <Link
              to="/register"
              style={{ textDecoration: "none" }}
            >
              <button style={{
                width: "100%",
                padding: "14px",
                backgroundColor: "#A92C58",
                color: "white",
                border: "none",
                borderRadius: "30px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer"
              }}>
                Proceed to Checkout →
              </button>
            </Link>

            <p style={{
              textAlign: "center",
              color: "#999",
              fontSize: "12px",
              marginTop: "15px"
            }}>
              Thank you for shopping with GiftBazaar ❤️
            </p>

          </aside>

        </div>

      )}

    </div>
  );
};

export default Cart;

