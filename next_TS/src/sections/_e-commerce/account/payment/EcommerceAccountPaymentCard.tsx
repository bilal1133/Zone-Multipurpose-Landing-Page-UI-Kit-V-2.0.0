import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Stack, Divider, Popover, MenuItem, Typography, IconButton } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import Label from 'src/components/label';

// ----------------------------------------------------------------------

type Props = {
  card: {
    value: string;
    label: string;
    cardNumber: string;
    cardHolder: string;
    isPrimary: boolean;
    expirationDate: string;
  };
};

export default function EcommerceAccountPaymentCard({ card }: Props) {
  const { value, label, cardNumber, cardHolder, expirationDate, isPrimary } = card;

  const [open, setOpen] = useState<HTMLButtonElement | null>(null);

  const [showNumber, setShowNumber] = useState(false);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleShowNumber = () => {
    setShowNumber(!showNumber);
  };

  return (
    <>
      <Stack
        spacing={3}
        sx={{
          p: 3,
          pr: 1,
          borderRadius: 2,
          border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        }}
      >
        <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle1' }}>
          <Stack direction="row" alignItems="center" flexGrow={1}>
            <Box component="span">{label}</Box>

            {isPrimary && (
              <Label color="info" startIcon={<Iconify icon="carbon:star-filled" />} sx={{ ml: 1 }}>
                Primary
              </Label>
            )}
          </Stack>

          <Iconify
            icon={
              (value === 'visa' && 'logos:visa') ||
              (value === 'mastercard' && 'logos:mastercard') ||
              'logos:paypal'
            }
            width={24}
          />

          <IconButton onClick={handleOpen}>
            <Iconify icon="carbon:overflow-menu-vertical" />
          </IconButton>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center">
          <Typography variant="h6">
            {showNumber ? cardNumber : `**** **** **** ${cardNumber.slice(-4)}`}
          </Typography>
          <IconButton onClick={handleShowNumber}>
            <Iconify icon={showNumber ? 'carbon:view' : 'carbon:view-off'} />
          </IconButton>
        </Stack>

        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)">
          <Stack spacing={0.5}>
            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
              Card Holder
            </Typography>
            <Typography variant="subtitle2"> {cardHolder} </Typography>
          </Stack>
          <Stack spacing={0.5}>
            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
              Expiry Date
            </Typography>
            <Typography variant="subtitle2"> {expirationDate} </Typography>
          </Stack>
        </Box>
      </Stack>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { p: 1 },
        }}
      >
        <MenuItem disabled={isPrimary} onClick={handleClose}>
          <Iconify icon="carbon:star-filled" sx={{ mr: 1 }} /> Set primary payment
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Iconify icon="carbon:edit" sx={{ mr: 1 }} /> Edit
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed', mt: 0.5 }} />

        <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
          <Iconify icon="carbon:trash-can" sx={{ mr: 1 }} /> Delete
        </MenuItem>
      </Popover>
    </>
  );
}
