import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Chisenga Chisulo and is{" "}
            <a
              href="https://github.com/chisengachisulo/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
