import React from "react";
import { useTranslation } from "react-i18next";

export default function ErrorPage() {
  const { t } = useTranslation();
  return (
    <div className="page">
      <h1>{t("error404")}</h1>
      <h3>{t("error404desc")}</h3>
    </div>
  );
}
