import { useEffect, useState } from 'react';
import data from '../data.json';

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

  const selectedDestinationHandler = (destinationName) => {
    setSelectedDestination(destinationName);
  };

  return (
    <section
      id="main"
      className="grid-container grid-container--destination flow"
    >
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span>
        Pick Your Destination
      </h1>

      <picture>
        <source
          srcSet={`/assets/destination/image-${selectedDestination}.webp`}
          type="image/webp"
        ></source>
        <img
          src={`/assets/destination/image-${selectedDestination}.png`}
          alt={`The ${selectedDestination}`}
        />
      </picture>

      <div className="tab-list underline-indicators flex">
        {data.destinations.map((destination) => (
          <button
            key={destination.name}
            aria-selected={selectedDestination === destination.name}
            className="uppercase ff-sans-cond text-accent bg-transparent letter-spacing-2"
            onClick={() => selectedDestinationHandler(destination.name)}
          >
            {destination.name}
          </button>
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
