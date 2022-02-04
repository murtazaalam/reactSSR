import { BrowserRouter } from "react-router-dom";
// import MainRoute from "./Main/routes/MainRoute";
import { SecondaryNavBar } from "./components";
// import Footer from "./Main/components/Footer";
function App() {
    return (
      <BrowserRouter>
        <SecondaryNavBar />
        {/* <MainRoute />
        <Footer /> */}
        <h1>hi react</h1>
      </BrowserRouter>
    );
  }
  
  export default App;