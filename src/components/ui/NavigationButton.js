const NavigationButton = (props) => {
  const { element, selectedElement, setSelectedElement } = props;

  const handleSelectedElement = (e, elementName) => {
    if (e.type === 'keydown') {
      const tabList = document.querySelectorAll('button');
      const currentTab = document.querySelector('button:focus');
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
      setSelectedElement(elementName);
    }
  };

  return (
    <button
      key={element.name}
      aria-selected={selectedElement === element.name}
      role="tab"
      tabIndex={selectedElement === element.name ? '0' : '-1'}
      className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2"
      onClick={(e) => handleSelectedElement(e, element.name)}
      onKeyDown={(e) => handleSelectedElement(e, element.name)}
    >
      {props.children}
    </button>
  );
};

export default NavigationButton;
