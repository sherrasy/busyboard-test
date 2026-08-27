import { BookmarkIcon } from '@/shared/icons/bookmarkIcon';
import { DownloadIcon } from '@/shared/icons/downloadIcon';
import { EraseIcon } from '@/shared/icons/eraseIcon';
import { PlusIcon } from '@/shared/icons/plusIcon';
import { SearchIcon } from '@/shared/icons/searchIcon';
import { SettingsIcon } from '@/shared/icons/settingsIcon';
import { Box, Button, IconButton } from '@mui/material';
import cn from 'classnames';
import React from 'react';
import styles from './actionBar.module.scss';

export const ActionBar: React.FC = () => {
  return (
    <Box className={cn(styles.bar, 'onboarding-actions')}>
      <Box className={styles.left}>
        <Button
          variant='primaryCustom'
          className={cn(styles.btnPrimary, styles.filterBtn)}
        >
          Фильтр
        </Button>

        <IconButton
          aria-label='Закладки'
          className={styles.btnIcon}
          sx={{
            backgroundColor: 'blueLight.main',
            '&:hover': {
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
            },
          }}
        >
          <BookmarkIcon />
        </IconButton>

        <IconButton
          aria-label='Редактировать'
          className={styles.btnIcon}
          sx={{
            backgroundColor: 'blueLight.main',
            '&:hover': {
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
            },
          }}
        >
          <EraseIcon />
        </IconButton>

        <IconButton
          aria-label='Полный экран'
          className={styles.btnIcon}
          sx={{
            backgroundColor: 'blueLight.main',
            '&:hover': {
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
            },
          }}
        >
          <SearchIcon />
        </IconButton>
      </Box>

      <Box className={styles.right}>
        <Button
          data-tour='api-supplies-button'
          variant='primaryCustom'
          startIcon={<DownloadIcon />}
          className={cn(styles.btnPrimary, styles.apiBtn)}
        >
          Загрузить по API
        </Button>

        <Button
          data-tour='add-supplies-button'
          variant='primaryCustom'
          startIcon={<PlusIcon />}
          className={cn(styles.btnPrimary, styles.requestBtn)}
        >
          Заявка на поставку
        </Button>

        <IconButton
          aria-label='Настройки'
          className={styles.btnIconBordered}
          sx={{ border: (theme) => `1px solid ${theme.palette.gray.light}` }}
        >
          <SettingsIcon fontSize='small' />
        </IconButton>
      </Box>
    </Box>
  );
};
