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
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img
            className="md:h-[400px] lg:h-[600px] w-full object-cover"
            src="https://www.ty-bolid.com/30141-pdt_540/dc-comics-batmobile-the-dark-knight.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-[400px] lg:h-[600px] w-full object-cover"
            src="https://www.ty-bolid.com/30142-pdt_540/dc-comics-batmobile-the-dark-knight.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-[400px] lg:h-[600px] w-full object-cover"
            src="https://www.ty-bolid.com/30143-pdt_540/dc-comics-batmobile-the-dark-knight.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-[400px] lg:h-[600px] w-full object-cover"
            src="https://www.ty-bolid.com/30144-pdt_540/dc-comics-batmobile-the-dark-knight.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-[400px] lg:h-[600px] w-full object-cover"
            src="https://www.ty-bolid.com/30145-pdt_540/dc-comics-batmobile-the-dark-knight.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-[400px] lg:h-[600px] w-full object-cover"
            src="https://www.ty-bolid.com/30146-pdt_540/dc-comics-batmobile-the-dark-knight.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-[400px] lg:h-[600px] w-full object-cover"
            src="https://www.ty-bolid.com/30147-pdt_540/dc-comics-batmobile-the-dark-knight.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-[400px] lg:h-[600px] w-full object-cover"
            src="https://www.ty-bolid.com/30148-pdt_540/dc-comics-batmobile-the-dark-knight.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
