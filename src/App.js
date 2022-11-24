import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import NewsAddForm from "./components/NewsAddForm";
import NewsFilter from "./components/NewsFilter";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content   px-4 ">
        <NewsList />
        <div className="new_pages">
          <NewsAddForm />
          <NewsFilter />
        </div>
      </div>
    </div>
  );
}

export default App;
