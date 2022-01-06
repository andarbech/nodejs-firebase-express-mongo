import Header from "../../components/Header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function App() {
  return (
    <>
      <Header />
    <div className="container">
      <div className="title_wrapper">
        <div className="reactLogo">
          <img src="images/logo2.jpg" />
        </div>
        <div className="title_">
          Chanita Moda
        </div>
      </div>

      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="images/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/6.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
      <div className="and">
      </div>
    </>
  );
}
