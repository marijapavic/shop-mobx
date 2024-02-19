import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { observer } from "mobx-react";
import { ShopStore } from "../store/ShopStore";

const Shop = observer(() => {
  useEffect(() => {
    ShopStore.getItemsList();
  }, []);

  console.log(ShopStore.pageNumber);
  console.log(ShopStore.items.map((item) => item.item));

  const pagesVisited = ShopStore.pageNumber * ShopStore.itemsPerPage;
  const displayItems = ShopStore.items
    .slice(pagesVisited, pagesVisited + ShopStore.itemsPerPage)
    .map((item) => {
      return (
        <Link
          to={`/items/${item.id}`}
          state={{ id: item.id }}
          key={item.id}
          className="item"
        >
          <img
            src={
              item.image
                ? item.image
                : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
            }
            alt={item.item}
            className="item-image"
          />
          <div className="item-info">
            <p>{item.item}</p>
            <p>{item.price} €</p>
          </div>
        </Link>
      );
    });
  const pageCount = Math.ceil(ShopStore.totalItems / ShopStore.itemsPerPage);
  const changePage = ({ selected }) => {
    ShopStore.setPageNumber(selected);
  };
  return (
    <div className="shop-container">
      <div className="shop">
        <div className="filter">
          <button value="all" onClick={(e) => ShopStore.filterItems(e)}>
            All
          </button>
          <button value="Shirt" onClick={(e) => ShopStore.filterItems(e)}>
            Shirts
          </button>
          <button value="Dress" onClick={(e) => ShopStore.filterItems(e)}>
            Dresses
          </button>
          <button value="Jeans" onClick={(e) => ShopStore.filterItems(e)}>
            Jeans
          </button>
          <button value="Trousers" onClick={(e) => ShopStore.filterItems(e)}>
            Trousers
          </button>
          <button value="Skirt" onClick={(e) => ShopStore.filterItems(e)}>
            Skirts
          </button>
          <button value="Shoes" onClick={(e) => ShopStore.filterItems(e)}>
            Shoes
          </button>
          <button value="Bag" onClick={(e) => ShopStore.filterItems(e)}>
            Bags
          </button>
        </div>
        <div className="content">{displayItems}</div>
      </div>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination-btns"}
        previousLinkClassName={"prev-btn"}
        nextLinkClassName={"next-btn"}
        disabledClassName={"pagination-disabled"}
        activeClassName={"pagination-active"}
      />
    </div>
  );
});

export default Shop;
