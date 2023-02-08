import "./App.css";
import Navbar from "./Navbar/Navbar";
import JournalEntry from "./JounalEntry/JournalEntry";
import data from "./data";

function App() {
  const journalEntries = data.map((item) => {
    return <JournalEntry key={item.title} {...item} />;
  });

  return (
    <div className="container">
      <Navbar />
      {journalEntries}
    </div>
  );
}

export default App;
