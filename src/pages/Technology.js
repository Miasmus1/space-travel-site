import { useState, useEffect } from 'react';

import data from '../data.json';

import NavigationButton from '../components/ui/NavigationButton';
import Image from '../components/ui/Image';

import classes from './Technology.module.css';

const Technology = () => {
  const [selectedTechnology, setSelectedTechnology] =
    useState('Launch vehicle');
  const [selectedTechnologyInfo, setSelectedTechnologyInfo] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setSelectedTechnologyInfo(
      data.technology.find(
        (technology) => technology.name === selectedTechnology
      )
    );
  }, [selectedTechnology]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <section
      id="main"
      className={`grid-container ${classes['grid-container--technology']} flow`}
    >
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span>
        Space Launch 101
      </h1>

      <div
        className="number-indicators flex ff-serif"
        role="tablist"
        aria-label="technology-list"
      >
        {data.technology.map((technology, index) => (
          <NavigationButton
            key={technology.name}
            element={technology}
            selectedElement={selectedTechnology}
            setSelectedElement={setSelectedTechnology}
          >
            <span>{index + 1}</span>
            <span className="sr-only">{selectedTechnology?.name}</span>
          </NavigationButton>
        ))}
      </div>

      <article className={`${classes['technology-info']} flow`} tabIndex="0">
        <header className="flow flow--space-small">
          <p className="fs-200 uppercase ff-sand-cond text-accent letter-spacing-2">
            The Terminology...
          </p>
          <h2 className="fs-700 uppercase ff-serif">
            {selectedTechnologyInfo?.name}
          </h2>
        </header>

        <p className="text-accent">{selectedTechnologyInfo?.description}</p>
      </article>

      <Image
        path={'technology'}
        element={`${selectedTechnology}-${
          windowWidth < 1040 ? 'landscape' : 'portrait'
        }`}
      />
    </section>
  );
};

export default Technology;
