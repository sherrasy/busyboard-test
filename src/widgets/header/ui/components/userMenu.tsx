import React from 'react';
import {
  Box,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Avatar,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/PersonOutlined';
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
            fontSize: 18,
            color: 'text.secondary',
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
          <ListItemText
            primary={label}
            primaryTypographyProps={{
              fontSize: '0.875rem',
              color: 'text.primary',
            }}
          />
        </MenuItem>
      ))}
    </Menu>

    <IconButton
      className={styles.iconButton}
      size='small'
      sx={{ color: 'text.secondary' }}
    >
      <MenuBookIcon sx={{ fontSize: 20 }} />
    </IconButton>

    <IconButton
      className={styles.iconButton}
      size='small'
      sx={{ color: 'text.secondary' }}
    >
      <NotificationsNoneIcon sx={{ fontSize: 20 }} />
    </IconButton>

    <Avatar className={styles.avatar} sx={{ bgcolor: 'success.main' }}>
      <PersonIcon sx={{ fontSize: 18, color: 'white.main' }} />
    </Avatar>
  </Box>
);
