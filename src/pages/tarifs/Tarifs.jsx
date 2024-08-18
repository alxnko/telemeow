import React from "react";
import { useTranslation } from "react-i18next";
import TSlider from "../../components/tarifs/TSlider";

export default function Tarifs() {
  const { t } = useTranslation();
  return (
    <div className="page centerpage">
      <h2>
        {t("tarifs")} {t("meow")}:
      </h2>
      <TSlider />
      <br />
      <h2>{t("otherTarifs")}:</h2>
      <div style={{ margin: "auto", width: "100px", height: "50px" }}>
        <p style={{ paddingTop: "30%" }}>{t("empty")}</p>
      </div>
    </div>
  );
}
