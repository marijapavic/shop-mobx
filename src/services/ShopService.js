import { db } from "../config/firebase";
import { getDocs, collection, query, orderBy, where } from "firebase/firestore";
import { ShopStore } from "../store/ShopStore";

const shopCollectionRef = collection(db, "shop");

class ShopService {
  getItemsList = async () => {
    try {
      const q = query(shopCollectionRef, orderBy("item", "asc"));
      const data = await getDocs(q);
      const documents = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(documents);
      ShopStore.setItems(documents);
      ShopStore.setTotalItems(documents.length);
    } catch (err) {
      console.log(err);
    }
  };

  filterItems = async (e) => {
    try {
      if (e.target.value === "all") {
        ShopStore.getItemsList();
      } else if (e.target.value === "Shirt") {
        const q = query(shopCollectionRef, where("item", "==", "Shirt"));
        const data = await getDocs(q);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        ShopStore.setItems(filteredData);
        ShopStore.setTotalItems(filteredData.length);
      } else if (e.target.value === "Dress") {
        const q = query(shopCollectionRef, where("item", "==", "Dress"));
        const data = await getDocs(q);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        ShopStore.setItems(filteredData);
        ShopStore.setTotalItems(filteredData.length);
      } else if (e.target.value === "Jeans") {
        const q = query(shopCollectionRef, where("item", "==", "Jeans"));
        const data = await getDocs(q);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        ShopStore.setItems(filteredData);
        ShopStore.setTotalItems(filteredData.length);
      } else if (e.target.value === "Trousers") {
        const q = query(shopCollectionRef, where("item", "==", "Trousers"));
        const data = await getDocs(q);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        ShopStore.setItems(filteredData);
        ShopStore.setTotalItems(filteredData.length);
      } else if (e.target.value === "Skirt") {
        const q = query(shopCollectionRef, where("item", "==", "Skirt"));
        const data = await getDocs(q);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        ShopStore.setItems(filteredData);
        ShopStore.setTotalItems(filteredData.length);
      } else if (e.target.value === "Shoes") {
        const q = query(shopCollectionRef, where("item", "==", "Shoes"));
        const data = await getDocs(q);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        ShopStore.setItems(filteredData);
        ShopStore.setTotalItems(filteredData.length);
      } else if (e.target.value === "Bag") {
        const q = query(shopCollectionRef, where("item", "==", "Bag"));
        const data = await getDocs(q);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        ShopStore.setItems(filteredData);
        ShopStore.setTotalItems(filteredData.length);
      }
    } catch (err) {
      console.log(err);
    }
  };
}

export default ShopService;
