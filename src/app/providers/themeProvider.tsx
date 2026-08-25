import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ConfigProvider } from 'antd';
import 'dayjs/locale/ru';

import { theme } from '@shared/config/theme/theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <MuiThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ru'>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#429EFF',
              borderRadius: 8,
              fontFamily: '"Inter", sans-serif',
            },
          }}
        >
          {children}
        </ConfigProvider>
      </LocalizationProvider>
    </MuiThemeProvider>
  );
};
