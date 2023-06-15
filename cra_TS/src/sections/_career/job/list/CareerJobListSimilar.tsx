import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Container, Stack, Button, Typography } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// routes
import { paths } from 'src/routes/paths';
// types
import { IJobProps } from 'src/types/job';
// components
import Iconify from 'src/components/iconify';
//
import { CareerJobItem } from '../item';

// ----------------------------------------------------------------------

type Props = {
  jobs: IJobProps[];
};

export default function CareerJobListSimilar({ jobs }: Props) {
  const isMdUp = useResponsive('up', 'md');

  const viewAllBtn = (
    <Button
      component={RouterLink}
      to={paths.career.jobs}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      View All Jobs
    </Button>
  );

  return (
    <Box sx={{ bgcolor: 'background.neutral', py: { xs: 10, md: 15 } }}>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h3">Similar Jobs</Typography>

          {isMdUp && viewAllBtn}
        </Stack>

        <Box
          sx={{
            gap: 4,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {jobs.map((job) => (
            <CareerJobItem key={job.id} job={job} />
          ))}
        </Box>

        {!isMdUp && (
          <Stack alignItems="center" sx={{ mt: 8 }}>
            {viewAllBtn}
          </Stack>
        )}
      </Container>
    </Box>
  );
}
