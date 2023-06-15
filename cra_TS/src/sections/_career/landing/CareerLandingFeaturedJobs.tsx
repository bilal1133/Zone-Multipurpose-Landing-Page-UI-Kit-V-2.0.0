import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Container, Stack, Button, Typography, Box, Unstable_Grid2 as Grid } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// types
import { IJobProps } from 'src/types/job';
// components
import Iconify from 'src/components/iconify';
//
import CareerJobItem from '../job/item/CareerJobItem';

// ----------------------------------------------------------------------

type Props = {
  jobs: IJobProps[];
};

export default function CareerLandingFeaturedJobs({ jobs }: Props) {
  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        sx={{
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Grid xs={12} md={4}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Featured Jobs
          </Typography>
        </Grid>

        <Grid xs={12} md={8}>
          <Typography variant="h3">
            Jobs available apply to Editorial Specialist, Account Manager, Human Resources
            Specialist and more!
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          columnGap: 4,
          display: 'grid',
          py: { xs: 8, md: 10 },
          rowGap: { xs: 4, md: 5 },
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

      <Stack alignItems="center">
        <Button
          component={RouterLink}
          to={paths.career.jobs}
          color="inherit"
          size="large"
          variant="outlined"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          View All Jobs
        </Button>
      </Stack>
    </Container>
  );
}
