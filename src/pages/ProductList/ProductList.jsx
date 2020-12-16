import React from "react";
import TitleHemlet from "../../components/TitleHemlet/TitleHemlet";
import ProductHeader from "../../layouts/ProductList/ProductHeader/ProductHeader";
import ProductTab from "../../layouts/ProductList/ProductTab/ProductTab";
import ProductUnderTab from "../../layouts/ProductList/ProductUnderTab/ProductUnderTab";
import "./ProductList.scss";
function ProductList() {
  return (
    <div className="product-list-page">
      <TitleHemlet title="Product List"/>
      <ProductHeader />
      <ProductTab />
      <ProductUnderTab />
    </div>
  );
}

export default ProductList;
