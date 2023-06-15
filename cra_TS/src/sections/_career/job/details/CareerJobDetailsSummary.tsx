// @mui
import { Typography, Stack, Chip, Box } from '@mui/material';
// types
import { IJobProps } from 'src/types/job';
// components
import Iconify from 'src/components/iconify';
import Markdown from 'src/components/markdown';
//
import ContactMap from '../../../contact/map';

// ----------------------------------------------------------------------

type Props = {
  job: IJobProps;
};

export default function CareerJobDetailsSummary({ job }: Props) {
  const { skills, otherBenefits, locationMap, content } = job;

  return (
    <Stack spacing={5}>
      <Markdown content={content} />

      {/* -- Skills -- */}
      <div>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Job Skills
        </Typography>

        <Stack direction="row" flexWrap="wrap">
          {skills.map((skill) => (
            <Chip key={skill} label={skill} sx={{ m: 0.5 }} onClick={() => {}} />
          ))}
        </Stack>
      </div>

      {/* -- Other Benefits -- */}
      <div>
        <Typography variant="h5" paragraph>
          Other Benefits
        </Typography>
        <Box
          sx={{
            rowGap: 2,
            columnGap: 3,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {otherBenefits.map((benefit) => (
            <Stack key={benefit} direction="row" alignItems="center" sx={{ typography: 'body2' }}>
              <Iconify
                icon={
                  (benefit === 'Free parking' && 'carbon:car-front') ||
                  (benefit === 'Bonus commission' && 'carbon:money') ||
                  (benefit === 'Travel' && 'carbon:airport-01') ||
                  (benefit === 'Training' && 'carbon:group-presentation') ||
                  (benefit === 'Device support' && 'carbon:devices') ||
                  (benefit === 'Health care' && 'carbon:person-favorite') ||
                  'carbon:direct-link'
                }
                width={24}
                sx={{ color: 'primary.main', mr: 1.5 }}
              />
              {benefit}
            </Stack>
          ))}
        </Box>
      </div>

      {/* -- Location Map --- */}
      <div>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Location
        </Typography>

        <ContactMap offices={locationMap} sx={{ borderRadius: 2 }} />
      </div>
    </Stack>
  );
}
