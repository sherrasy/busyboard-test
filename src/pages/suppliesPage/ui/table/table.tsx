import { PaginationBar } from '@/shared/ui/pagination/pagination';
import { TableHeader } from '@/shared/ui/tableParts/headerCell';
import { useSupplies } from '@entities/supply';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { columns } from '../../lib/consts';
import { TableBodyContent } from './bodyContent';
import styles from './table.module.scss';

const TABLE_HEIGHT = 440;
const ROW_HEIGHT = 56;

export const SuppliesTable: React.FC = () => {
  const { data: supplies, isLoading } = useSupplies();
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <Typography sx={{ color: 'text.secondary' }}>Загрузка...</Typography>
      </div>
    );
  }

  const rows = supplies || [];
  const dataHeight = rows.length * ROW_HEIGHT;
  const emptySpaceHeight = Math.max(0, TABLE_HEIGHT - 48 - dataHeight);

  return (
    <Box>
      <Box sx={{ overflowX: 'auto' }}>
        <TableContainer
          component={Paper}
          className={`${styles.tableWrapper} onboarding-table`}
          sx={{
            boxShadow: 'none',
            borderRadius: 2,
            overflow: 'hidden',
            minWidth: 1200,
          }}
        >
          <Table size='small' sx={{ tableLayout: 'fixed', width: '100%' }}>
            <TableHead>
              <TableHeader columns={columns} />
            </TableHead>
            <TableBody>
              <TableBodyContent rows={rows} columns={columns} />
              {emptySpaceHeight > 0 && (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    sx={{
                      height: emptySpaceHeight,
                      borderBottom: 'none',
                      p: 0,
                    }}
                  />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <PaginationBar
        page={page}
        totalPages={10}
        rowsPerPage={rowsPerPage}
        onPageChange={setPage}
        onRowsPerPageChange={(rows) => {
          setRowsPerPage(rows);
          setPage(1);
        }}
      />
    </Box>
  );
};
