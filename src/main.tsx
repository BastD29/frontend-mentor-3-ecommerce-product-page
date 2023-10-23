import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style/index.scss";
import "./i18n";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore.ts";

const store = configureStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
