import DesignSystem from './DesignSystem';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
