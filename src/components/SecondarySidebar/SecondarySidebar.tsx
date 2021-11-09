import Image from 'next/image';
import { BookmarkSimple, Circle, Gear, List, PencilCircle, Books, MonitorPlay } from 'phosphor-react';
import cx from 'classnames';

import styles from './SecondarySidebar.module.css';
import lollipop from '../../assets/images/lollipop.png';
import Hover from '../Hover/Hover';

const SecondarySidebar = () => {
  return (
    <div className={styles.navList}>
      <div className={styles.navItem}>
        <Image src={lollipop} alt="logo" height={20} width={20} />
        <span>Hello, World!</span>
      </div>
      <div className={styles.navItem}>
        <BookmarkSimple size={20} weight="light" />
        <span>Bookmarks</span>
      </div>
      <div className={styles.navHeading}>
        <span>Writings</span>
        <Hover size="small">
          <Gear size={20} weight="light" />
        </Hover>
      </div>
      <div className={styles.navItem}>
        <Books size={20} weight="light" />
        <span>Books</span>
      </div>
      <div className={styles.navItem}>
        <MonitorPlay size={20} weight="light" />
        <span>Courses</span>
      </div>
      <div className={styles.navItem}>
        <PencilCircle size={20} weight="light" />
        <span>Other</span>
      </div>
      <div className={styles.navHeading}>
        <span>PROJECTS</span>
        <Hover size="small">
          <Gear size={20} weight="light" />
        </Hover>
      </div>
      <div className={cx(styles.navItem, styles.lightText)}>
        <div className={styles.iconContainer}>
          <Circle color="#C5F6FA" size={10} weight="fill" />
        </div>
        <span>Books</span>
      </div>
      <div className={cx(styles.navItem, styles.lightText)}>
        <div className={styles.iconContainer}>
          <Circle color="#AFE6FA" size={10} weight="fill" />
        </div>
        <span>Entrepreneurship</span>
      </div>
      <div className={cx(styles.navItem, styles.lightText)}>
        <div className={styles.iconContainer}>
          <Circle color="#FDB196" size={10} weight="fill" />
        </div>
        <span>Ideas</span>
      </div>
      <div className={cx(styles.navItem, styles.lightText)}>
        <div className={styles.iconContainer}>
          <Circle color="#FF6961" size={10} weight="fill" />
        </div>
        <span>Productivity</span>
      </div>
      <div className={cx(styles.navItem, styles.lightText)}>
        <div className={styles.iconContainer}>
          <Circle color="#AAD6FA" size={10} weight="fill" />
        </div>
        <span>Tools</span>
      </div>
      <div className={styles.navHeading}>
        <span>Online</span>
      </div>
      <div className={cx(styles.navItem, styles.lightText)}>
        <div className={styles.iconContainer}>
          <Circle color="#24292f" size={10} weight="fill" />
        </div>
        <span>Github</span>
      </div>
      <div className={cx(styles.navItem, styles.lightText)}>
        <div className={styles.iconContainer}>
          <Circle color="#1d9bf0" size={10} weight="fill" />
        </div>
        <span>Twitter</span>
      </div>
      <div className={cx(styles.navItem, styles.lightText)}>
        <div className={styles.iconContainer}>
          <Circle color="#7a36ac" size={10} weight="fill" />
        </div>
        <span>Instagram</span>
      </div>
      <div className={cx(styles.navItem, styles.lightText)}>
        <div className={styles.iconContainer}>
          <Circle color="#ff0100" size={10} weight="fill" />
        </div>
        <span>Youtube</span>
      </div>
    </div>
  );
}

export default SecondarySidebar;
