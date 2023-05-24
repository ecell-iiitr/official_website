import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Autoplay, Navigation, Keyboard } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import Slide from './EventSlide';

const Events = () => {
  return (
    <div
      id="events"
      className="bg-[#414141] scroll-m-12 py-8 sm:py-16 px-6 sm:px-12 lg:px-24"
    >
      <h1 className="text-xl xs:text-2xl md:text-3xl lg:text-4xl pb-12 font-body text-center font-bold underline-offset-8 underline text-[#3498D9]">
        Our Events
      </h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        centeredSlides={true}
        effect={"cube"}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        keyboard={true}
        modules={[EffectCube, Autoplay, Navigation, Keyboard]}
      >
        <SwiperSlide> <Slide /> </SwiperSlide>
        <SwiperSlide> <Slide /> </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Events;
