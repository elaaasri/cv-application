import Header from "./Header";
import Footer from "./Footer";
import AddCV from "./AddCV";

// app func to manipulate the dom :
const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main">
        <AddCV />
      </main>
      <Footer />
    </div>
  );
};
export default App;
