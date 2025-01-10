import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
import { Navigation } from "swiper/modules";
import "@smastrom/react-rating/style.css";

import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import { SiComma } from "react-icons/si";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  //   const [rating, setRating] = useState(0);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="w-11/12 mx-auto my-20">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="text-center">
              <div className="flex flex-col justify-center items-center mb-4">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  //   onChange={setRating}
                  isRequired
                />

                <div className="flex items-center mt-5">
                  <SiComma className="text-4xl font-bold" />
                  <SiComma className="text-4xl font-bold" />
                </div>
              </div>
              <p className="mb-4 w-9/12 mx-auto">{review.details}</p>
              <h4 className="text-xl font-semibold text-[#CD9003]">
                {review.name}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
