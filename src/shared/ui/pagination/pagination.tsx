import { ArrowIcon } from '@/shared/icons/arrowIcon';
import { Box, Typography } from '@mui/material';
import { Pagination, Select } from 'antd';
import React from 'react';
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
  const handleChange = (value: number) => {
    onPageChange(value);
  };

  const handleRowsChange = (value: number) => {
    onRowsPerPageChange(value);
  };

  const itemRender = (
    _page: number,
    type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
    originalElement: React.ReactNode,
  ) => {
    if (type === 'prev') {
      return <ArrowIcon sx={{ transform: 'rotate(180deg)' }} />;
    }
    if (type === 'next') {
      return <ArrowIcon />;
    }
    return originalElement;
  };

  return (
    <div className={styles.paginationBar}>
      <Pagination
        current={page}
        total={totalPages * rowsPerPage}
        pageSize={rowsPerPage}
        onChange={handleChange}
        showSizeChanger={false}
        showQuickJumper={false}
        itemRender={itemRender}
        className={styles.pagination}
      />

      <Box className={styles.paginationSelect}>
        <Typography variant='body1'>Строк на странице</Typography>

        <Select
          value={rowsPerPage}
          onChange={handleRowsChange}
          options={[
            { value: 10, label: '10' },
            { value: 25, label: '25' },
            { value: 50, label: '50' },
            { value: 100, label: '100' },
          ]}
          className={styles.rowsSelect}
          suffixIcon={
            <ArrowIcon sx={{ fontSize: 16, transform: 'rotate(90deg)' }} />
          }
        />
      </Box>
    </div>
  );
};
