import "./App.css";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import data from "./data";

function App() {
  const heroSection = data.map((item) => {
    return <Hero key={item.title} {...item} />;
  });

  return (
    <div className="container">
      <Navbar />
      {heroSection}
    </div>
  );
}

export default App;
