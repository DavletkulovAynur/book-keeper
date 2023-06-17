import React from "react";
import { Routing } from "pages";
import "./index.scss";
import { withProviders } from "./providers";
import { Provider } from "react-redux";
import { store } from "./store";
import { Layout } from "antd";
import { Header, Sidebar } from "modules/ud-ui";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Layout>
          <Sidebar />
          <Layout>
            <Header />
            <Routing />
          </Layout>
        </Layout>
      </Provider>
    </div>
  );
};

export default withProviders(App);
