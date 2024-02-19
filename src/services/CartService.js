import { db } from "../config/firebase";
import {
  getDocs,
  collection,
  query,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { CartStore } from "../store/CartStore";
import { getAuth } from "firebase/auth";

class CartService {
  getCart = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const userId = user?.uid;
    const cartCollectionRef = collection(db, `users/${userId}/cart`);
    const q = query(cartCollectionRef, orderBy("item", "asc"));
    const data = await getDocs(q);
    const documents = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(documents);
    console.log(documents.length);
    CartStore.setCart(documents);
    CartStore.setTotalItems(documents.length);
    console.log(userId);
    CartStore.setCartId(userId);
  };

  deleteItem = async (id) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const userId = user?.uid;
    const itemDoc = doc(db, `users/${userId}/cart`, id);
    await deleteDoc(itemDoc);
  };

  deleteCart = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const userId = user?.uid;
    const docRef = query(collection(db, `users/${userId}/cart`));
    const toDelete = await getDocs(docRef);
    toDelete.forEach((item) => {
      const ID = item.id;
      deleteDoc(doc(db, `users/${userId}/cart`, ID));
    });
  };
}

export default CartService;
