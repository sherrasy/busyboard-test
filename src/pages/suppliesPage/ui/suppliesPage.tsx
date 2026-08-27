import { FilterPanel } from '@/features/filterSupplies';
import { useOnboardingContext } from '@/features/onboarding/ui/onboardingProvider';
import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { ActionBar } from './actionBar/actionBar';
import styles from './page.module.scss';
import { SuppliesTable } from './table/table';

export const SuppliesPage: React.FC = () => {
  const { startTour } = useOnboardingContext();

  useEffect(() => {
    const timer = setTimeout(() => startTour('supplies-page'), 500);
    return () => clearTimeout(timer);
  }, [startTour]);

  return (
    <Box
      component='main'
      className={styles.main}
      sx={{ backgroundColor: 'background.default' }}
    >
      <Typography
        variant='h6'
        className={styles.title}
        sx={{ color: 'gray.main', backgroundColor: 'gray.light' }}
      >
        Заявки на поставку
      </Typography>
      <Box
        component='section'
        className={styles.section}
        sx={{
          backgroundColor: 'background.paper',
          border: (theme) => `1px solid ${theme.palette.gray.light}`,
        }}
      >
        <ActionBar />
        <FilterPanel />
        <div data-tour='supplies-table'>
          <SuppliesTable />
        </div>
      </Box>
    </Box>
  );
};
