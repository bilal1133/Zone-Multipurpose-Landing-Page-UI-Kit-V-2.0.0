// icon
import rotate360 from '@iconify/icons-carbon/rotate-360';
// next
import { useRouter } from 'next/router';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Stack, Button } from '@mui/material';
//
import Image from './Image';
import Iconify from './Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
}));

// ----------------------------------------------------------------------

type Props = {
  title?: string;
  description?: string;
};

export default function ErrorScreen({ title, description, ...other }: Props) {
  const router = useRouter();

  const handleReload = () => {
    router.reload();
  };

  return (
    <RootStyle {...other}>
      <Stack spacing={5} alignItems="center">
        <Image
          alt="500"
          src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_500.svg"
          sx={{ maxWidth: 240 }}
        />

        <Stack spacing={2}>
          <Typography variant="h3"> {title || 'Failed To Load '}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {description || 'Unable to download data please try again'}
          </Typography>
        </Stack>
        <Button
          variant="outlined"
          size="large"
          color="inherit"
          startIcon={<Iconify icon={rotate360} sx={{ width: 20, height: 20 }} />}
          onClick={handleReload}
        >
          Reload
        </Button>
      </Stack>
    </RootStyle>
  );
}
