import React from 'react';

import { Widget } from '../../components';

import styles from './HomePage.module.scss';

function App() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.LeftSideBar}>
        <Widget theme="Widget--a"></Widget>
        <Widget theme="Widget--b"></Widget>
      </div>
      <div className={styles.HomePageContainer}></div>
      <div className={styles.RightSideBar}>
        <Widget theme="Widget--c"></Widget>
      </div>
    </div>
  );
}

export default App;
