import logo_2024 from './assets/logo_2024.png';
import logo_small from './assets/logo_small.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo_2024} alt="background" className="App-background" />

        <img src={logo_small} alt="logo_small" className="App-small-logo" />

        <p>
          <span className="main-title">iPlayground 2025 is coming soon</span>
        </p>
        <a
          className="App-link"
          href="https://forms.gle/AjnTJEYkA6sUR5Pp6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Become a Sponsor
        </a>
        <a
          className="App-link"
          href="https://forms.gle/AjnTJEYkA6sUR5Pp6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Become a Speaker
        </a>
      </header>
      <footer className="App-footer">
        iPlayground 2025 is organized by Taipei Elite Software Developer Association (77212283). All rights reserved.
      </footer>
    </div>
  );
}

export default App;
