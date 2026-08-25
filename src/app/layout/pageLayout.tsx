import React from 'react';
import styles from './layout.module.scss';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};
