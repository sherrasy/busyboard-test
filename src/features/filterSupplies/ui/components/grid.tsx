import React from 'react';
import { Box } from '@mui/material';
import { FilterField } from './field';
import { filterConfig } from '../../config/config';
import styles from '../filters.module.scss';

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
