import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductsFilterShop: React.FC = () => {
  const [fashion, setFashion] = useState<any>({});

  useEffect(() => {
    getFashion();
  }, []);

  async function getFashion() {
    try {
      const res = await axios.get(
        "https://fasco-shop-react-api.vercel.app/fashion"
      );
      if (res.status == 200) {
        setFashion(res.data);
      }
    } catch (error) {
      console.log(`console error ${error}`);
    }
  }

  return (
    <div>
      <img src={fashion.imgUrl} />
    </div>
  );
};

export default ProductsFilterShop;
