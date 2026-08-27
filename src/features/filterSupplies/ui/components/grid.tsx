import { Box } from '@mui/material';
import React from 'react';
import { filterConfig } from '../../config/config';
import styles from '../filters.module.scss';
import { FilterField } from './field';

export const FilterGrid: React.FC = () => {
  return (
    <Box className={styles.grid} sx={{ backgroundColor: '#F6F7FB' }}>
      {filterConfig.map(({ key, label, placeholder }) => (
        <FilterField
          key={key}
          name={key}
          label={label}
          placeholder={placeholder}
        />
      ))}
    </Box>
  );
};
