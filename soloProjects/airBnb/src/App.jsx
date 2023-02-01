import "./App.css";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Card from "./Card/Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div class="rity">
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
