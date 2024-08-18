import React from "react";
import TSlider from "../components/tarifs/TSlider";
import { useTranslation } from "react-i18next";

export default function Index() {
  const { t } = useTranslation();
  return (
    <div className="page centerpage">
      <h2>{t("tarifs")}</h2>
      <TSlider />
    </div>
  );
}
