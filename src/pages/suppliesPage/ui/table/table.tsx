import React from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  Typography,
  Box,
  TableRow,
  TableCell,
} from '@mui/material';
import { useSupplies } from '@entities/supply';
import styles from './table.module.scss';
import { TableHeader } from '@/shared/ui/tableParts/headerCell';
import { columns } from '../../lib/consts';
import { TableBodyContent } from './bodyContent';

const TABLE_HEIGHT = 440;
const ROW_HEIGHT = 56;

export const SuppliesTable: React.FC = () => {
  const { data: supplies, isLoading } = useSupplies();

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
  );
};
