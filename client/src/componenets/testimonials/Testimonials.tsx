import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "@material-tailwind/react";
import { IoIosStar } from "react-icons/io";

const Testimonials: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    console.log(users.length);
  }, [users]);

  async function getUsers() {
    try {
      const res = await axios.get("http://localhost:3000/users");
      if (res.status === 200) {
        setUsers(res.data);
      }
    } catch (error) {
      console.log(`console error ${error}`);
    }
  }
  return (
    <div className="my-10 py-10 bg-gray-100">
      <div className="flex text-center flex-col gap-4 ">
        <h1 className="text-3xl font-bold">This Is What Our Customers Say</h1>
        <h1 className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro,
          velit!
        </h1>
        <div className="md:flex md:flex-row  overflow-hidden">
          <Carousel
            placeholder={"hello"}
            className="rounded-xl "
            navigation={({ setActiveIndex, activeIndex, length }: any) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {users.map((user: any, index: any) => (
              <div
                key={index}
                className="flex justify-center items-center w-full my-10 "
              >
                <div className="flex md:flex-row flex-col  w-[70%] bg-gray-200 shadow-md rounded-xl  overflow-hidden">
                  <div className="md:w-[30%] h-full bg-red-400">
                    <img
                      key={index} // Added key prop
                      src={user.imgUrl}
                      className={`flex object-cover w-full h-52`}
                      alt={`Testimonial ${index}`}
                    />
                  </div>
                  <div className="flex flex-col w-full gap-4 text-start  py-8 px-5">
                    <h1 className="text-base">{user.description}</h1>
                    <div className="flex flex-row">
                      {Array.from({ length: user.stars }).map((_, i) => (
                        <div key={i}>
                          <IoIosStar className="text-yellow-800" />
                        </div>
                      ))}
                    </div>
                    <h1 className="text-lg">{user.name}</h1>
                    <h1>{user.job}</h1>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
