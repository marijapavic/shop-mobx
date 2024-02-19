import { makeObservable, observable, action } from "mobx";
import ShopService from "../services/ShopService";

class Store {
  constructor() {
    makeObservable(this, {
      items: observable,
      setItems: action,
      totalItems: observable,
      setTotalItems: action,
      pageCount: observable,
      setPageCount: action,
      pageNumber: observable,
      setPageNumber: action,
      itemsPerPage: observable,
      ShopService: observable,
      filterItems: action,
      getItemsList: action,
    });
  }

  items = [];
  totalItems = null;
  pageCount = 0;
  itemsPerPage = 8;
  pageNumber = 0;

  ShopService = new ShopService();

  setItems = (items) => {
    this.items = items;
  };

  setTotalItems = (totalItems) => {
    this.totalItems = totalItems;
  };

  setPageNumber = (pageNumber) => {
    this.pageNumber = pageNumber;
  };

  setPageCount = (pageCount) => {
    this.pageCount = pageCount;
  };

  getItemsList = () => {
    this.ShopService.getItemsList();
  };

  filterItems = (e) => {
    this.ShopService.filterItems(e);
  };
}

export const ShopStore = new Store();
