import { useState, Dispatch, SetStateAction } from 'react';
// icons
import eventsIcon from '@iconify/icons-carbon/events';
import addAlt from '@iconify/icons-carbon/add-alt';
import subtractAlt from '@iconify/icons-carbon/subtract-alt';
// @mui
import { Box, Stack, Divider, Typography, Popover, InputAdornment, SxProps } from '@mui/material';
// components
import { Iconify } from '../../../components';
import { IconButtonAnimate } from '../../../components/animate';

//
import { InputStyle } from './TravelTourBarFilters';

// ----------------------------------------------------------------------

type Props = {
  sx?: SxProps;
  guests: {
    adults: number;
    children: number;
  };
  setGuests: Dispatch<
    SetStateAction<{
      adults: number;
      children: number;
    }>
  >;
};

export default function TravelTourFilterGuests({ guests, setGuests, sx }: Props) {
  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const totalGuests = guests.children + guests.adults;

  const handleIncrementGuests = (guest?: string) => {
    if (guest === 'children') {
      setGuests({
        ...guests,
        children: guests.children + 1,
      });
    } else {
      setGuests({
        ...guests,
        adults: guests.adults + 1,
      });
    }
  };

  const handleDecreaseGuests = (guest?: string) => {
    if (guest === 'children') {
      setGuests({
        ...guests,
        children: guests.children - 1,
      });
    } else {
      setGuests({
        ...guests,
        adults: guests.adults - 1,
      });
    }
  };

  return (
    <>
      <Box onClick={handleOpen} sx={{ width: 1, ...sx }}>
        <InputStyle
          value={totalGuests > 0 ? `${totalGuests} Guests` : ''}
          variant="filled"
          placeholder="Guests"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  icon={eventsIcon}
                  sx={{ width: 24, height: 24, mr: 1, color: 'text.disabled' }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Popover
        open={Boolean(open)}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        PaperProps={{ sx: { width: 360, p: 3 } }}
      >
        <Stack spacing={2.5} divider={<Divider sx={{ borderStyle: 'dashed' }} />}>
          <Input
            title="Adults"
            caption="Ages 13 or above"
            total={guests.adults}
            onDecrease={handleDecreaseGuests}
            onIncrement={handleIncrementGuests}
          />

          <Input
            title="Children"
            caption="Ages 2 - 12"
            total={guests.children}
            onDecrease={() => handleDecreaseGuests('children')}
            onIncrement={() => handleIncrementGuests('children')}
          />
        </Stack>
      </Popover>
    </>
  );
}

// ----------------------------------------------------------------------

type RowProps = {
  title: string;
  caption: string;
  total: number;
  onDecrease: VoidFunction;
  onIncrement: VoidFunction;
};

function Input({ title, caption, total, onDecrease, onIncrement }: RowProps) {
  return (
    <Stack direction="row">
      <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {caption}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: 100, typography: 'subtitle1' }}
      >
        <IconButtonAnimate
          disabled={total < 1}
          onClick={onDecrease}
          sx={{ p: 0, '&.Mui-disabled': { opacity: 0.72 } }}
        >
          <Iconify icon={subtractAlt} />
        </IconButtonAnimate>
        {total}
        <IconButtonAnimate onClick={onIncrement} sx={{ p: 0 }}>
          <Iconify icon={addAlt} />
        </IconButtonAnimate>
      </Stack>
    </Stack>
  );
}
