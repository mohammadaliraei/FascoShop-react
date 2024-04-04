import { images } from "../../Features/images";
import { Carousel } from "flowbite-react";

const SwiperProducts = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  const dataImages = [
    images.GrilOne,
    images.GrilTwo,
    images.GrilThree,
    images.GrilFour,
  ];

  // const prevIndex = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? dataImages.length - 1 : prevIndex - 1
  //   );
  //   console.log(currentIndex);
  // };
  // const nextIndex = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === dataImages.length - 1 ? 0 : prevIndex + 1
  //   );
  //   console.log(currentIndex);
  // };

  return (
    <div className="flex flex-row h-full w-full gap-4 ">
      <Carousel>
        {dataImages.map((images, i) => (
          <img
            key={i}
            src={images}
            className="flex bottom-0 object-bottom"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default SwiperProducts;
