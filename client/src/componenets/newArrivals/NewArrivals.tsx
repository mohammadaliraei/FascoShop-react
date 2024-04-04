import React, { useEffect, useState } from "react";
import Buttons from "../../Features/buttons";
import axios from "axios";
import { IoIosStar } from "react-icons/io";

const NewArrivals: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [products, setProducts] = useState([]);

  const buttonList = [
    { id: 0, label: "Man's Fashion", apiName: "ManFashion" },
    { id: 1, label: "Women's Fashion", apiName: "WomenFashion" },
    { id: 2, label: "Women Accessories", apiName: "WomenAccessories" },
    { id: 3, label: "Man Accessories", apiName: "ManAccessories" },
    { id: 4, label: "All Products", apiName: "" },
  ];

  const renderItems = (index: any) => {
    setSelectedIndex(index);
    getProducts(buttonList[index].apiName);
  };

  useEffect(() => {
    getProducts(buttonList[selectedIndex].apiName);
  }, []);

  async function getProducts(apiName: any) {
    try {
      const res = await axios.get(`http://localhost:3000/${apiName}`);
      if (res.status === 200) {
        setProducts(res.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  return (
    <div className="flex flex-col justify-center my-12 items-center w-full gap-8">
      <div className="flex flex-col gap-6 justify-center items-center">
        <h1 className="text-2xl font-bold">New Arrivals</h1>
        <h1 className="text-1xl text-center leading-7 text-gray-700 md:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          praesentium ea voluptatum numquam quod atque deleniti distinctio eum
          facere corrupti. Modi quas magnam facere accusamus consectetur,
          temporibus mollitia corporis ab!
        </h1>
      </div>
      <div className="md:flex md:flex-row md:px-28 justify-between grid grid-cols-2 w-full pt-6">
        {buttonList.map((item, index) => (
          <Buttons
            key={item.id}
            label={item.label}
            isSwitch={selectedIndex === index}
            onClick={() => renderItems(index)}
          />
        ))}
      </div>
      <div className="flex p-12 justify-center items-center w-full  bg-gray-200">
        <div className=" grid md:grid-cols-3 gap-12">
          {products.map((product: any, index: any) => (
            <div
              key={index}
              className=" flex flex-col gap-2 bg-white p-4 rounded-md"
            >
              <img
                src={product.imgUrl}
                className="w-64 h-64 rounded-md object-cover"
                alt="Product"
              />
              <div className="flex flex-row justify-between">
                <h1>{product.name}</h1>
                <div className="flex flex-row">
                  {Array.from({ length: product.review }).map((_, i) => (
                    <div key={i}>
                      <IoIosStar className="text-yellow-900" />
                    </div>
                  ))}
                </div>
              </div>
              <h1>({product.review}K) Customer Review</h1>
              <div className="flex flex-row justify-between">
                <h1 className="font-bold">{product.price} $</h1>
                <h1 className="text-red-500 text-sm">Almost Sold out</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Buttons
        label="View More"
        isSwitch={true}
      />
    </div>
  );
};

export default NewArrivals;
