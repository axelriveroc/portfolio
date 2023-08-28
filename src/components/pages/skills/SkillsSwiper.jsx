// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Zoom } from /*   EffectFade,
 */ "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/zoom";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./skillsSwiper.css";

import { SiHtml5, SiCss3, SiJavascript, SiReact } from "react-icons/si";

const SkillsSwiper = () => {
  return (
    <div>
      <div className="container_swiper">
        <Swiper
          // install Swiper modules
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Zoom /* EffectFade */,
          ]}
          spaceBetween={50}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 5000,
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          zoom
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          /* effect="fade" */
        >
          <SwiperSlide zoom>
            {" "}
            <article className="card">
              <SiHtml5 className="icon_tech" />
              <p>HTML</p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <article className="card">
              <SiCss3 className="icon_tech" />
              <p>CSS</p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <article className="card">
              <SiJavascript className="icon_tech" />
              <p>JAVASCRIPT</p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="card">
              <SiReact className="icon_tech" />
              <p>REACT</p>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SkillsSwiper;
