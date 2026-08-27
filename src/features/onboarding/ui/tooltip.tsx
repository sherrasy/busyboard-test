import React from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import type { TooltipRenderProps } from 'react-joyride';
import styles from './tooltip.module.scss';

export const OnboardingTooltip: React.FC<TooltipRenderProps> = ({
  continuous,
  index,
  step,
  backProps,
  closeProps,
  primaryProps,
  tooltipProps,
  size,
  isLastStep,
}) => {
  return (
    <Box
      {...tooltipProps}
      className={styles.tooltip}
      sx={{
        backgroundColor: 'background.paper',
      }}
    >
      <Box className={styles.header}>
        <Typography variant='h2' sx={{ color: 'text.primary' }}>
          {step.title}
        </Typography>

        <IconButton
          {...closeProps}
          size='small'
          className={styles.closeButton}
          sx={{
            color: 'text.primary',
            '&:hover': { color: 'gray.main' },
          }}
        >
          <CloseIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>

      <Box className={styles.content}>
        <Typography variant='body2'>{step.content}</Typography>
      </Box>

      <Box className={styles.footer}>
        <Typography
          variant='overline'
          className={styles.stepCounter}
          sx={{ color: 'gray.main' }}
        >
          Шаг {index + 1} из {size}
        </Typography>

        <Box className={styles.actions}>
          {index > 0 && (
            <Button
              {...backProps}
              variant='outlinedCustom'
              size='small'
              className={styles.actionButton}
            >
              Назад
            </Button>
          )}

          {continuous && (
            <Button
              {...primaryProps}
              variant='primaryCustom'
              size='small'
              disableElevation
              className={styles.actionButton}
            >
              {isLastStep ? 'К началу' : 'Далее'}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};
