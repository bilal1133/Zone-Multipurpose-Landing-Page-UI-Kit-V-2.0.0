import { useState } from 'react';
// @mui
import {
  Box,
  Link,
  Stack,
  Avatar,
  Popover,
  Checkbox,
  MenuItem,
  Typography,
  IconButton,
} from '@mui/material';
// utils
import { fShortenNumber } from 'src/utils/formatNumber';
// types
import { ITourProps } from 'src/types/tour';
// _mock
import { _socials } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  tour: ITourProps;
};

export default function TravelTourDetailsHeader({ tour }: Props) {
  const { slug, ratings, reviews, location, favorited, tourGuide } = tour;

  const [favorite, setFavorite] = useState(favorited);

  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleChangeFavorite = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  };

  return (
    <>
      <Stack
        spacing={3}
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          mb: 3,
        }}
      >
        <Typography variant="h3" component="h1" sx={{ flexGrow: 1, pr: { md: 10 } }}>
          {slug}
        </Typography>

        <Stack direction="row" alignItems="center" flexShrink={0}>
          <IconButton onClick={handleOpen} color={open ? 'primary' : 'default'}>
            <Iconify icon="carbon:share" />
          </IconButton>

          <Checkbox
            color="error"
            checked={favorite}
            onChange={handleChangeFavorite}
            icon={<Iconify icon="carbon:favorite" />}
            checkedIcon={<Iconify icon="carbon:favorite-filled" />}
          />
        </Stack>
      </Stack>

      <Stack spacing={3} direction={{ xs: 'column', md: 'row' }}>
        <Stack spacing={0.5} direction="row" alignItems="center">
          <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />

          <Box sx={{ typography: 'h6' }}>
            {Number.isInteger(ratings) ? `${ratings}.0` : ratings}
          </Box>

          <Link variant="body2" sx={{ color: 'text.secondary' }}>
            ({fShortenNumber(reviews)} reviews)
          </Link>
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
          <Iconify icon="carbon:location" sx={{ mr: 0.5 }} /> {location}
        </Stack>

        <Stack direction="row" alignItems="center">
          <Avatar src={tourGuide?.picture} sx={{ width: 24, height: 24 }} />

          <Typography variant="body2" sx={{ color: 'text.secondary', mx: 0.5 }}>
            Tour guide by
          </Typography>

          <Link variant="subtitle2" color="inherit">
            {tourGuide?.name}
          </Link>
        </Stack>
      </Stack>

      <Popover
        open={!!open}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        PaperProps={{
          sx: { width: 220, p: 1 },
        }}
      >
        {_socials.map((social) => (
          <MenuItem key={social.value} onClick={handleClose} sx={{ typography: 'body2' }}>
            <Iconify icon={social.icon} width={24} sx={{ mr: 1, color: social.color }} />
            Share via {social.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
