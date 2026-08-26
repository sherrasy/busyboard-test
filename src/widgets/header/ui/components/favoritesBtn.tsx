import StarIcon from '@mui/icons-material/Star';
import { Button, Typography } from '@mui/material';
import React from 'react';
import styles from '../header.module.scss';

export const FavoritesButton: React.FC = () => (
  <Button
    variant='outlined'
    className={styles.favoritesButton}
    startIcon={<StarIcon sx={{ color: 'gray.main', fontSize: 18 }} />}
    sx={{
      color: 'text.primary',
      borderColor: 'divider',
      '&:hover': {
        borderColor: 'gray.main',
        backgroundColor: 'action.hover',
      },
    }}
  >
    <Typography variant='button'>Избранное</Typography>
  </Button>
);
