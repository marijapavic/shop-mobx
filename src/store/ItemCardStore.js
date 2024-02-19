import { action, makeObservable, observable } from "mobx";
import ItemCardService from "../services/ItemCardService";

class Store {
  constructor() {
    makeObservable(this, {
      item: observable,
      setItem: action,
      location: observable,
      setLocation: action,
      ItemCardService: observable,
      locationMethod: action,
      selectedSize: observable,
      setSelectedSize: action,
      handleSizeChange: action,
      addToCart: action,
      active: observable,
      setActive: action,
    });
  }

  item = [];
  location = null;
  selectedSize = "";
  active = false;

  setLocation = (location) => {
    this.location = location;
  };

  locationMethod = (id) => {
    this.location = id;
  };

  ItemCardService = new ItemCardService();

  getItem = () => {
    this.ItemCardService.getItem();
  };

  setActive = (active) => {
    this.active = active;
  };

  setItem = (item) => {
    this.item = item;
  };

  setSelectedSize = (selectedSize, itemId) => {
    this.selectedSize = selectedSize;
    const product = Array.from(this.item).find((item) => item.id === itemId);
    if (product) {
      product.size = selectedSize;
    }
  };

  handleSizeChange = (e) => {
    this.setSelectedSize(e.target.value);
    this.setActive(!this.active);
  };

  addToCart = () => {
    const itemWithSize = { ...this.item, size: this.selectedSize };
    this.ItemCardService.addToCart(itemWithSize);
    console.log(this.selectedSize);
    this.setSelectedSize("");
  };
}

export const ItemCardStore = new Store();
