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
    <div>
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span>
        Destination
      </h1>

      <img src="/assets/destination/image-moon.png" alt="The Moon" />

      <div className="tab-list underline-indicators flex">
        {data.destinations.map((destination) => (
          <button
            key={destination.name}
            aria-selected={selectedDestination === destination.name}
            className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2"
            onClick={() => selectedDestinationHandler(destination.name)}
          >
            {destination.name}
          </button>
        ))}
      </div>

      <article>
        <h2 className="fs-800 uppercase ff-serif">
          {selectedDestinationInfo?.name}
        </h2>
        <p>{selectedDestinationInfo?.description}</p>

        <div className="flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. Distance</h3>
            <p className="fs-500 ff-serif uppercase">
              {selectedDestinationInfo?.distance}
            </p>
          </div>

          <div>
            <h3 className="text-accent fs-200 uppercase">Est. Travel Time</h3>
            <p className="fs-500 ff-serif uppercase">
              {selectedDestinationInfo?.travel}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Destination;
