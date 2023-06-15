// @mui
import { Stack, Typography, Card, Box, Button } from '@mui/material';
// utils
import { fCurrency } from 'src/utils/formatNumber';
// types
import { ICourseProps } from 'src/types/course';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  course: ICourseProps;
};

export default function ElearningCourseDetailsInfo({ course }: Props) {
  const { price, priceSale, lessons, resources } = course;

  return (
    <Card sx={{ p: 3, borderRadius: 2 }}>
      <Stack spacing={3}>
        <Stack direction="row" sx={{ typography: 'h3' }}>
          {priceSale > 0 && (
            <Box
              component="span"
              sx={{
                mr: 1,
                typography: 'h4',
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {fCurrency(priceSale)}
            </Box>
          )}
          {fCurrency(price)}
        </Stack>

        <Stack spacing={2}>
          <Typography>This course includes:</Typography>

          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:document" sx={{ mr: 1 }} />
            <Box component="strong" sx={{ mr: 0.5 }}>
              {lessons?.length}
            </Box>
            Lessons
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:document-download" sx={{ mr: 1 }} />
            <Box component="strong" sx={{ mr: 0.5 }}>
              {resources}
            </Box>
            Downloadable resources
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:data-accessor" sx={{ mr: 1 }} />
            Full lifetime access
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:devices" sx={{ mr: 1 }} />
            Access on desktops, tablets, mobile
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:certificate" sx={{ mr: 1 }} />
            Certificate of completion
          </Stack>
        </Stack>

        <Button variant="contained" size="large" color="inherit">
          Enrol Now
        </Button>
      </Stack>
    </Card>
  );
}
