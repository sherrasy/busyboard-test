import React from 'react';
import { observer } from 'mobx-react-lite';
import {
  FormControl,
  Select,
  MenuItem,
  Box,
  Typography,
  SvgIcon,
} from '@mui/material';
import { filterStore } from '../../model/filterStore';

const ChevronIcon = (props: any) => (
  <SvgIcon
    {...props}
    viewBox='0 0 24 24'
    sx={{ fontSize: 16, color: '#8496AF' }}
  >
    <path d='M7 10l5 5 5-5z' />
  </SvgIcon>
);

export interface FilterFieldProps {
  name: string;
  label: string;
  placeholder: string;
}

export const FilterField: React.FC<FilterFieldProps> = observer(
  ({ name, label, placeholder }) => {
    const value = filterStore.filters[name as keyof typeof filterStore.filters];
    const displayValue = Array.isArray(value)
      ? value.join(' - ')
      : (value ?? '');

    const handleChange = (event: any) => {
      const newValue = event.target.value || null;
      filterStore.setFilter(name as any, newValue);
    };

    return (
      <Box>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#1E1E1E',
            mb: '6px',
            lineHeight: 1.4,
          }}
        >
          {label}
        </Typography>
        <FormControl fullWidth size='small' variant='outlined'>
          <Select
            value={displayValue}
            onChange={handleChange}
            displayEmpty
            IconComponent={ChevronIcon}
            renderValue={(selected) =>
              selected ? (
                <Box
                  component='span'
                  sx={{ color: '#1E1E1E', fontSize: '14px' }}
                >
                  {selected as string}
                </Box>
              ) : (
                <Box
                  component='span'
                  sx={{ color: '#8496AF', fontSize: '14px' }}
                >
                  {placeholder}
                </Box>
              )
            }
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              height: '40px',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#DCE7F1',
                borderRadius: '8px',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#429EFF',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#429EFF',
                borderWidth: '1px',
              },
              '& .MuiSelect-select': {
                padding: '8px 32px 8px 14px',
                fontSize: '14px',
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  mt: 0.5,
                },
              },
            }}
          >
            <MenuItem value=''>
              <Box
                component='em'
                sx={{ color: '#8496AF', fontSize: '14px', fontStyle: 'normal' }}
              >
                {placeholder}
              </Box>
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  },
);
