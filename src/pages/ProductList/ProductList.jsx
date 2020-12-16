import React from "react";
import ProductHeader from "../../layouts/ProductList/ProductHeader/ProductHeader";
import ProductTab from "../../layouts/ProductList/ProductTab/ProductTab";
import ProductUnderTab from "../../layouts/ProductList/ProductUnderTab/ProductUnderTab";
import "./ProductList.scss";
import TitleHelmet from "../../components/TitleHelmet/TitleHelmet";


function ProductList() {
  return (
    <div className="product-list-page">
      <TitleHelmet title="Product List page" />
      <ProductHeader />
      <ProductTab />
      <ProductUnderTab />
    </div>
  );
}

export default ProductList;
