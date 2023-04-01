import { useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { SwitchTransition, CSSTransition } from 'react-transition-group';

import DesignSystem from './DesignSystem';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

function App() {
  const nodeRef = useRef(null);
  const location = useLocation();

  return (
    <>
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <Navbar />
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={500}
          nodeRef={nodeRef}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/design-system" element={<DesignSystem />} />
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}

export default App;
