import { useState, useRef, useCallback } from 'react';

export const useHoverMenu = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback((item: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setOpenMenu(item);
  }, []);

  const handleMouseLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  }, []);

  const closeMenu = useCallback(() => {
    setOpenMenu(null);
  }, []);

  return {
    openMenu,
    handleMouseEnter,
    handleMouseLeave,
    closeMenu,
  };
};
