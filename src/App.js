import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
