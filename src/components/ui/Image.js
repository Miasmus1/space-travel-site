const Image = (props) => {
  const { element = '' } = props;

  return (
    <picture>
      <source
        srcSet={`/assets/crew/image-${element
          .toLowerCase()
          .split(' ')
          .join('-')}.webp`}
        type="image/webp"
      ></source>
      <img
        src={`/assets/crew/image-${element
          .toLowerCase()
          .split(' ')
          .join('-')}.png`}
        alt={element}
      />
    </picture>
  );
};

export default Image;
