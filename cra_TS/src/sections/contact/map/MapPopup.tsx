import { Typography, Paper, Box, Stack, IconButton } from '@mui/material';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
// types
import { IOfficeMapProps } from 'src/types/contact';

// ----------------------------------------------------------------------

type Props = {
  lat: number;
  lng: number;
  office: IOfficeMapProps;
  onClose: VoidFunction;
};

export default function MapPopup({ office, onClose, lat, lng }: Props) {
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    onClose();
    console.log('lat-lng', lat, lng);
  };

  return (
    <Paper
      sx={{ width: 220, overflow: 'hidden', borderRadius: 1.5, mt: 2, ml: 2, position: 'relative' }}
    >
      <Box sx={{ position: 'absolute', right: 4, top: 4, zIndex: 9 }}>
        <IconButton size="small" onClick={handleClose}>
          <Iconify
            icon="carbon:close-filled"
            sx={{
              opacity: 0.48,
              color: 'common.white',
              '&:hover': { opacity: 1 },
              ...(!office.photo && {
                color: 'text.disabled',
              }),
            }}
          />
        </IconButton>
      </Box>

      {office.photo && <Image alt="photo" src={office.photo} ratio="4/3" />}

      <Stack
        spacing={1}
        sx={{
          p: 1.5,
          wordBreak: 'break-all',
          ...(!office.photo && {
            p: 2,
            pr: 3.5,
          }),
        }}
      >
        {office.country && <Typography variant="subtitle2">{office.country}</Typography>}

        {office.address && (
          <Typography component="p" variant="caption">
            {office.address}
          </Typography>
        )}

        {office.email && (
          <Stack direction="row" alignItems="flex-start" sx={{ typography: 'caption' }}>
            <Iconify icon="carbon:email" width={18} sx={{ mr: 0.5 }} />
            {office.email}
          </Stack>
        )}

        {office.phoneNumber && (
          <Stack direction="row" alignItems="flex-start" sx={{ typography: 'caption' }}>
            <Iconify icon="carbon:phone" width={18} sx={{ mr: 0.5 }} />
            {office.phoneNumber}
          </Stack>
        )}
      </Stack>
    </Paper>
  );
}
