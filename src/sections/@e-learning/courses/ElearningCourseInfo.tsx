// icons
import documentIcon from '@iconify/icons-carbon/document';
import dataAccessor from '@iconify/icons-carbon/data-accessor';
import documentDownload from '@iconify/icons-carbon/document-download';
import devicesIcon from '@iconify/icons-carbon/devices';
import certificateIcon from '@iconify/icons-carbon/certificate';
// @mui
import { Stack, Typography, Card, Box, Button } from '@mui/material';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// @types
import { CourseProps } from '../../../@types/e-learning';
// components
import { TextIconLabel, Iconify } from '../../../components';

// ----------------------------------------------------------------------

type Props = {
  course: CourseProps;
};

export default function ElearningCourseInfo({ course }: Props) {
  const { price, priceSale, lessons, resources } = course;

  return (
    <Card sx={{ p: 3, borderRadius: 2 }}>
      <Stack spacing={3}>
        <Stack direction="row" sx={{ typography: 'h3' }}>
          {priceSale > 0 && (
            <Box
              component="span"
              sx={{
                typography: 'h4',
                color: 'text.disabled',
                textDecoration: 'line-through',
                mr: 1,
              }}
            >
              {fCurrency(priceSale)}
            </Box>
          )}
          {fCurrency(price)}
        </Stack>

        <Stack spacing={2}>
          <Typography>This course includes:</Typography>
          <TextIconLabel
            icon={<Iconify icon={documentIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
            value={
              <>
                <Box component="strong" sx={{ mr: 0.5 }}>
                  {lessons?.length}
                </Box>
                Lessons
              </>
            }
          />
          <TextIconLabel
            icon={<Iconify icon={documentDownload} sx={{ width: 20, height: 20, mr: 1 }} />}
            value={
              <>
                <Box component="strong" sx={{ mr: 0.5 }}>
                  {resources}
                </Box>
                Downloadable resources
              </>
            }
          />
          <TextIconLabel
            icon={<Iconify icon={dataAccessor} sx={{ width: 20, height: 20, mr: 1 }} />}
            value="Full lifetime access"
          />
          <TextIconLabel
            icon={<Iconify icon={devicesIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
            value="Access on desktops, tablets, mobile "
          />
          <TextIconLabel
            icon={<Iconify icon={certificateIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
            value="Certificate of completion"
          />
        </Stack>

        <Button variant="contained" size="large">
          Enrol Now
        </Button>
      </Stack>
    </Card>
  );
}
