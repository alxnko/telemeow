import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../style/components/promo/slider.css";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Slider() {
  const { t } = useTranslation();
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: "progressbar",
          progressbarFillClass: "green",
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to="/promo">
            <div className="sliderElem">
              <h2>{t("promotions")}</h2>
              <img src="/imgs/2.webp" />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderElem">
            <h2>{t("esimdesc")}</h2>
            <img src="/imgs/3.webp" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ justifyContent: "center" }} className="sliderElem">
            <img src="/imgs/logo0.webp" />
            <h2>{t("bestoper")}</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ justifyContent: "center" }} className="sliderElem">
            <div>
              <a href="https://alxnko.000.pe">
                <h1>alxnko</h1>
                <h2>Alex Neko</h2>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ justifyContent: "center" }} className="sliderElem">
            <h2>{t("catdesc")}</h2>
            <img style={{ width: "100px" }} src="/imgs/fav.webp" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
