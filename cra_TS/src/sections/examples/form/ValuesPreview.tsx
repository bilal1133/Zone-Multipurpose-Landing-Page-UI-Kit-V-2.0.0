// form
import { useFormContext, FieldValues } from 'react-hook-form';
// @mui
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Portal, Divider } from '@mui/material';
// utils
import { bgBlur } from 'src/utils/cssStyles';
// hooks
import useResponsive from 'src/hooks/useResponsive';

// ----------------------------------------------------------------------

export default function ValuesPreview() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const {
    watch,
    formState: { errors },
  } = useFormContext();

  const values = watch();

  if (!isDesktop) {
    return null;
  }

  return (
    <Portal>
      <Stack
        sx={{
          p: 3,
          top: 0,
          right: 0,
          height: 1,
          width: 280,
          position: 'fixed',
          overflowX: 'auto',
          color: 'common.white',
          zIndex: theme.zIndex.drawer,
          ...bgBlur({ color: theme.palette.grey[900] }),
        }}
      >
        <Typography variant="overline" sx={{ mb: 2, color: 'success.light' }}>
          Values
        </Typography>

        {Object.keys(values).map((value) => (
          <Stack key={value} sx={{ typography: 'caption', mt: 0.5 }}>
            <Typography variant="body2" sx={{ color: 'warning.main' }}>
              {value} :
            </Typography>

            {parseValue(values, value)}
          </Stack>
        ))}

        <Divider sx={{ my: 2 }} />

        <Typography variant="overline" sx={{ mb: 2, color: 'error.light' }}>
          Errors
        </Typography>

        <Typography variant="caption" sx={{ color: 'error.light' }}>
          {JSON.stringify(Object.keys(errors), null, 2)}
        </Typography>
      </Stack>
    </Portal>
  );
}

// ----------------------------------------------------------------------

function parseValue(values: FieldValues, value: string) {
  return JSON.stringify(values[value]) || '---';
}
