import { ReactElement } from 'react';
// icons
import cubeIcon from '@iconify/icons-carbon/cube';
import eventsIcon from '@iconify/icons-carbon/events';
import packageIcon from '@iconify/icons-carbon/package';
import receiptIcon from '@iconify/icons-carbon/receipt';
import calendarIcon from '@iconify/icons-carbon/calendar';
import purchaseIcon from '@iconify/icons-carbon/purchase';
import chevronLeft from '@iconify/icons-carbon/chevron-left';
// next
import NextLink from 'next/link';
// @mui
import { Typography, Stack, Avatar, Divider, Button } from '@mui/material';
// @utils
import { fDate } from '../../../utils/formatTime';
import { fCurrency } from '../../../utils/formatNumber';
// @types
import { TourProps } from '../../../@types/travel';
// components
import { RatingLabel, TextIconLabel, Iconify } from '../../../components';

// ----------------------------------------------------------------------

type Props = {
  tour: TourProps;
};

export default function TravelCheckOutCompleteInfo({ tour }: Props) {
  const { slug, ratings, reviews, price, tourGuide } = tour;

  return (
    <Stack spacing={5}>
      <Typography variant="h2">Completed 🎉</Typography>

      <Stack
        spacing={2}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ md: 'space-between' }}
      >
        <Stack spacing={2}>
          <Typography variant="h5">{slug}</Typography>
          <RatingLabel ratings={ratings} reviews={reviews} />
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Avatar src={tourGuide?.picture} />
          <div>
            <Typography variant="body3" sx={{ color: 'text.disabled' }}>
              Tour guide by
            </Typography>
            <Typography variant="subtitle2">{tourGuide?.name}</Typography>
          </div>
        </Stack>
      </Stack>

      <Stack
        spacing={3}
        sx={{
          p: 5,
          borderRadius: 2,
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        <Typography variant="h5">Booking Details</Typography>

        <LineItem
          icon={<Iconify icon={calendarIcon} />}
          label="Departure day"
          value={fDate(new Date())}
        />
        <LineItem icon={<Iconify icon={eventsIcon} />} label="Guests" value="2 guest" />
        <Divider sx={{ borderStyle: 'dashed' }} />
        <LineItem icon={<Iconify icon={cubeIcon} />} label="Booking code" value="KU_H8SDM" />
        <LineItem
          icon={<Iconify icon={calendarIcon} />}
          label="Booking day"
          value={fDate(new Date())}
        />
        <LineItem icon={<Iconify icon={receiptIcon} />} label="Total" value={fCurrency(price)} />
        <LineItem icon={<Iconify icon={purchaseIcon} />} label="Payment method" value="Paypal" />
      </Stack>

      <Stack spacing={2.5} direction={{ xs: 'column', md: 'row' }} justifyContent="center">
        <NextLink href="/" passHref>
          <Button
            variant="outlined"
            size="large"
            color="inherit"
            startIcon={<Iconify icon={chevronLeft} />}
          >
            Back Home
          </Button>
        </NextLink>
        <Button variant="contained" size="large" startIcon={<Iconify icon={packageIcon} />}>
          Download Invoice
        </Button>
      </Stack>
    </Stack>
  );
}

// ----------------------------------------------------------------------

type LineItemProps = {
  icon: ReactElement;
  label: string;
  value: any;
};

function LineItem({ icon, label, value }: LineItemProps) {
  return (
    <TextIconLabel
      icon={icon}
      value={
        <>
          {label}
          <Typography
            variant="subtitle2"
            sx={{ color: 'text.primary', flexGrow: 1, textAlign: 'right' }}
          >
            {value}
          </Typography>
        </>
      }
      sx={{
        color: 'text.disabled',
        '& svg': { mr: 1, width: 24, height: 24 },
      }}
    />
  );
}
