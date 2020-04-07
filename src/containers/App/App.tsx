import styles from './App.module.scss';

import React from 'react';

import HomePage from '../HomePage/HomePage';
import { Footer, Header } from '../../components';

function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

export default App;
