import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Autoplay, Navigation, Mousewheel, Keyboard } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import Slide from './Slide';

const Events = () => {
  return (
    <div className="bg-[#414141] py-8 sm:py-16 px-6 sm:px-12 lg:px-24">
      <h1 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl pb-12 font-body text-center font-bold underline-offset-8 underline text-[#3498D9]">
        Our Events
      </h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        centeredSlides={true}
        effect={"flip"}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[EffectFlip, Autoplay, Navigation, Mousewheel, Keyboard]}
      >
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Events;
