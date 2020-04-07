import React from 'react';

import classNames from 'classnames';

import styles from './Widget.module.scss';

function Widget(props: { theme: string }) {
  const className = classNames(styles.Widget, props.theme);
  return <div className={className}></div>;
}

export default Widget;
