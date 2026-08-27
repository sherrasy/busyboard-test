import { Box, Typography } from '@mui/material';
import { formatDate, formatTime } from '@shared/lib/formatDate';
import React from 'react';

interface DateTimeCellProps {
  date: string;
  color?: string;
  variant?: 'body1' | 'caption';
}

export const DateTimeCell: React.FC<DateTimeCellProps> = ({
  date,
  color = 'inherit',
  variant = 'body1',
}) => {
  const currentDate = formatDate(date);
  const currentTime = formatTime(date);
  return (
    <Box component='span'>
      <Typography component={'span'} variant={variant} sx={{ color }}>
        {currentDate}
      </Typography>
      <Typography
        component={'span'}
        variant={variant}
        sx={{ mx: '4px', color: 'text.secondary' }}
      >
        |
      </Typography>
      <Typography component={'span'} variant={variant} sx={{ color }}>
        {currentTime}
      </Typography>
    </Box>
  );
};
