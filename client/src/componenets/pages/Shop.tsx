import React from "react";
import Header from "../header/Header";
import HeaderNavMob from "../header/HeaderNavMob";
import FiltersShop from "../filter-Shop/FiltersShop";
import ProductsFilterShop from "../filter-Shop/ProductsFilterShop";

const Shop: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 w-full ">
      <Header />
      <div className="md:hidden">
        <HeaderNavMob />
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <h1 className="text-4xl font-bold pt-8 pb-12">Fashion</h1>
        <div className="flex flex-row w-full">
          <div className="w-[30%] ">
            <FiltersShop />
          </div>
          <div className="w-[70%] bg-green-400">
            <ProductsFilterShop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
