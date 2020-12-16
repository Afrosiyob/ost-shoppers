import React from "react";
import { Helmet } from "react-helmet";

function TitleHemlet({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default TitleHemlet;
