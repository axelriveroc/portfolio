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

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFirebase,
  SiMercadopago,
  SiMysql,
  SiMui,
  SiExpress,
  SiSequelize,
  SiRedux,
  SiDotenv,
  SiAxios,
  SiReactrouter,
  SiGit,
  SiVercel,
  SiGithub,
  SiNgrok,
  SiNodedotjs,
  SiPostman,
} from "react-icons/si";

import { FaNpm } from "react-icons/fa";

const SkillsSwiper = () => {
  return (
    <div className="container_swiper" id="Skills">
      <h2> Hard Skills </h2>
      <h4>FrontEnd</h4>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Zoom /* EffectFade */,
        ]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        /* navigation */
        pagination={{ clickable: false }}
        scrollbar={{ draggable: false }}
        zoom
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{ width: "95%" }}
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
          {" "}
          <article className="card">
            <SiReact className="icon_tech" />
            <p>REACT</p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <article className="card">
            <SiMui className="icon_tech" />
            <p>MATERIALUI</p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <article className="card">
            <SiRedux className="icon_tech" />
            <p>REDUX TOOLKIT</p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="card">
            <SiAxios className="icon_tech" />
            <p>AXIOS</p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="card">
            <SiReactrouter className="icon_tech" />
            <p>REACT-ROUTER</p>
          </article>{" "}
        </SwiperSlide>
      </Swiper>
      <h4>Backend - Otras </h4>
      <Swiper
        // install Swiper modules
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Zoom /* EffectFade */,
        ]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        /* navigation */
        pagination={{ clickable: false }}
        scrollbar={{ draggable: false }}
        zoom
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{ width: "95%" }}
        /* effect="fade" */
      >
        <SwiperSlide>
          {" "}
          <article className="card">
            <SiFirebase className="icon_tech" />
            <p>FIREBASE</p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <article className="card">
            <SiMercadopago className="icon_tech" />
            <p>MERCADOPAGO API</p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <article className="card">
            <SiNodedotjs className="icon_tech" />
            <p>NODEJS</p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <article className="card">
            <SiMysql className="icon_tech" />
            <p>MYSQL</p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="card">
            <SiExpress className="icon_tech" />
            <p>EXPRESS</p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="card">
            <SiSequelize className="icon_tech" />
            <p>SEQUELIZE</p>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="card">
            <FaNpm className="icon_tech" />
            <p>NPM</p>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <article className="card">
            <SiDotenv className="icon_tech" />
            <p>DOTENV</p>
          </article>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <article className="card">
            <SiGit className="icon_tech" />
            <p>GIT</p>
          </article>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <article className="card">
            <SiVercel className="icon_tech" />
            <p>VERCEL</p>
          </article>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <article className="card">
            <SiGithub className="icon_tech" />
            <p>GITHUB</p>
          </article>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <article className="card">
            <SiNgrok className="icon_tech" />
            <p>NGROK</p>
          </article>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <article className="card">
            <SiPostman className="icon_tech" />
            <p>POSTMAN</p>
          </article>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SkillsSwiper;
