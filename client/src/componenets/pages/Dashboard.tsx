import React, { useState } from "react";
import Buttons from "../../Features/buttons";
import axios from "axios";

const Dashboard: React.FC = () => {
  const dataDashboard = [
    { name: "size", values: ["-", "S", "M", "L", "XL"] },
    { name: "color", values: ["-", "red", "blue", "green", "yellow"] },
    {
      name: "price",
      values: ["-", "0-50", "50-150", "100-150", "150-200", "300-400"],
    },
    {
      name: "brand",
      values: [
        "-",
        "minimog",
        "relrolie",
        "brook",
        "learta",
        "vegabord",
        "abby",
      ],
    },
    {
      name: "collection",
      values: [
        "-",
        "All products",
        "Best Sellers",
        "New arrivals",
        "Accessories",
      ],
    },
  ];

  const [imgUrl, setImgUrl] = useState<string>("");
  const [selectedValues, setSelectedValues] = useState<any>({});

  const postFashion = () => {
    axios
      .post("https://fasco-shop-react-api.vercel.app/create-fashion", {
        imgUrl,
        ...selectedValues,
      })
      .then((response) => {
        console.log(response);
        alert("Save is successful");
        console.log(response.data.size);
      })
      .catch((err) => {
        console.log(err);
        alert(`Save isn't successful`);
      });
  };

  const handleChange = (name: string, value: string) => {
    setSelectedValues({ ...selectedValues, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    postFashion();
  };

  return (
    <div className="flex flex-col gap-12">
      <div>
        <h1>Image URL</h1>
        <input
          type="text"
          placeholder="Image URL"
          className="border-2 border-black px-2 py-2 rounded-lg"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
      </div>
      <form onSubmit={handleSubmit}>
        {dataDashboard.map((data, i) => (
          <div
            className="flex flex-col"
            key={i}
          >
            <h1 className="text-2xl">{data.name}</h1>
            <select
              value={selectedValues[data.name] || ""}
              onChange={(e) => handleChange(data.name, e.target.value)}
            >
              {data.values.map((value, j) => (
                <option
                  value={value}
                  key={j}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>
        ))}
        <Buttons
          isSwitch={true}
          label="Save"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Dashboard;
