import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export default function Meowi() {
  const { t } = useTranslation();
  const { i } = useParams();
  return (
    <div
      style={{ maxWidth: "350px", margin: "auto", marginTop: "20px" }}
      className="page"
    >
      <div className="centerpage">
        <h3>{t("tarif")}:</h3>
        <h1 className="postTitle">
          {t("meow")}-{i}
        </h1>
      </div>
      <br />
      <h3></h3>
      <div className="simplediv centerpage">
        <br />
        <div className="flexse">
          <h3>{i}00 GB</h3>
          <h3>{i}00 SMS</h3>
        </div>
        <br />
        <hr />
        <br />
        <h2 className="posttext unlim">{t("unlimp")}</h2>
        <br />
        <h3 className="posttext">
          Telegram, Instagram, FaceBook, YouTube, WhatsApp, TikTok, X
        </h3>
        <br />
      </div>
      <div className="rightpage">
        <h1 className="cash">{i}00с</h1>
        <h3>{t("inmonth")}</h3>
      </div>
      <br />
      <div className="mara centerpage">
        <p>{t("howtoconnect")}:</p>
        <h3>*10{i}#</h3>
      </div>
    </div>
  );
}
