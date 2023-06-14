import React from "react";
import { Routing } from "pages";
import "./index.scss";
import { withProviders } from "./providers";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        
        <Routing />
      </Provider>
    </div>
  );
};

export default withProviders(App);
