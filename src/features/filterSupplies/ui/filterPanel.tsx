import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box } from '@mui/material';

import styles from './filters.module.scss';
import { FilterGrid } from './components/grid';
import { FilterBadges } from './components/badges';

export const FilterPanel: React.FC = observer(() => {
  return (
    <Box className={`${styles.panel} onboarding-filters`}>
      <FilterGrid />
      <FilterBadges />
    </Box>
  );
});
