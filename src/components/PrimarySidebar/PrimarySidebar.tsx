import { User, Triangle } from "phosphor-react";

import Hover from "../Hover/Hover";
import styles from './PrimarySidebar.module.scss';

const PrimarySidebar = () => {
  return (
    <div className={styles.primary}>
      <div className={styles.head}>
        <div className={styles.logoContainer}>
          <Triangle className={styles.logo} weight="fill" />
        </div>
      </div>
      {/* <div className={styles.mainOptions}>
        <Hover>
          <Plus size={24} className={styles.icon} />
        </Hover>
        <Hover>
          <MagnifyingGlass size={24} className={styles.icon} />
        </Hover>
        <Hover>
          <Moon size={24} className={styles.icon} />
        </Hover>
        <Hover>
          <Gift size={24} className={styles.icon} />
        </Hover>
        <Hover>
          <Question size={24} className={styles.icon} />
        </Hover>
      </div> */}
      <div className={styles.footer}>
        <Hover>
          <User size={24} className={styles.icon} />
        </Hover>
      </div>
    </div>
  );
}

export default PrimarySidebar