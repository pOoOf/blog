import Image from 'next/image';
import { Circle, Gift, MagnifyingGlass, Moon, Plus, Question } from "phosphor-react";

import Hover from "../Hover/Hover";
import styles from './PrimarySidebar.module.css';
import logoSmall from '../../assets/images/logo-small-2.png';

const PrimarySidebar = () => {
  return (
    <div className={styles.primary}>
      <div className={styles.head}>
        <div className={styles.logoContainer}>
          <Image src={logoSmall} alt="logo" height={32} width={32} />
        </div>
        <Hover disabled>
          <Circle color="#ffffff" size={24} weight="fill" className={styles.icon} />
        </Hover>
      </div>
      <div className={styles.mainOptions}>
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
      </div>
      <div className={styles.footer}>
        <Hover>
          <Circle color="#333333" size={32} weight="fill" className={styles.icon} />
        </Hover>
      </div>
    </div>
  );
}

export default PrimarySidebar