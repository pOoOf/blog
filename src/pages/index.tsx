import React, { useState } from 'react';
import Head from 'next/head'
import cx from 'classnames';
import type { NextPage } from 'next'
import { List, X } from 'phosphor-react';

import styles from '../styles/Home.module.scss'
import PrimarySidebar from '../components/PrimarySidebar/PrimarySidebar';
import SecondarySidebar from '../components/SecondarySidebar/SecondarySidebar';

const Home: NextPage = () => {
  const [isSidebarOpen, toggleSidebar] = useState(false);
  const _toggleSidebar = () => {
    toggleSidebar(!isSidebarOpen);
  }
  const FabIcon = isSidebarOpen ? X : List;
  return (
    <div className={styles.page}>
      <Head>
        <title>Vikash Gupta</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div className={styles.container}>
        <div className={cx(styles.leftNavbar, styles.unselectable, isSidebarOpen ? styles.openSidebar : '')}>
          <PrimarySidebar />
          <SecondarySidebar />
        </div>
        <div className={styles.menuFab} onClick={_toggleSidebar}>
          <FabIcon height={32} width={32} color="#fff" />
        </div>
        <div className={styles.content}>
          <div className={styles.box}>
            <h1>Hi, I&apos;m Vikash Gupta</h1>
            <p>Four generations had laughed over “Don Quixote” before it occurred to anyone to ask, who and what manner of man was this Miguel de Cervantes Saavedra whose name is on the title-page; and it was too late for a satisfactory answer to the question when it was proposed to add a life of the author to the London edition published at Lord Carteret’s instance in 1738. All traces of the personality of Cervantes had by that time disappeared. </p>
            <p>Four generations had laughed over “Don Quixote” before it occurred to anyone to ask, who and what manner of man was this Miguel de Cervantes Saavedra whose name is on the title-page; and it was too late</p>
            <p>Four generations had laughed over “Don Quixote” before it occurred to anyone to ask</p>
            <p>Four generations had laughed over “Don Quixote” before it occurred to anyone to ask, who and what manner of man was this Miguel de Cervantes Saavedra whose name is on the title-page; and it was too late for a satisfactory answer to the question when it was proposed to add a life of the author to the London edition published at Lord Carteret’s instance in 1738. All traces of the personality of Cervantes had by that time disappeared. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
