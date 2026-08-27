import { Components, Theme } from '@mui/material/styles';

export const components: Components<Theme> = {
  MuiPagination: {
    styleOverrides: {
      ul: {
        gap: '4px',
      },
    },
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        minWidth: '36px',
        height: '36px',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: 500,
        color: '#8496AF',
        border: '1px solid #DCE7F1',
        backgroundColor: '#FFFFFF',
        transition: 'all 0.15s ease',
        padding: 0,
        margin: 0,
        '&:hover': {
          backgroundColor: '#F6F7FB',
          borderColor: '#8496AF',
        },
        '&.Mui-selected': {
          backgroundColor: '#429EFF',
          color: '#FFFFFF',
          borderColor: '#429EFF',
          '&:hover': {
            backgroundColor: '#429EFF',
          },
        },
        '&.Mui-disabled': {
          opacity: 0.4,
        },
      },
      previousNext: {
        border: '1px solid #DCE7F1',
        color: '#8496AF',
        '& svg': {
          fontSize: '18px',
        },
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      root: {
        minWidth: '80px',
        height: '36px',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: 500,
        color: '#1E1E1E',
        backgroundColor: '#FFFFFF',
        border: '1px solid #DCE7F1',
        '& .MuiSelect-select': {
          padding: '6px 32px 6px 12px',
          display: 'flex',
          alignItems: 'center',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        '& .MuiSvgIcon-root': {
          color: '#8496AF',
          right: '8px',
        },
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontSize: '14px',
        fontWeight: 500,
        color: '#1E1E1E',
        '&.Mui-selected': {
          backgroundColor: '#EAF5FF',
          color: '#429EFF',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: '#EAF5FF',
          },
        },
        '&:hover': {
          backgroundColor: '#F6F7FB',
        },
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        '&.MuiMenu-list': {
          padding: '4px',
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {},
    variants: [
      {
        props: { variant: 'primaryCustom' },
        style: ({ theme }) => ({
          minHeight: '46px',
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.blueLight.dark,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.grayLight.main,
            color: theme.palette.gray.main,
            opacity: 0.6,
          },
        }),
      },
      {
        props: { variant: 'outlinedCustom' },
        style: ({ theme }) => ({
          minHeight: '46px',
          backgroundColor: 'transparent',
          color: theme.palette.text.primary,
          border: `1px solid ${theme.palette.gray.light}`,
          '&:hover': {
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
            backgroundColor: 'transparent',
          },
        }),
      },
    ],
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        color: 'inherit',
      },
    },
  },
};
