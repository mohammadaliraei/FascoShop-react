import React from "react";

const FiltersShop: React.FC = () => {
  const sizeBtn = ["S", "M", "L", "XL"];
  const colorBtn = [
    { id: 1, name: "pink-500" },
    { id: 2, name: "red-400" },
    { id: 3, name: "pink-600" },
    { id: 4, name: "green-400" },
    { id: 5, name: "blue-500" },
    { id: 6, name: "cyan-600" },
    { id: 7, name: "purple-500" },
    { id: 8, name: "red-500" },
  ];
  const priceBtn = [
    { id: 1, price: "$0 - $50" },
    { id: 2, price: "$50 - $100" },
    { id: 3, price: "$100 - $150" },
    { id: 4, price: "$150 - $200" },
    { id: 5, price: "$300 - $400" },
  ];
  const brandBtn = [
    { id: 1, name: "Minimog" },
    { id: 2, name: "Retorlie Brook" },
    { id: 3, name: "Learts" },
    { id: 4, name: "Vagabond" },
    { id: 5, name: "Abby" },
  ];
  const collectionBtn = [
    { id: 1, name: "All Products" },
    { id: 2, name: "Best Sellers" },
    { id: 3, name: "New Arrivals" },
    { id: 4, name: "Accessories" },
  ];
  const tagBtn = [
    { id: 1, name: "Fashion" },
    { id: 2, name: "Hats" },
    { id: 3, name: "Sandal" },
    { id: 4, name: "Belt" },
    { id: 5, name: "Bags" },
    { id: 6, name: "Snacker" },
    { id: 7, name: "Denim" },
    { id: 8, name: "Minimog" },
    { id: 9, name: "Vagabond" },
  ];

  return (
    <div className="flex flex-col gap-6 pr-2">
      <h1>Filters</h1>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold">Size</h1>
        <div className="grid grid-cols-3 gap-4 ">
          {sizeBtn.map((Size, i) => (
            <div key={i}>
              <button className="w-10 h-10 rounded-md border-[1px]">
                {Size}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold">Colors</h1>
        <div className="grid grid-cols-4 gap-2">
          {colorBtn.map((Color) => (
            <div
              key={Color.id}
              className={`bg-${Color.name} w-6 h-6 rounded-full`}
            >
              <button>
                <div></div>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold">Prices</h1>
        <div className="flex flex-col gap-2 items-start">
          {priceBtn.map((price) => (
            <button
              key={price.id}
              className="text-gray-500 font-bold"
            >
              {price.price}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold">Brands</h1>
        <div className="flex flex-col items-start gap-2">
          {brandBtn.map((brand) => (
            <button key={brand.id}>{brand.name}</button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold">Collection</h1>
        <div className="flex flex-col items-start gap-2">
          {collectionBtn.map((collection) => (
            <button key={collection.id}>{collection.name}</button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold">Tags</h1>
        <div className="flex flex-col items-start gap-2">
          {tagBtn.map((tag) => (
            <button key={tag.id}>{tag.name}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltersShop;
