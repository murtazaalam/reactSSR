import { BrowserRouter } from "react-router-dom";
import MainRouters from "./routers/MainRouters";
import { SecondaryNavBar } from "./components";
import Footer from "./components/footer/Footer";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <SecondaryNavBar />
        <MainRouters />
        <Footer />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
