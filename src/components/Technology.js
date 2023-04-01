import { useState, useEffect } from 'react';

import data from '../data.json';

import NavigationButton from './ui/NavigationButton';
import Image from './ui/Image';

import classes from './Technology.module.css';

const Technology = () => {
  const [selectedTechnology, setSelectedTechnology] =
    useState('Launch vehicle');
  const [selectedTechnologyInfo, setSelectedTechnologyInfo] = useState();

  useEffect(() => {
    setSelectedTechnologyInfo(
      data.technology.find(
        (technology) => technology.name === selectedTechnology
      )
    );
  }, [selectedTechnology]);

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
          <h2 className="fs-600 uppercase ff-serif">The Terminology...</h2>
          <p className="fs-700 uppercase ff-serif">
            {selectedTechnologyInfo?.name}
          </p>
        </header>

        <p className="text-accent">{selectedTechnologyInfo?.description}</p>
      </article>

      <Image
        path={'technology'}
        element={`${selectedTechnology}-portrait`}
      ></Image>
    </section>
  );
};

export default Technology;
