import StarBorderIcon from '@mui/icons-material/StarBorder';
import {
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import React, { useRef } from 'react';
import styles from '../header.module.scss';

interface SubmenuItem {
  title: string;
  items: string[];
}

interface NavItemProps {
  label: string;
  isActive: boolean;
  isOpen: boolean;
  submenu: SubmenuItem;
  onMouseEnter: (label: string) => void;
  onMouseLeave: () => void;
  onSubmenuClick: (label: string) => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  label,
  isActive,
  isOpen,
  submenu,
  onMouseEnter,
  onMouseLeave,
  onSubmenuClick,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        ref={buttonRef}
        onMouseEnter={() => onMouseEnter(label)}
        onMouseLeave={onMouseLeave}
        className={styles.navItem}
        sx={{
          color: isActive ? 'text.primary' : 'text.secondary',
          fontWeight: isActive ? 600 : 400,
          '&:hover': {
            color: 'text.primary',
          },
          '&::after': isActive
            ? {
                backgroundColor: 'primary.main',
              }
            : {},
        }}
      >
        {label}
      </Button>

      <Menu
        anchorEl={buttonRef.current}
        open={isOpen && Boolean(buttonRef.current)}
        onClose={() => {}}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        slotProps={{
          paper: {
            onMouseEnter: () => onMouseEnter(label),
            onMouseLeave: onMouseLeave,
            className: styles.menuPaper,
            sx: {
              boxShadow: 'theme.shadows[8]',
              borderRadius: 2,
            },
          },
        }}
        sx={{ pointerEvents: 'none' }}
        disableAutoFocus
        disableEnforceFocus
      >
        <Typography
          className={styles.menuTitle}
          variant='button'
          sx={{
            color: 'text.primary',
          }}
        >
          {label}
        </Typography>

        <Divider
          className={styles.menuDivider}
          sx={{ borderColor: 'grayLight.main' }}
        />

        {submenu.items.map((item) => (
          <MenuItem
            key={item}
            onClick={() => onSubmenuClick(label)}
            className={styles.menuItem}
            sx={{
              '&:hover': {
                backgroundColor: 'background.hover',
              },
            }}
          >
            <ListItemIcon
              className={styles.menuItemIcon}
              sx={{ color: 'grayLight.main' }}
            >
              <StarBorderIcon className={styles.menuItemIconSvg} />
            </ListItemIcon>
            <ListItemText
              primary={item}
              primaryTypographyProps={{
                fontSize: '0.875rem',
                color: 'text.primary',
              }}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
