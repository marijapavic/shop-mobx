import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ItemCardStore } from "../store/ItemCardStore";
import { observer } from "mobx-react";
import { NavbarStore } from "../store/NavbarStore";
import { ShopStore } from "../store/ShopStore";
import { motion } from "framer-motion";

const ItemCard = observer(() => {
  const location = useLocation();
  const { id } = location.state;
  console.log(id);

  const clothing_size = ["S", "M", "L"];
  const shoe_size = [38, 39, 40, 41, 42];

  console.log(ItemCardStore.item.item);

  const itemCard = ItemCardStore.item.item;
  const allItems = ShopStore.items.find((item) => item.item === itemCard);
  console.log(allItems);

  const foundItems = ShopStore.items.filter((item) => item.item === itemCard);
  const sameItems = foundItems.map((item) => item.item);
  console.log(sameItems);

  ItemCardStore.locationMethod(id);

  useEffect(() => {
    ItemCardStore.getItem();
  }, []);

  return (
    <div>
      <div className="item-container">
        <img
          className="img"
          src={
            ItemCardStore.item.image
              ? ItemCardStore.item.image
              : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
          }
          alt={ItemCardStore.item.item}
        />
        <div className="item-details">
          <p>{ItemCardStore.item.item}</p>
          <p className="item-price">{ItemCardStore.item.price} €</p>
          {ItemCardStore.item.item === "Bag" ? (
            ""
          ) : (
            <div>
              <p>Size:</p>
              {ItemCardStore.item.item === "Shoes"
                ? shoe_size.map((size) => (
                    <button
                      key={size}
                      className="size"
                      value={size}
                      onClick={ItemCardStore.handleSizeChange}
                    >
                      {size}
                    </button>
                  ))
                : clothing_size.map((size) => (
                    <motion.button
                      whileTap={{ scale: 1.2 }}
                      key={size}
                      className="size"
                      value={size}
                      onClick={ItemCardStore.handleSizeChange}
                    >
                      {size}
                    </motion.button>
                  ))}
            </div>
          )}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            deleniti enim non, doloribus error quia nobis quo. Magni, atque
            eius.
          </p>
          {NavbarStore.isLoggedIn && (
            <motion.button
              whileTap={{ scale: 1.2 }}
              className="add-btn"
              disabled={
                ItemCardStore.item.item === "Bag"
                  ? null
                  : ItemCardStore.selectedSize === ""
              }
              onClick={() => ItemCardStore.addToCart()}
            >
              ADD TO CART
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
});

export default ItemCard;
