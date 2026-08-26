import { AppBar, Box, Toolbar } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { navItems, submenuData } from '../lib/consts';
import { useAnchorMenu } from '../lib/useAnchorMenu';
import { useHoverMenu } from '../lib/useHoverMenu';
import { FavoritesButton } from './components/favoritesBtn';
import { NavItem } from './components/navItem';
import { UserMenu } from './components/userMenu';

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
        disableGutters
        sx={{
          minHeight: 56,
          display: 'flex',
          alignItems: 'center',
          px: '12px',
          gap: 5,
        }}
      >
        <Box
          component='img'
          src='/images/logo.svg'
          alt='Logo'
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
