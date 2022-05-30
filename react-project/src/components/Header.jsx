import React from "react";

function Header(props) {
  console.warn("header", props.data);
  return (
    <>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
      </div>
    </>
  );
}

export default Header;
