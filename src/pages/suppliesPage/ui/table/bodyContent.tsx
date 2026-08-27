import { SupplyStatus } from '@/entities/supply';
import { StatusBadge } from '@/shared/ui/statusBadge/statusBadge';
import { DateTimeCell } from '@/shared/ui/tableParts/dateTimeCell';
import { ColumnDef } from '@/shared/ui/tableParts/headerCell';
import { Box, TableCell, TableRow, Typography } from '@mui/material';
import { formatNumber } from '@shared/lib/formatDate';
import React from 'react';

export interface SupplyRow {
  id: string;
  number: string;
  date: string;
  organization: string;
  contractor: string;
  supplyNumber: string;
  quantity: number;
  status: SupplyStatus;
  statusText: string;
  receptionDate: string;
  deliveryTime: string;
  amount: number;
  comment: string;
}

interface TableBodyContentProps {
  rows: SupplyRow[];
  columns: ColumnDef[];
}

export const TableBodyContent: React.FC<TableBodyContentProps> = ({ rows }) => (
  <>
    {rows.map((supply) => (
      <TableRow
        key={supply.id}
        hover
        sx={{
          color:
            supply.status === 'not_reserved' ? 'gray.main' : 'text.primary',
          height: 50,
          minHeight: 50,
          maxHeight: 50,
          '&:hover': { bgcolor: 'grary.light' },
          '&:last-child td': {
            borderBottom: 'none',
          },
        }}
      >
        <TableCell>{supply.number}</TableCell>
        <TableCell>
          <DateTimeCell date={supply.date} />
        </TableCell>
        <TableCell>{supply.organization}</TableCell>
        <TableCell>{supply.contractor}</TableCell>
        <TableCell sx={{ textAlign: 'end' }}>{supply.supplyNumber}</TableCell>
        <TableCell sx={{ textAlign: 'end' }}>{supply.quantity}</TableCell>
        <TableCell sx={{ textAlign: 'center', py: '12px !important' }}>
          <StatusBadge
            text={supply.statusText}
            variant={supply.status === 'accepted' ? 'success' : 'error'}
          />
        </TableCell>
        <TableCell sx={{ py: '6px !important' }}>
          {supply.receptionDate ? (
            <Box>
              <DateTimeCell
                date={supply.receptionDate}
                color='text.secondary'
                variant='caption'
              />
              {supply.deliveryTime && (
                <Typography
                  component={'p'}
                  variant='caption'
                  sx={{
                    color: 'text.primary',
                    mt: '2px',
                  }}
                >
                  Время доставки: {supply.deliveryTime}
                </Typography>
              )}
            </Box>
          ) : null}
        </TableCell>
        <TableCell sx={{ textAlign: 'end' }}>
          {formatNumber(supply.amount)}
        </TableCell>
        <TableCell>
          <Typography
            component={'span'}
            variant='caption'
            sx={{
              mt: 0,
            }}
          >
            {supply.comment}
          </Typography>
        </TableCell>
      </TableRow>
    ))}
  </>
);
