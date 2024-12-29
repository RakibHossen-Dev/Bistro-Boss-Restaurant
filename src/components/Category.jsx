import category1 from "../assets/home/slide1.jpg";
import category2 from "../assets/home/slide2.jpg";
import category3 from "../assets/home/slide3.jpg";
import category4 from "../assets/home/slide4.jpg";
import category5 from "../assets/home/slide5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
// import SectionTitle from "../components/sectionTitle";
import SectionTitle from "../components/SectionTitle";
const Category = () => {
  return (
    <div className="my-20 lg:w-9/12 mx-auto">
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={category1} alt="" />
          <h3 className="uppercase font-cinzel text-3xl -mt-12  text-center  text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category2} alt="" />
          <h3 className="uppercase font-cinzel text-3xl -mt-12 text-center  text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category3} alt="" />
          <h3 className="uppercase font-cinzel text-3xl -mt-12 text-center  text-white">
            pizzas
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={category4} alt="" />
          <h3 className="uppercase font-cinzel text-3xl -mt-12 text-center  text-white">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category5} alt="" />
          <h3 className="uppercase font-cinzel text-3xl -mt-12 text-center  text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
