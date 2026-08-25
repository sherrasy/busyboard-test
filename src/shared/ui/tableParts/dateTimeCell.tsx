import React from 'react';
import { Box } from '@mui/material';
import { formatDate, formatTime } from '@shared/lib/formatDate';

interface DateTimeCellProps {
  date: string;
}

export const DateTimeCell: React.FC<DateTimeCellProps> = ({ date }) => {
  const d = formatDate(date);
  const t = formatTime(date);
  return (
    <Box component='span' sx={{ fontSize: '13px', color: 'text.primary' }}>
      {d}
      <Box component='span' sx={{ color: 'text.secondary', mx: 0.75 }}>
        |
      </Box>
      {t}
    </Box>
  );
};
