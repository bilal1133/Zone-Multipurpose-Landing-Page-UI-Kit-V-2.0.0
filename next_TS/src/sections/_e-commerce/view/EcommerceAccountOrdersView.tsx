import { useState } from 'react';
// @mui
import { DatePicker } from '@mui/x-date-pickers';
import {
  Box,
  Tab,
  Tabs,
  Table,
  Stack,
  Switch,
  TableRow,
  TableBody,
  TableCell,
  TextField,
  Typography,
  TableContainer,
  InputAdornment,
  TablePagination,
  FormControlLabel,
} from '@mui/material';
// _mock
import { _productsTable } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
//
import { EcommerceAccountLayout } from '../layout';
import {
  stableSort,
  getComparator,
  EcommerceAccountOrdersTableRow,
  EcommerceAccountOrdersTableHead,
  EcommerceAccountOrdersTableToolbar,
} from '../account/orders';

// ----------------------------------------------------------------------

const TABS = ['All Orders', 'Completed', 'To Process', 'Cancelled', 'Return & Refund'];

export const TABLE_HEAD = [
  { id: 'orderId', label: 'Order ID' },
  { id: 'item', label: 'Item' },
  { id: 'deliveryDate', label: 'Delivery date', width: 160 },
  { id: 'price', label: 'Price', width: 100 },
  { id: 'status', label: 'Status', width: 100 },
  { id: '' },
];

// ----------------------------------------------------------------------

export default function EcommerceAccountOrdersPage() {
  const [tab, setTab] = useState('All Orders');

  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const [orderBy, setOrderBy] = useState('orderId');

  const [selected, setSelected] = useState<string[]>([]);

  const [page, setPage] = useState(0);

  const [dense, setDense] = useState(false);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  const handleSort = (id: string) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllRows = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = _productsTable.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleSelectRow = (id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - _productsTable.length) : 0;

  return (
    <EcommerceAccountLayout>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Orders
      </Typography>

      <Tabs
        value={tab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleChangeTab}
      >
        {TABS.map((category) => (
          <Tab key={category} value={category} label={category} />
        ))}
      </Tabs>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mt: 5, mb: 3 }}>
        <TextField
          fullWidth
          hiddenLabel
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="carbon:search" width={24} sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
        <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} alignItems="center">
          <DatePicker label="Start Date" sx={{ width: 1, minWidth: 180 }} />
          <DatePicker label="End Date" sx={{ width: 1, minWidth: 180 }} />
        </Stack>
      </Stack>

      <TableContainer
        sx={{
          overflow: 'unset',
          '& .MuiTableCell-head': {
            color: 'text.primary',
          },
          '& .MuiTableCell-root': {
            bgcolor: 'background.default',
            borderBottomColor: (theme) => theme.palette.divider,
          },
        }}
      >
        <EcommerceAccountOrdersTableToolbar
          rowCount={_productsTable.length}
          numSelected={selected.length}
          onSelectAllRows={handleSelectAllRows}
        />

        <Scrollbar>
          <Table
            sx={{
              minWidth: 720,
            }}
            size={dense ? 'small' : 'medium'}
          >
            <EcommerceAccountOrdersTableHead
              order={order}
              orderBy={orderBy}
              onSort={handleSort}
              headCells={TABLE_HEAD}
              rowCount={_productsTable.length}
              numSelected={selected.length}
              onSelectAllRows={handleSelectAllRows}
            />

            <TableBody>
              {stableSort(_productsTable, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <EcommerceAccountOrdersTableRow
                    key={row.id}
                    row={row}
                    selected={selected.includes(row.id)}
                    onSelectRow={() => handleSelectRow(row.id)}
                  />
                ))}

              {emptyRows > 0 && (
                <TableRow
                  sx={{
                    height: (dense ? 36 : 57) * emptyRows,
                  }}
                >
                  <TableCell colSpan={9} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>

      <Box sx={{ position: 'relative' }}>
        <TablePagination
          page={page}
          component="div"
          count={_productsTable.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
          sx={{
            pl: 2,
            py: 1.5,
            top: 0,
            position: {
              sm: 'absolute',
            },
          }}
        />
      </Box>
    </EcommerceAccountLayout>
  );
}
