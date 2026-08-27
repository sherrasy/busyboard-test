import { Chip, SxProps, Theme } from '@mui/material';
import React from 'react';
import styles from './badge.module.scss';

export type BadgeVariant = 'success' | 'error' | 'warning' | 'info' | 'default';

interface StatusBadgeProps {
  text: string;
  variant?: BadgeVariant;
  sx?: SxProps<Theme>;
}

const variantStyles: Record<BadgeVariant, { bg: string; color: string }> = {
  success: { bg: 'success.light', color: 'success.main' },
  error: { bg: 'error.light', color: 'error.main' },
  warning: { bg: 'warning.light', color: 'warning.main' },
  info: { bg: 'info.light', color: 'info.main' },
  default: { bg: 'grayLight.main', color: 'gray.main' },
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  text,
  variant = 'default',
  sx,
}) => {
  const style = variantStyles[variant];

  return (
    <Chip
      label={text}
      className={styles.badge}
      sx={{
        bgcolor: style.bg,
        color: style.color,
        '& .MuiChip-label': {
          color: style.color,
        },
        ...sx,
      }}
    />
  );
};
