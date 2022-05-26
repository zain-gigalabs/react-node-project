import React from "react";

function Home() {
  return (
    <>
      <div className="add-to-cart">
        <span className="cart-count"></span>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
      </div>
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
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
