import React from 'react';
import { TableCell, TableRow, Box } from '@mui/material';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

export interface ColumnDef {
  id: string;
  label: string;
  width?: number;
  minWidth?: number;
  align?: 'left' | 'center' | 'right';
}

interface TableHeaderProps {
  columns: ColumnDef[];
}

const headerCellSx = {
  py: 1.5,
  px: 2.5,
  fontSize: '12px',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  color: 'text.secondary',
  whiteSpace: 'nowrap',
  borderBottom: 'none',
  bgcolor: 'blueLight.main',
};

export const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => (
  <TableRow>
    {columns.map((col) => (
      <TableCell
        key={col.id}
        align={col.align || 'left'}
        sx={{
          ...headerCellSx,
          width: col.width,
          minWidth: col.minWidth,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {col.label}
          <FilterListOutlinedIcon sx={{ ml: 0.5, cursor: 'pointer' }} />
        </Box>
      </TableCell>
    ))}
  </TableRow>
);
