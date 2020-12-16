import React from "react";
import { useTranslation } from "react-i18next";
import "./CardPageRight.scss";
function CardPageRight() {
  const { t } = useTranslation();
  return (

    <div className="cart-page-two mt-5">
      <div className="cart-page-two-container">
        <h2>{t(`CardPageRight.Titul`)}</h2>
        <div className="my-grid my-p-bottom">
          <div>{t(`CardPageRight.Titul1`)}</div>
          <div className="x-text-m">$1,785.00</div>
        </div>
        <div className="my-grid my-p-bottom">
          <div>{t(`CardPageRight.Titul2`)}</div>
          <div className="x-text-l">
            {t(`CardPageRight.Titul3`)} $300.00
            <p>  {t(`CardPageRight.Titul4`)} </p>
          </div>
        </div>
        <div className="my-grid">
          <div> {t(`CardPageRight.Titul5`)} </div>
          <div className="x-text-m">$2,085.00</div>
        </div>
        <div className="my-input">
          <input type="text" placeholder= {t(`CardPageRight.Titul9`)} />
          <div> {t(`CardPageRight.Titul6`)} </div>
        </div>
        <div className="update-cart"> {t(`CardPageRight.Titul7`)} </div>
        <div className="ckeckout-now">
        {t(`CardPageRight.Titul8`)}
        </div>
      </div>
    </div>
  );
}

export default CardPageRight;
