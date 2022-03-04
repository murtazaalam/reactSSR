import { BrowserRouter } from "react-router-dom";
import MainRouters from "./routers/MainRouters";
import { SecondaryNavBar } from "./components";
import Footer from "./components/footer/Footer";
import { RecoilRoot } from "recoil";
import React from "react";

import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <HashRouter>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <SecondaryNavBar />
              <MainRouters />
              <Footer />
            </PersistGate>
          </Provider>
        </HashRouter>
      </RecoilRoot>
    </React.StrictMode>
  );
}

export default App;
