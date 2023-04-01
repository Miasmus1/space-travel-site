import { useEffect, useState } from 'react';
import data from '../data.json';

import NavigationButton from '../components/ui/NavigationButton';
import Image from '../components/ui/Image';

import classes from './Crew.module.css';

const Crew = () => {
  const [selectedCrewMember, setSelectedCrewMember] =
    useState('Douglas Hurley');
  const [selectedCrewMemberInfo, setSelectedCrewMemberInfo] = useState();

  useEffect(() => {
    setSelectedCrewMemberInfo(
      data.crew.find((crewMember) => crewMember.name === selectedCrewMember)
    );
  }, [selectedCrewMember]);

  return (
    <section
      id="main"
      className={`grid-container ${classes['grid-container--crew']} flow`}
    >
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span>
        Meet Your Crew
      </h1>

      <div
        className="dot-indicators flex"
        role="tablist"
        aria-label="crew-list"
      >
        {data.crew.map((crewMember) => (
          <NavigationButton
            key={crewMember.name}
            element={crewMember}
            selectedElement={selectedCrewMember}
            setSelectedElement={setSelectedCrewMember}
          >
            <span className="sr-only">{selectedCrewMemberInfo?.role}</span>
          </NavigationButton>
        ))}
      </div>

      <article className="crew-info flow" tabIndex="0">
        <header className="flow flow--space-small">
          <h2 className="fs-600 uppercase ff-serif">
            {selectedCrewMemberInfo?.role}
          </h2>
          <p className="fs-700 uppercase ff-serif">
            {selectedCrewMemberInfo?.name}
          </p>
        </header>

        <p className="text-accent">{selectedCrewMemberInfo?.bio}</p>
      </article>

      <Image path={'crew'} element={selectedCrewMember} />
    </section>
  );
};

export default Crew;
