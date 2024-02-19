import { db } from "../config/firebase";
import { doc, getDoc, addDoc, collection } from "firebase/firestore";
import { ItemCardStore } from "../store/ItemCardStore";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";

class ItemCardService {
  getItem = async () => {
    try {
      const docRef = doc(db, "shop", ItemCardStore.location);
      const docSnap = await getDoc(docRef);
      ItemCardStore.setItem(docSnap.data());
      console.log(docSnap.data());
    } catch (err) {
      console.error(err);
    }
  };

  addToCart = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      const userId = user?.uid;
      await addDoc(collection(db, `users/${userId}/cart`), {
        item: ItemCardStore.item,
        size: ItemCardStore.selectedSize,
      });

      toast.success("Item added to cart");
    } catch (err) {
      console.log(err);
    }
  };
}

export default ItemCardService;
