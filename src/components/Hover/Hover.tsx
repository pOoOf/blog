import React from 'react';
import styles from './Hover.module.scss';
import cx from 'classnames';

const Hover = ({ children, disabled = false, size }: any) => {
  const sizeStyle: any = {
    small: styles.small,
  };
  return (
    <div className={cx(styles.wrapper, disabled ? styles.disableHoverState : '', sizeStyle[size])}>
      {children}
    </div>
  )
}

export default Hover;
