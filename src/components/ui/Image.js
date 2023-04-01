import { useRef } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import classes from './Image.module.css';

const Image = (props) => {
  const nodeRef = useRef(null);
  const { path, element = '' } = props;

  return (
    <>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={element}
          timeout={200}
          classNames="fade"
          nodeRef={nodeRef}
        >
          <picture ref={nodeRef}>
            <source
              srcSet={`/assets/${path}/image-${element
                .toLowerCase()
                .split(' ')
                .join('-')}.webp`}
              type="image/webp"
            />
            <source
              srcSet={`/assets/${path}/image-${element
                .toLowerCase()
                .split(' ')
                .join('-')}.jpg`}
              type="image/jpeg"
            />
            <img
              src={`/assets/${path}/image-${element
                .toLowerCase()
                .split(' ')
                .join('-')}.png`}
              alt={element}
            />
          </picture>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default Image;
