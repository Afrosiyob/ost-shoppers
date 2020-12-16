import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./ProductDetailRightForm.scss";

function ProductDetailRightForm() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("color1");

  const productCount = (e) => {
    if (e === 0) {
      if (count === 0) return;
      setCount(count - 1);
    } else if (e === 1) {
      setCount(count + 1);
    }
  };

  const mySetColor = (col) => {
    setColor(col);
  };
  return (
    <div className="product-detail-right-form">
      <div className="my-product-sec-five">
        <div className="my-box-content">
          <p>
            {t(`ProductDetailRightForm.Titul`)}: <span>$33.37</span>
          </p>
          <p>
          {t(`ProductDetailRightForm.Titul1`)}:{" "}
            <span>
              14% - <strike>$35.24</strike>
            </span>
          </p>
          <p>
          {t(`ProductDetailRightForm.Titul2`)}: <span>Beshop co.</span>
          </p>
          <p>
            {t(`ProductDetailRightForm.Titul3`)}: <span>147</span>
          </p>
          <p>
            {t(`ProductDetailRightForm.Titul4`)}: <span>475</span>
          </p>
          <p>{t(`ProductDetailRightForm.Titul5`)}:</p>
          <div className="product-colors">
            <div
              onClick={() => mySetColor("color1")}
              className={color === "color1" ? "box-shadow" : ""}
            ></div>
            <div
              onClick={() => mySetColor("color2")}
              className={color === "color2" ? "box-shadow" : ""}
            ></div>
            <div
              onClick={() => mySetColor("color3")}
              className={color === "color3" ? "box-shadow" : ""}
            ></div>
            <div
              onClick={() => mySetColor("color4")}
              className={color === "color4" ? "box-shadow" : ""}
            ></div>
            <div
              onClick={() => mySetColor("color5")}
              className={color === "color5" ? "box-shadow" : ""}
            ></div>
          </div>
          <p>{t(`ProductDetailRightForm.Titul6`)}:</p>
          <div className="my-product-count">
            <div onClick={() => productCount(0)} className={color}>
              <i class="fa fa-minus"></i>
            </div>
            <div>{count}</div>
            <div onClick={() => productCount(1)} className={color}>
              <i class="fa fa-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailRightForm;
