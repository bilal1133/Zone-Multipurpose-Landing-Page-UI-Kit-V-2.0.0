import { add } from 'date-fns';
import { useState } from 'react';
// @mui
import {
  Box,
  Tab,
  Tabs,
  Button,
  Divider,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';
// _mock
import _mock from 'src/_mock';
//
import { EcommerceAccountLayout } from '../layout';
import { EcommerceAccountVoucherItem } from '../account/vouchers';

// ----------------------------------------------------------------------

const TABS = ['All Vouchers', 'Latest', 'Popular', 'Expiring'];

const VOUCHERS = [
  {
    id: _mock.id(1),
    type: 'shipping',
    label: 'Shipping',
    title: '6% off',
    description: 'Min. Spend $0',
    dueOn: add(new Date(), { days: 1 }),
  },
  {
    id: _mock.id(2),
    type: 'shipping',
    label: 'Shipping',
    title: '6% off',
    description: 'Min. Spend $0',
    dueOn: add(new Date(), { days: 2 }),
  },
  {
    id: _mock.id(3),
    type: 'all',
    label: 'All Categories',
    title: '6% off',
    description: 'Min. Spend $0 Capped at $10',
    dueOn: add(new Date(), { days: 1 }),
  },
  {
    id: _mock.id(4),
    type: 'shipping',
    label: 'Shipping',
    title: '6% off',
    description: 'Min. Spend $0 Capped at $10',
    dueOn: add(new Date(), { days: 2 }),
  },
  {
    id: _mock.id(5),
    type: 'category',
    label: 'Men Clothes',
    title: 'Up to 50%',
    description: 'Min. Spend $0 Capped at $10',
    dueOn: add(new Date(), { days: 3 }),
  },
  {
    id: _mock.id(6),
    type: 'shipping',
    label: 'Shipping',
    title: '6% off',
    description: 'Min. Spend $0',
    dueOn: add(new Date(), { days: 4 }),
  },
  {
    id: _mock.id(7),
    type: 'shipping',
    label: 'Shipping',
    title: '6% off',
    description: 'Min. Spend $0',
    dueOn: add(new Date(), { days: 5 }),
  },
];

// ----------------------------------------------------------------------

export default function EcommerceAccountVouchersView() {
  const [tab, setTab] = useState('All Vouchers');

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <EcommerceAccountLayout>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Vouchers
      </Typography>

      <TextField
        fullWidth
        label="Enter voucher code"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button size="large" variant="contained" color="inherit" sx={{ mr: -1 }}>
                Redeem
              </Button>
            </InputAdornment>
          ),
        }}
      />

      <Divider sx={{ my: 3, borderStyle: 'dashed' }} />

      <Tabs
        value={tab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleChangeTab}
        sx={{ mb: 3 }}
      >
        {TABS.map((category) => (
          <Tab key={category} value={category} label={category} />
        ))}
      </Tabs>

      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
      >
        {VOUCHERS.map((voucher) => (
          <EcommerceAccountVoucherItem key={voucher.id} voucher={voucher} />
        ))}
      </Box>
    </EcommerceAccountLayout>
  );
}
