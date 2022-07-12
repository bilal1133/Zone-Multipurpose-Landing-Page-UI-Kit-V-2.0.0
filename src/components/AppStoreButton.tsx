// @mui
import { alpha, styled } from '@mui/material/styles';
import { Stack, Button, Box, Typography, ButtonProps, StackProps } from '@mui/material';

// ----------------------------------------------------------------------

const ButtonStyle = styled((props: ButtonProps) => <Button color="inherit" {...props} />)(
  ({ theme }) => ({
    flexShrink: 0,
    color: theme.palette.common.white,
    padding: '5px 12px',
    border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
    background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
    '& .MuiButton-startIcon': {
      marginLeft: 0,
    },
  })
);

// ----------------------------------------------------------------------

export default function AppStoreButton({ ...other }: StackProps) {
  return (
    <Stack direction="row" spacing={2} {...other}>
      <ButtonStyle
        startIcon={
          <Box
            component="img"
            src="https://zone-assets-api.vercel.app/assets/icons/app-store/ic_app_store.svg"
            sx={{ width: 28, height: 28 }}
          />
        }
      >
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download on the
          </Typography>
          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Apple Store
          </Typography>
        </Stack>
      </ButtonStyle>

      <ButtonStyle
        color="inherit"
        startIcon={
          <Box
            component="img"
            src="https://zone-assets-api.vercel.app/assets/icons/app-store/ic_google_play.svg"
            sx={{ width: 28, height: 28 }}
          />
        }
      >
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download from
          </Typography>
          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Google Play
          </Typography>
        </Stack>
      </ButtonStyle>
    </Stack>
  );
}
