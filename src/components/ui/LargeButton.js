import { Link } from 'react-router-dom';

import classes from './LargeButton.module.css';

const LargeButton = () => {
  return (
    <div className={classes['large-button-container']}>
      <Link
        to="/destination"
        className={`${classes['large-button']} bg-white text-dark ff-serif letter-spacing-1 uppercase`}
      >
        Explore
      </Link>
    </div>
  );
};

export default LargeButton;
