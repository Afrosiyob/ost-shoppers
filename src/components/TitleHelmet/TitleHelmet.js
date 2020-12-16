import React from "react";

import {Helmet} from "react-helmet";

function TitleHelmet({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default TitleHelmet;
