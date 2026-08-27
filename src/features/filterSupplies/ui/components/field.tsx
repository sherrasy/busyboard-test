import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
  styled,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { filterStore } from '../../model/filterStore';
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
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
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
