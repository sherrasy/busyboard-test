import { Components, Theme } from '@mui/material/styles';

export const components: Components<Theme> = {
  MuiSelect: {
    styleOverrides: {
      root: ({ theme }) => ({
        minWidth: '80px',
        height: '36px',
        borderRadius: '8px',
        fontSize: '14px',
        color: theme.palette.dark.main,
        backgroundColor: theme.palette.white.main,
        border: `1px solid ${theme.palette.grayLight.main}`,
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
          color: theme.palette.secondary.main,
          right: '8px',
        },
      }),
    },
  },

  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: '14px',
        fontWeight: 500,
        color: theme.palette.text.primary,
        '&.Mui-selected': {
          backgroundColor: theme.palette.blueLight.main,
          color: theme.palette.text.primary,
          '&:hover': {
            backgroundColor: theme.palette.blueLight.main,
          },
        },
        '&:hover': {
          backgroundColor: theme.palette.background.default,
        },
      }),
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
