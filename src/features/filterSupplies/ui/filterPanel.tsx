import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';

import { FilterBadges } from './components/badges';
import { FilterGrid } from './components/grid';
import styles from './filters.module.scss';

export const FilterPanel: React.FC = observer(() => {
  return (
    <Box className={styles.panel}>
      <FilterGrid />
      <FilterBadges />
    </Box>
  );
});
