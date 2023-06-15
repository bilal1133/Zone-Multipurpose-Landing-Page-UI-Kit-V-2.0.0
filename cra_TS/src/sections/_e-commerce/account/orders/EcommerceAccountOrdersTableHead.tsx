// @mui
import { Box, TableRow, Checkbox, TableCell, TableHead, TableSortLabel } from '@mui/material';
//
import { visuallyHidden } from './utils';

// ----------------------------------------------------------------------

interface Prop {
  order: 'asc' | 'desc';
  orderBy: string;
  rowCount: number;
  headCells: any[];
  numSelected: number;
  onSort: (id: string) => void;
  onSelectAllRows: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EcommerceAccountOrdersTableHead({
  order,
  onSort,
  orderBy,
  rowCount,
  headCells,
  numSelected,
  onSelectAllRows,
}: Prop) {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllRows}
          />
        </TableCell>

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'normal' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ width: headCell.width, minWidth: headCell.minWidth }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={() => onSort(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
