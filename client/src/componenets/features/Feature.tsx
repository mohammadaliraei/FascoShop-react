import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { SiNginxproxymanager } from "react-icons/si";

interface FeturesProp {
  id: Number;
  Icon: React.ElementType;
  title: String;
  description: String;
}

const Feature: React.FC = () => {
  const features: FeturesProp[] = [
    {
      id: 0,
      Icon: FaHandHoldingHeart,
      title: "High Quality",
      description: "crafted from top materials",
    },
    {
      id: 1,
      Icon: SiNginxproxymanager,
      title: "Warrany Protection",
      description: "over 2 years",
    },
    {
      id: 2,
      Icon: LiaShippingFastSolid,
      title: "Free Shipping",
      description: "order over 150$",
    },
    {
      id: 3,
      Icon: MdOutlineSupportAgent,
      title: "24 / 7 support",
      description: "dedicated support",
    },
  ];

  return (
    <div className="flex md:flex-row md:justify-between md:px-0 px-20 flex-col gap-10  items-start bg-gray-100 py-8 rounded-md">
      {features.map((feature) => {
        const { id, Icon, title, description } = feature;
        return (
          <div
            key={id.toString()}
            className="flex flex-row gap-4"
          >
            <Icon size={50} />
            <div className="flex flex-col">
              <h1 className="font-bold">{title}</h1>
              <h1>{description}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feature;
