import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { Box, SxProps, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';

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

const headerCellSx: SxProps = {
  textTransform: 'uppercase',
  color: 'text.secondary',
  whiteSpace: 'nowrap',
  bgcolor: 'blueLight.main',
  position: 'relative',

  '&:not(:last-child)::after': {
    content: '""',
    position: 'absolute',
    right: 0,
    top: '20%',
    bottom: '20%',
    width: '1px',
    bgcolor: 'divider',
  },
};

export const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => (
  <TableRow
    sx={{
      height: 60,
    }}
  >
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='overline'>{col.label}</Typography>
          <FilterListOutlinedIcon sx={{ cursor: 'pointer', fontSize: 18 }} />
        </Box>
      </TableCell>
    ))}
  </TableRow>
);
