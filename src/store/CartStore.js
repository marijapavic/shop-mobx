import { action, makeObservable, observable } from "mobx";
import CartService from "../services/CartService";

class Store {
  constructor() {
    makeObservable(this, {
      cart: observable,
      setCart: action,
      quantity: observable,
      setQuantity: action,
      increaseQty: action,
      decreaseQty: action,
      totalItems: observable,
      setTotalItems: action,
      totalPrice: observable,
      setTotalPrice: action,
      deleteItem: action,
      deleteCart: action,
      cartId: observable,
      setCartId: action,
    });
  }

  cart = [];
  quantity = 1;
  totalItems = null;
  totalPrice = null;
  cartId = null;

  CartService = new CartService();

  setCart = (cart) => {
    this.cart = cart;
  };

  setCartId = (cartId) => {
    this.cartId = cartId;
  };

  setQuantity = (quantity) => {
    this.quantity = quantity;
  };

  increaseQty = () => {
    this.quantity++;
  };

  decreaseQty = () => {
    if (this.quantity >= 1) this.quantity--;
  };

  getCart = () => {
    this.CartService.getCart();
  };

  setTotalItems = (totalItems) => {
    this.totalItems = totalItems;
  };

  setTotalPrice = (totalPrice) => {
    this.totalPrice = totalPrice;
  };

  deleteItem = (id) => {
    this.CartService.deleteItem(id);
  };

  deleteCart = () => {
    this.CartService.deleteCart(this.cartId);
    console.log(this.cartId);
  };
}

export const CartStore = new Store();
