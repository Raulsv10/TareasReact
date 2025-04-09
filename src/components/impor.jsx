import { useEffect } from "react";
import { db } from "../dbContext";
import { collection, doc, setDoc } from "firebase/firestore"; // ✅ correct SDK

const ImportProducts = () => {
  useEffect(() => {
    const importProducts = async () => {
      try {
        const res = await fetch("/products.json");
        const products = await res.json();

        console.log("db:", db);

        const productsCollection = collection(db, "products");

        for (const product of products) {
          const productRef = doc(productsCollection, product.id.toString());
          await setDoc(productRef, product);
          console.log(`✅ Imported product ID: ${product.id}`);
        }

        console.log("🎉 All products imported!");
      } catch (err) {
        console.error("❌ Failed to import products:", err);
      }
    };

    importProducts();
  }, []);

  return <div>📦 Importing products...</div>;
};

export default ImportProducts;
