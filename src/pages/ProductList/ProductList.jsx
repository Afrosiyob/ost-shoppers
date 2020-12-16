import React from "react";
import TitleHemlet from "../../components/TitleHemlet/TitleHemlet";
import ProductHeader from "../../layouts/ProductList/ProductHeader/ProductHeader";
import ProductTab from "../../layouts/ProductList/ProductTab/ProductTab";
import ProductUnderTab from "../../layouts/ProductList/ProductUnderTab/ProductUnderTab";
import "./ProductList.scss";
<<<<<<< HEAD
import TitleHelmet from "../../components/TitleHelmet/TitleHelmet";


function ProductList() {
  return (
    <div className="product-list-page">
      <TitleHelmet title="Product List page" />
=======
function ProductList() {
  return (
    <div className="product-list-page">
      <TitleHemlet title="Product List"/>
>>>>>>> 088c227aed7f22f476b95fd8afb9f6778c1ec8fe
      <ProductHeader />
      <ProductTab />
      <ProductUnderTab />
    </div>
  );
}

export default ProductList;
