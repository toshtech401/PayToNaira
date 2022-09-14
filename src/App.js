import Header from "./components/Header";
import ArticleOne from "./components/ArticleOne";
import ArticleTwo from "./components/ArticleTwo";
import ArticleThree from "./components/ArticleThree";
import Footer from "./components/Footer";
import ShortenLinks from "./components/ShortenLinks";
import LinkResult from "./components/LinkResult";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      <Header />
      <ArticleOne />
      <article className="gray-section">
        <div className="container">
          <ShortenLinks setInputValue={setInputValue} />
          <LinkResult inputValue={inputValue} />
          <ArticleTwo />
        </div>
      </article>
      <article className="purple-section">
        <div className="container">
          <ArticleThree />
        </div>
      </article>
      <footer>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
