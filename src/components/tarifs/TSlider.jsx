import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "../../style/components/tarifs/slider.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SimpleCard from "../cards/SimpleCard";

export default function TSlider() {
  const data = [1, 2, 3, 4, 5, 6];
  const { t } = useTranslation();
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="tarifsSwiper"
      >
        {data.map((i) => (
          <SwiperSlide key={i}>
            <Link to={"/meow/" + i}>
              <SimpleCard>
                <div className="post-elem">
                  <h1 className="postTitle">
                    {t("meow")}-{i}
                  </h1>
                  <hr className="postHr" />
                  <p className="posttext">
                    {i}00 GB <br /> {i}00 SMS <br />
                  </p>
                  <p className="posttext unlim">{t("unlimp")}</p>
                  <p className="posttext">
                    Telegram, Instagram, FaceBook, YouTube, WhatsApp, TikTok, X
                  </p>
                </div>
                <div className="postPrice">
                  <p className="cash">{i}00с</p>
                  <p>{t("inmonth")}</p>
                </div>
              </SimpleCard>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
