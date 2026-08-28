import { LogoIcon } from '@/shared/icons/logoIcon';
import { AppBar, Box, Toolbar } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { navItems, submenuData } from '../lib/consts';
import { useAnchorMenu } from '../lib/useAnchorMenu';
import { useHoverMenu } from '../lib/useHoverMenu';
import { FavoritesButton } from './components/favoritesBtn';
import { NavItem } from './components/navItem';
import { UserMenu } from './components/userMenu';
import styles from './header.module.scss';

export const Header: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>(navItems[0]);
  const { openMenu, handleMouseEnter, handleMouseLeave, closeMenu } =
    useHoverMenu();
  const userMenu = useAnchorMenu();

  const handleSubmenuClick = useCallback(
    (item: string) => {
      setActiveItem(item);
      closeMenu();
    },
    [closeMenu],
  );

  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
        borderBottom: (theme) => `1px solid ${theme.palette.gray.light}}`,
      }}
    >
      <Toolbar
        variant='dense'
        disableGutters
        className={styles.header}
        sx={{
          minHeight: 56,
          display: 'flex',
          alignItems: 'center',
          px: '12px',
          gap: 5,
        }}
      >
        <LogoIcon
          sx={{ height: 24, width: 120, display: 'block', ml: '6px' }}
        />
        <FavoritesButton />

        <Box
          component='nav'
          sx={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            gap: '36px',
          }}
        >
          {navItems.map((item) => (
            <NavItem
              key={item}
              label={item}
              isActive={activeItem === item}
              isOpen={openMenu === item}
              submenu={submenuData[item]}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onSubmenuClick={handleSubmenuClick}
            />
          ))}
        </Box>

        <UserMenu
          anchorEl={userMenu.anchorEl}
          open={userMenu.open}
          onOpen={userMenu.handleOpen}
          onClose={userMenu.handleClose}
        />
      </Toolbar>
    </AppBar>
  );
};
