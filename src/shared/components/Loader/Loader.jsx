import { TailSpin } from 'react-loader-spinner';

import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <TailSpin
        height="30"
        width="30"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        visible={true}
      />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
