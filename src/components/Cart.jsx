import React from "react";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GoTrash } from "react-icons/go";
import { CartStore } from "../store/CartStore";

const Cart = observer(() => {
  useEffect(() => {
    CartStore.getCart();
  }, []);

  const totalItemPrice = CartStore.cart.reduce(
    (total, currentValue) => (total = total + currentValue.item.price),
    0
  );

  console.log(CartStore.cart.map((item) => item.item.price));
  console.log(CartStore.cartId);

  return (
    <div className="cart">
      <div className="cart-container">
        {CartStore.cart.length !== 0 ? (
          CartStore.cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <div className="div-img">
                  <img
                    src={
                      item.item.image
                        ? item.item.image
                        : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                    }
                    alt={item.item.item}
                    className="cart-img"
                  />
                </div>
                <div className="cart-details">
                  <p>{item.item.item}</p>
                  <p>{item.size}</p>
                  <p>{item.item.price} €</p>
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className="trash-btn"
                  >
                    <GoTrash onClick={() => CartStore.deleteItem(item.id)} />
                  </motion.button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty-cart">Cart is empty</div>
        )}
      </div>
      <div className="buy-container">
        <p>Total: {totalItemPrice.toFixed(2)} €</p>
        <Link to="/checkout">
          <motion.button
            whileTap={{ scale: 1.2 }}
            className="buy-btn"
            disabled={CartStore.totalItems === 0}
            onClick={() => CartStore.deleteCart(CartStore.cartId)}
          >
            BUY
          </motion.button>
        </Link>
      </div>
    </div>
  );
});

export default Cart;
