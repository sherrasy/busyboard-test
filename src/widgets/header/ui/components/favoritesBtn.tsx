import React from 'react';
import { Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
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
    Избранное
  </Button>
);
