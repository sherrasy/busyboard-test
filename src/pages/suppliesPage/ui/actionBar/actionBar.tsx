import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import EditIcon from '@mui/icons-material/Edit';
import CropFreeIcon from '@mui/icons-material/CropFree';
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import styles from './actionBar.module.scss';

export const ActionBar: React.FC = () => {
  return (
    <Box className={`${styles.bar} onboarding-actions`}>
      <Box className={styles.left}>
        <Button variant='contained' className={styles.btnPrimary}>
          Фильтр
        </Button>

        <IconButton
          aria-label='Закладки'
          className={styles.btnIcon}
          sx={{ color: 'theme.palette.gray.main' }}
        >
          <BookmarkBorderIcon fontSize='small' />
        </IconButton>

        <IconButton
          aria-label='Редактировать'
          className={styles.btnIcon}
          sx={{ color: ' theme.palette.gray.main' }}
        >
          <EditIcon fontSize='small' />
        </IconButton>

        <IconButton
          aria-label='Полный экран'
          className={styles.btnIcon}
          sx={{ color: 'theme.palette.gray.main' }}
        >
          <CropFreeIcon fontSize='small' />
        </IconButton>
      </Box>

      <Box className={styles.right}>
        <Button
          variant='contained'
          startIcon={
            <DownloadIcon sx={{ color: 'theme.palette.primary.main' }} />
          }
          className={styles.btnApi}
        >
          Загрузить по API
        </Button>

        <Button
          variant='contained'
          startIcon={<AddIcon />}
          className={styles.btnPrimary}
        >
          Заявка на поставку
        </Button>

        <IconButton
          aria-label='Настройки'
          className={styles.btnIconBordered}
          sx={{
            color: 'theme.palette.gray.main',
            borderColor: 'theme.palette.divider',
            '&:hover': {
              borderColor: 'theme.palette.gray.main',
              backgroundColor: 'theme.palette.background.hover',
            },
          }}
        >
          <SettingsOutlinedIcon fontSize='small' />
        </IconButton>
      </Box>
    </Box>
  );
};
