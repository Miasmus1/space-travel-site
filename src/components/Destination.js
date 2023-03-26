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

  const handleSelectedDestination = (e, destinationName) => {
    if (e.type === 'keydown') {
      const tabList = document.querySelectorAll('.tab-list button');
      const currentTab = document.querySelector('.tab-list button:focus');
      const currentTabIndex = Array.from(tabList).indexOf(currentTab);

      // change tab index on arrow key press
      if (e.key === 'ArrowLeft') {
        if (currentTabIndex === 0) {
          tabList[tabList.length - 1].focus();
          tabList[tabList.length - 1].setAttribute('tabindex', '0');
        } else {
          tabList[currentTabIndex - 1].focus();
          tabList[currentTabIndex - 1].setAttribute('tabindex', '0');
        }
      }

      if (e.key === 'ArrowRight') {
        if (currentTabIndex === tabList.length - 1) {
          tabList[0].focus();
          tabList[0].setAttribute('tabindex', '0');
        } else {
          tabList[currentTabIndex + 1].focus();
          tabList[currentTabIndex + 1].setAttribute('tabindex', '0');
        }
      }
    }

    if (e.type === 'click') {
      setSelectedDestination(destinationName);
    }
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
          // <button
          //   key={destination.name}
          //   aria-selected={selectedDestination === destination.name}
          //   role="tab"
          //   tabIndex={selectedDestination === destination.name ? '0' : '-1'}
          //   className="uppercase ff-sans-cond text-accent bg-transparent letter-spacing-2"
          //   onClick={(e) => handleSelectedDestination(e, destination.name)}
          //   onKeyDown={(e) => {
          //     handleSelectedDestination(e, destination.name);
          //   }}
          // >
          //   {destination.name}
          // </button>
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
