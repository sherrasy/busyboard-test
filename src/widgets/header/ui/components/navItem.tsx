import React, { useRef } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';

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
        sx={{
          textTransform: 'none',
          minHeight: 56,
          px: 2,
          py: 0,
          color: isActive ? '#414042' : '#718096',
          fontSize: '0.875rem',
          fontWeight: isActive ? 600 : 400,
          borderRadius: 0,
          position: 'relative',
          '&:hover': {
            color: '#414042',
            backgroundColor: 'transparent',
          },
          '&::after': isActive
            ? {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 8,
                right: 8,
                height: 2.5,
                borderRadius: '2px 2px 0 0',
                backgroundColor: '#2196F3',
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
            sx: {
              mt: 0,
              minWidth: 240,
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              borderRadius: 2,
              pointerEvents: 'auto',
              py: 1.5,
              px: 1,
            },
          },
        }}
        sx={{ pointerEvents: 'none' }}
        disableAutoFocus
        disableEnforceFocus
      >
        <Typography
          sx={{
            px: 2,
            py: 0.5,
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#A0AEC0',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {label}
        </Typography>

        <Divider sx={{ my: 1, mx: 2, borderColor: '#F1F5F9' }} />

        {submenu.items.map((item) => (
          <MenuItem
            key={item}
            onClick={() => onSubmenuClick(label)}
            sx={{
              borderRadius: 1,
              mx: 1,
              px: 1.5,
              py: 0.75,
              minHeight: 36,
              '&:hover': {
                backgroundColor: '#F8FAFC',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 32, color: '#CBD5E0' }}>
              <StarBorderIcon sx={{ fontSize: 18 }} />
            </ListItemIcon>
            <ListItemText
              primary={item}
              primaryTypographyProps={{
                fontSize: '0.875rem',
                color: '#414042',
              }}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
