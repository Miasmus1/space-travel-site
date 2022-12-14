import { useEffect, useState } from 'react';
import data from '../data.json';

const Crew = () => {
  const [selectedCrewMember, setSelectedCrewMember] = useState('Douglas Hurley');
  const [selectedCrewMemberInfo, setSelectedCrewMemberInfo] = useState();

  useEffect(() => {
    setSelectedCrewMemberInfo(data.crew.find((crewMember) => crewMember.name === selectedCrewMember));
  }, [selectedCrewMember]);

  const selectedCrewMemberHandler = (e, crewMemberName) => {
    if (e.type === 'keydown') {
      const tabList = document.querySelectorAll('.dot-indicators button');
      const currentTab = document.querySelector('.dot-indicators button:focus');
      const currentTabIndex = Array.from(tabList).indexOf(currentTab);

      if (e.key === 'ArrowLeft') {
        if (currentTabIndex === 0) {
          tabList[tabList.length - 1].focus();
          tabList[tabList.length - 1].setAttribute('tabIndex', '0');
        } else {
          tabList[currentTabIndex - 1].focus();
          tabList[currentTabIndex - 1].setAttribute('tabIndex', '0');
        }
      }

      if (e.key === 'ArrowRight') {
        if (currentTabIndex === tabList.length - 1) {
          tabList[0].focus();
          tabList[0].setAttribute('tabIndex', '0');
        } else {
          tabList[currentTabIndex + 1].focus();
          tabList[currentTabIndex + 1].setAttribute('tabIndex', '0');
        }
      }
    }

    if (e.type === 'click') {
      setSelectedCrewMember(crewMemberName);
    }
  };

  return (
    <section id="main" className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span>
        Meet Your Crew
      </h1>

      <div className="dot-indicators flex" role="tablist" aria-label="crew-list">
        {data.crew.map((crewMember) => (
          <button
            key={crewMember.name}
            aria-selected={selectedCrewMember === crewMember.name}
            role="tab"
            tabIndex={selectedCrewMember === crewMember.name ? '0' : '-1'}
            className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2"
            onClick={(e) => selectedCrewMemberHandler(e, crewMember.name)}
            onKeyDown={(e) => selectedCrewMemberHandler(e, crewMember.name)}
          >
            <span className="sr-only">{selectedCrewMemberInfo?.role}</span>
          </button>
        ))}
      </div>

      <article className="crew-info flow" tabIndex="0">
        <header className="flow flow--space-small">
          <h2 className="fs-600 uppercase ff-serif">{selectedCrewMemberInfo?.role}</h2>
          <p className="fs-700 uppercase ff-serif">{selectedCrewMemberInfo?.name}</p>
        </header>

        <p>{selectedCrewMemberInfo?.bio}</p>
      </article>

      <picture>
        <source
          srcSet={`/assets/crew/image-${selectedCrewMember.toLowerCase().split(' ').join('-')}.webp`}
          type="image/webp"
        ></source>
        <img
          src={`/assets/crew/image-${selectedCrewMember.toLowerCase().split(' ').join('-')}.png`}
          alt={selectedCrewMember}
        />
      </picture>
    </section>
  );
};

export default Crew;
