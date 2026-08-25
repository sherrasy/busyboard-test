import React from 'react';
import {
  Pagination,
  PaginationItem,
  Select,
  MenuItem,
  Box,
  Typography,
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from './pagination.module.scss';

interface PaginationBarProps {
  page: number;
  totalPages: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
}

export const PaginationBar: React.FC<PaginationBarProps> = ({
  page,
  totalPages,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}) => {
  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  const handleRowsChange = (event: any) => {
    onRowsPerPageChange(Number(event.target.value));
  };

  return (
    <Box className={styles.paginationBar}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        shape='rounded'
        siblingCount={1}
        boundaryCount={0}
        showFirstButton={false}
        showLastButton={false}
        renderItem={(item) => (
          <PaginationItem
            slots={{
              previous: KeyboardArrowLeftIcon,
              next: KeyboardArrowRightIcon,
            }}
            {...item}
          />
        )}
      />

      <Typography className={styles.rowsLabel}>Строк на странице</Typography>

      <Select
        value={rowsPerPage}
        onChange={handleRowsChange}
        IconComponent={KeyboardArrowDownIcon}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={25}>25</MenuItem>
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={100}>100</MenuItem>
      </Select>
    </Box>
  );
};
