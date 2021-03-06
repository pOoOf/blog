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
            <p>I&apos;m a Software Engineer currently working at <a href="https://www.urbancompany.com/" rel="noreferrer" target="_blank">UrbanCompany</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
