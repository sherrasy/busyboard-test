import React from 'react';
import { Typography } from '@mui/material';
import styles from '../header.module.scss';

export const Logo: React.FC = () => (
  <Typography className={styles.logo} color='text.primary'>
    Busyboard
  </Typography>
);
