import "./App.css";
import Header from "./components/Header";
import Page from "./components/Page";
import home from "./assets/home.png";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Page />
        <img className="img" src={home} alt="" />
        <Page2 />
        <Page3 />
        <Page4 />
        <Footer/>
      </div>
    </>
  );
}

export default App;
