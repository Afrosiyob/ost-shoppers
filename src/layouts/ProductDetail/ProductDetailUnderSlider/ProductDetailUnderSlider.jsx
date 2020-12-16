import React from "react";
import "./ProductDetailUnderSlider.scss";
import Watch from "../../../assets/watch.png";
import { useTranslation } from "react-i18next";
function ProductDetailUnderSlider() {
  const { t } = useTranslation();
  return (
    <div className="product-detail-under-slider">
      <img src={Watch} alt="clock wefwee" />

      <div>
        <h3>{t(`ProductDetailUnderSlider.Titul`)}</h3>

        <button className="text-uppercase">
          {t(`ProductDetailUnderSlider.Titul1`)}
        </button>
      </div>
    </div>
  );
}

export default ProductDetailUnderSlider;
