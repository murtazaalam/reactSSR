import { BrowserRouter } from "react-router-dom";
// import MainRoute from "./Main/routes/MainRoute";
import NavBar from "./components/navbar/secondaryNavBar/NavBar";
// import Footer from "./Main/components/Footer";
function App() {
    return (
      <BrowserRouter>
        <NavBar />
        {/* <MainRoute />
        <Footer /> */}
        <h1>hi react</h1>
      </BrowserRouter>
    );
  }
  
  export default App;