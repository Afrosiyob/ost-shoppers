import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "react-tabs/style/react-tabs.css";
import "./index.css";
import App from "./App";
// import i18n (needs to be bundled ;))
import "./i18n";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import registerServiceWorker from "./registerServiceWorker";
import Preloader from "./components/Preloader/Preloader";

ReactDOM.render(
  <Suspense fallback={<Preloader />}>
    <App />
  </Suspense>,

  document.getElementById("root")
);

registerServiceWorker();
