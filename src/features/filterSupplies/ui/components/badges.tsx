import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Chip } from '@mui/material';
import { filterStore } from '../../model/filterStore';
import { SupplyStatus } from '@/entities/supply';

interface SavedFilterBadge {
  label: string;
  value: SupplyStatus;
}

const savedFilters: SavedFilterBadge[] = [
  { label: 'Фильтр первый', value: 'accepted' },
  { label: 'Фильтр первый', value: 'not_reserved' },
];

export const FilterBadges: React.FC = observer(() => {
  const handleBadgeClick = (status: SupplyStatus) => {
    const current = filterStore.filters.operationStatus;
    filterStore.setOperationStatus(current === status ? null : status);
  };

  return (
    <Box sx={{ display: 'flex', gap: '8px', marginTop: '24px' }}>
      {savedFilters.map(({ label, value }) => {
        const isActive = filterStore.filters.operationStatus === value;

        return (
          <Chip
            key={value}
            label={label}
            onClick={() => handleBadgeClick(value)}
            sx={{
              height: '36px',
              borderRadius: '20px',
              padding: '0 20px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              backgroundColor: isActive ? '#429EFF' : '#EAF5FF',
              color: isActive ? '#FFFFFF' : '#8496AF',
              '&:hover': {
                backgroundColor: isActive ? '#2B8AEB' : '#DCE7F1',
              },
              '& .MuiChip-label': {
                padding: 0,
              },
            }}
          />
        );
      })}
    </Box>
  );
});
