import React, { useState, useCallback } from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import { useHoverMenu } from '../lib/useHoverMenu';
import { useAnchorMenu } from '../lib/useAnchorMenu';
import { Logo } from './components/logo';
import { FavoritesButton } from './components/favoritesBtn';
import { NavItem } from './components/navItem';
import { UserMenu } from './components/userMenu';
import { navItems, submenuData } from '../lib/consts';

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
      className='onboarding-header'
      sx={{
        backgroundColor: '#fff',
        color: '#414042',
        boxShadow: 'none',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <Toolbar
        variant='dense'
        sx={{
          minHeight: 56,
          px: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Logo />
        <FavoritesButton />

        <Box
          component='nav'
          sx={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
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
