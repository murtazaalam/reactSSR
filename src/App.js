import { BrowserRouter } from "react-router-dom";
import MainRouters from "./routers/MainRouters";
import { SecondaryNavBar, Footer } from "./components/index1";
// import Footer from "./Main/components/Footer";
function App() {
  return (
    <BrowserRouter>
      <SecondaryNavBar />
      <MainRouters />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
