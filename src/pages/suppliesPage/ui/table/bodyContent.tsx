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

const bodyCellSx = {
  py: 2,
  px: 2.5,
  fontSize: '13px',
  color: 'text.primary',
  verticalAlign: 'top',
  borderBottom: '1px solid',
  borderColor: 'divider',
};

export const TableBodyContent: React.FC<TableBodyContentProps> = ({ rows }) => (
  <>
    {rows.map((supply) => (
      <TableRow
        key={supply.id}
        hover
        sx={{
          height: 50,
          '&:hover': { bgcolor: '#FAFAFA' },
          '& td': bodyCellSx,
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
        <TableCell>{supply.supplyNumber}</TableCell>
        <TableCell align='center'>{supply.quantity}</TableCell>
        <TableCell>
          <StatusBadge
            text={supply.statusText}
            variant={supply.status === 'accepted' ? 'success' : 'error'}
          />
        </TableCell>
        <TableCell>
          {supply.receptionDate ? (
            <Box>
              <DateTimeCell date={supply.receptionDate} />
              {supply.deliveryTime && (
                <Typography
                  component='div'
                  sx={{
                    fontSize: '13px',
                    color: 'text.primary',
                    mt: 0.25,
                    lineHeight: 1.4,
                  }}
                >
                  Время доставки: {supply.deliveryTime}
                </Typography>
              )}
            </Box>
          ) : null}
        </TableCell>
        <TableCell>{formatNumber(supply.amount)}</TableCell>
        <TableCell>{supply.comment}</TableCell>
      </TableRow>
    ))}
  </>
);
