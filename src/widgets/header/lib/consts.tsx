import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const navItems = ['Финансы', 'Склад', 'Аналитика', 'Автоматизация'];

export const submenuData: Record<string, { title: string; items: string[] }> = {
  Финансы: {
    title: navItems[0],
    items: navItems,
  },
  Склад: {
    title: navItems[1],
    items: navItems,
  },
  Аналитика: {
    title: navItems[2],
    items: navItems,
  },
  Автоматизация: {
    title: navItems[3],
    items: navItems,
  },
};

export interface UserMenuItem {
  label: string;
  icon: React.ComponentType<{ sx?: object }>;
}

export const userMenuItems: UserMenuItem[] = [
  { label: 'Выйти', icon: LogoutOutlinedIcon },
];
