import { BookIcon } from '@/shared/icons/bookIcon';
import { NotificationIcon } from '@/shared/icons/notificationIcon';
import { UserIcon } from '@/shared/icons/userIcon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import React from 'react';
import { userMenuItems } from '../../lib/consts';
import styles from '../header.module.scss';

interface UserMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
  onClose: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({
  anchorEl,
  open,
  onOpen,
  onClose,
}) => (
  <Box className={styles.userSection}>
    <Button
      className={styles.userButton}
      onClick={onOpen}
      endIcon={
        <KeyboardArrowDownIcon
          sx={{
            width: 24,
            height: 24,
            color: 'text.primary',
          }}
        />
      }
      sx={{
        color: 'text.primary',
        '&:hover': {
          backgroundColor: 'action.hover',
        },
      }}
    >
      ГК ТУЗЕМУН
    </Button>

    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      slotProps={{
        paper: {
          className: styles.menuPaper,
          sx: {
            boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
          },
        },
      }}
    >
      {userMenuItems.map(({ label, icon: Icon }) => (
        <MenuItem
          key={label}
          className={styles.menuItem}
          onClick={onClose}
          sx={{
            '&:hover': {
              backgroundColor: 'background.hover',
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 'auto', color: 'text.secondary' }}>
            <Icon sx={{ fontSize: 20 }} />
          </ListItemIcon>
          <ListItemText primary={label} />
        </MenuItem>
      ))}
    </Menu>
    <Box sx={{ color: 'text.primary' }} className={styles.actionIcons}>
      <IconButton className={styles.iconButton} size='small'>
        <BookIcon />
      </IconButton>

      <IconButton className={styles.iconButton} size='small'>
        <NotificationIcon />
      </IconButton>
    </Box>
    <Avatar className={styles.avatar} sx={{ bgcolor: 'success.main' }}>
      <UserIcon sx={{ fontSize: 16, color: 'white.main' }} />
    </Avatar>
  </Box>
);
