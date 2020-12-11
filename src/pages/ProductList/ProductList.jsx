import React from "react";
import ProductHeader from "../../layouts/ProductList/ProductHeader/ProductHeader";
import ProductTab from "../../layouts/ProductList/ProductTab/ProductTab";
import ProductUnderTab from "../../layouts/ProductList/ProductUnderTab/ProductUnderTab";
import "./ProductList.scss";

function ProductList() {
  return (
    <div className="product-list-page">
      <ProductHeader />
      <ProductTab />
      <ProductUnderTab />
    </div>
  );
}

export default ProductList;
