const Image = (props) => {
  const { path, element = '' } = props;

  return (
    <picture>
      <source
        srcSet={`/assets/${path}/image-${element
          .toLowerCase()
          .split(' ')
          .join('-')}.webp`}
        type="image/webp"
      ></source>
      <img
        src={`/assets/${path}/image-${element
          .toLowerCase()
          .split(' ')
          .join('-')}.png`}
        alt={element}
      />
    </picture>
  );
};

export default Image;
