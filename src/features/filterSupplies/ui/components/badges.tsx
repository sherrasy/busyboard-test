import { Box, Chip } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { filterStore } from '../../model/filterStore';
import cn from 'classnames';
import styles from '../filters.module.scss';

interface SavedFilterBadge {
  label: string;
  value: [string, string];
}

const savedFilters: SavedFilterBadge[] = [
  { label: 'Фильтр первый', value: ['02.02.2025', '03.03.2025'] },
  { label: 'Фильтр первый', value: ['01.01.2025', '31.01.2025'] },
];

export const FilterBadges: React.FC = observer(() => {
  const handleBadgeClick = (range: [string, string]) => {
    const current = filterStore.filters.dateRange;
    const isSameRange =
      current !== null && current[0] === range[0] && current[1] === range[1];

    filterStore.setDateRange(isSameRange ? null : range);
  };

  const isRangeActive = (range: [string, string]): boolean => {
    const current = filterStore.filters.dateRange;
    return (
      current !== null && current[0] === range[0] && current[1] === range[1]
    );
  };

  return (
    <Box className={styles.badges}>
      {savedFilters.map(({ label, value }) => {
        const isActive = isRangeActive(value);

        return (
          <Chip
            key={`${value[0]}-${value[1]}`}
            label={label}
            onClick={() => handleBadgeClick(value)}
            sx={{
              backgroundColor: isActive ? 'primary.main' : 'primary.light',
              color: isActive ? 'primary.contrastText' : 'text.secondary',
              '&:hover': {
                backgroundColor: isActive ? 'primary.dark' : 'secondary.light',
              },
            }}
            className={cn(styles.badge)}
          />
        );
      })}
    </Box>
  );
});
