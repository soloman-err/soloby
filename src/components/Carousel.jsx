import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

const Carousel = () => {
  const swipeCars = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <div className="bg-slate-50">
      <Swiper
        {...swipeCars}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img
            className="h-[400px] w-full object-cover"
            src="https://i.ibb.co/B4H3wN4/350082c0eb9446f48fedd5ef38798d43xl.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[400px] w-full object-cover"
            src="https://i.ibb.co/1v4YKXB/gt268-2020-ford-shelby-gt500-03.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[400px] w-full object-cover"
            src="https://i.ibb.co/qpjbccv/1967-Ford-Mustang-Shelby-GT500-1-18-Solido-diecast-scale-model-miniature-automobile-1-grande.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[400px] w-full object-cover"
            src="https://i.ibb.co/BPShxZf/Ford-Mustang-GT-1967-GT500-Return-Alloy-Car-Toy-Model-Children-s-Toy-Car-Model-Display-94628.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
