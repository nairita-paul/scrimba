import Info from "./Info/Info";
import About from "./About/About";
import Interests from "./Interests/Interests";
import Footer from "./Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
