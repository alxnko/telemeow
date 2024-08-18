import React from "react";
import { useTranslation } from "react-i18next";
import SimpleCard from "../../components/cards/SimpleCard";

export default function Promo() {
  const { t } = useTranslation();
  return (
    <div className="page centerpage">
      <h2>{t("promotions")}</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <SimpleCard className="mara martop10 min350">
          <div className="post-elem">
            <h1>{t("promo1title")}</h1>
            <br />
            <h2>{t("promo1")}</h2>
          </div>
        </SimpleCard>
        <SimpleCard className="mara martop10 min350">
          <div className="post-elem">
            <h1>{t("promo2title")}</h1>
            <br />
            <h2>{t("promo2")}</h2>
          </div>
        </SimpleCard>
        <SimpleCard className="mara martop10 min350">
          <div className="post-elem">
            <h1>{t("promo3title")}</h1>
            <br />
            <h2>{t("promo3")}</h2>
          </div>
        </SimpleCard>
      </div>
    </div>
  );
}
