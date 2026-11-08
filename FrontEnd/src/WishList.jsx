const WishList = ({ prop,prop1 }) => {
  let wishArr=[...prop]
  
  let addToCart = (item) => {

  prop1.setCartItem((prev) => {

    let existing = prev.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existing) {

      return prev.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1
            }
          : cartItem
      );

    }

    return [...prev, { ...item, quantity: 1 }];

  });

};

  return (
    <div style={{ padding: "20px",backgroundColor:"#FFFAF7",height: "100vh"}}>

      <h2 style={{textAlign:"center",color:"#A92C58",fontSize:"35px"}}>My Wishlist ❤️</h2>

      {wishArr.length === 0 ? (
        <p className="text-red-500 text-xl font-bold text-center h-[400px] flex justify-center items-center">Your wishlist is empty!</p>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {wishArr.map((item) => (
            <div
              key={item.id}
              style={{
                border: "2px solid  #F0E4EA",
                borderRadius: "10px",
                padding: "15px",
                width: "200px",
                textAlign: "center",
                backgroundColor:"white",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                width="200"
              />

              <h3>{item.name}</h3>

              <p>Price: ₹{item.price}</p>
              <button onClick={()=>addToCart(item)}style={{color:"white",backgroundColor:"deeppink",height:"35px",width:"100%",borderRadius:"25px"}}>
                Add to Cart</button>

            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default WishList;




 