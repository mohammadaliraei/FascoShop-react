import { useEffect, useState } from "react";
import axios from "axios";

const NewArrivalsProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const res = await axios.get("http://localhost:3000/products");
      if (res.status === 200) {
        setProducts(res.data);
      } else {
        alert("Error fetching products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("Error fetching products");
    }
  }

  return (
    <div>
      {products.map((product: any, index: any) => (
        <div key={index}>
          <img
            src={product.imgUrl}
            alt={`Product ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default NewArrivalsProducts;
