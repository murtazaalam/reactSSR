import { BrowserRouter } from "react-router-dom";
// import MainRoute from "./Main/routes/MainRoute";
import { SecondaryNavBar } from "./components";
import { Footer } from "./components";
function App() {
  return (
    <BrowserRouter>
      <SecondaryNavBar />
      {/* <MainRoute />
        <Footer /> */}
      <Footer />
      <h1>hi react</h1>
    </BrowserRouter>
  );
}

export default App;
