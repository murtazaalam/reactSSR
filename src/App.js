import { BrowserRouter } from "react-router-dom";
import MainRouters from "./routers/MainRouters";
import { SecondaryNavBar } from "./components";
import Footer from "./components/footer/Footer";
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
