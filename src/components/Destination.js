import { useEffect, useState } from 'react';
import data from '../data.json';

import NavigationButton from './ui/NavigationButton';
import Image from './ui/Image';

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState('Moon');
  const [selectedDestinationInfo, setSelectedDestinationInfo] = useState();

  useEffect(() => {
    setSelectedDestinationInfo(
      data.destinations.find(
        (destination) => destination.name === selectedDestination
      )
    );
  }, [selectedDestination]);

  return (
    <section
      id="main"
      className="grid-container grid-container--destination flow"
    >
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span>
        Pick Your Destination
      </h1>

      <Image path={'destination'} element={selectedDestination} />

      <div
        className="tab-list underline-indicators flex"
        role="tablist"
        aria-label="destination list"
      >
        {data.destinations.map((destination) => (
          <NavigationButton
            key={destination.name}
            element={destination}
            selectedElement={selectedDestination}
            setSelectedElement={setSelectedDestination}
          >
            {destination.name}
          </NavigationButton>
        ))}
      </div>

      <article className="destination-info flow">
        <h2 className="fs-800 uppercase ff-serif">
          {selectedDestinationInfo?.name}
        </h2>
        <p>{selectedDestinationInfo?.description}</p>

        <div className="flex destination-meta">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. Distance</h3>
            <p className="ff-serif uppercase">
              {selectedDestinationInfo?.distance}
            </p>
          </div>

          <div>
            <h3 className="text-accent fs-200 uppercase">Est. Travel Time</h3>
            <p className="ff-serif uppercase">
              {selectedDestinationInfo?.travel}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Destination;
