import React from 'react';
import { observer } from 'mobx-react-lite';
import {
  FormControl,
  Select,
  MenuItem,
  Box,
  Typography,
  styled,
} from '@mui/material';
import { filterStore } from '../../model/filterStore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from '../filters.module.scss';

const SmallArrowIcon = styled(KeyboardArrowDownIcon)({
  fontSize: '18px',
  marginRight: '10px',
});

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
        <Typography sx={{ color: 'text.primary' }} className={styles.label}>
          {label}
        </Typography>
        <FormControl fullWidth size='small' variant='outlined'>
          <Select
            value={displayValue}
            onChange={handleChange}
            displayEmpty
            IconComponent={SmallArrowIcon}
            renderValue={(selected) =>
              selected ? (
                <Box
                  component='span'
                  sx={{ color: 'text.primary' }}
                  className={styles.value}
                >
                  {selected as string}
                </Box>
              ) : (
                <Box
                  component='span'
                  sx={{ color: 'text.secondary' }}
                  className={styles.placeholder}
                >
                  {placeholder}
                </Box>
              )
            }
            sx={{
              backgroundColor: 'background.paper',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'divider',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'primary.main',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'primary.main',
                borderWidth: '1px',
              },
              '& .MuiSelect-select': {
                padding: '8px 32px 8px 14px',
              },
            }}
            inputProps={{
              className: styles.selectInput,
            }}
            className={styles.select}
            MenuProps={{
              PaperProps: {
                sx: {
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  mt: 0.5,
                },
              },
            }}
          >
            <MenuItem value=''>
              <Box
                sx={{ color: 'text.secondary' }}
                className={styles.placeholder}
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
