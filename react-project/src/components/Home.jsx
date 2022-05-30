import React from "react";

function Home(props) {
  console.warn("home", props);
  return (
    <>
      <div>
        <h1>Home Component</h1>
        <div className="cart-wrapper">
          <div className="img-wrapper item">
            <img src="https://picsum.photos/seed/picsum/200/300" />
          </div>
          <div className="text-wrapper item">
            <span>I-Phone</span>
            <span>Price: $1000.00</span>
          </div>
          <div className="btn-wrapper item">
            <button
              onClick={() =>
                props.addToCartHandler({ price: 1000, name: "Iphone 13" })
              }
            >
              Add To Cart
            </button>

            <button
              className="remove-cart-btn"
              onClick={() => props.removeToCartHandler()}
            >
              Remove To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
