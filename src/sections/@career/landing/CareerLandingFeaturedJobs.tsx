// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// next
import NextLink from 'next/link';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Grid, Container, Stack, Button, Typography, Box } from '@mui/material';
// routes
import Routes from '../../../routes';
// theme
import cssStyles from '../../../utils/cssStyles';
// @types
import { JobProps } from '../../../@types/career';
// components
import { Iconify } from '../../../components';
//
import CareerJobItem from '../jobs/CareerJobItem';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  ...cssStyles(theme).bgGradient({
    startColor: alpha(theme.palette.grey[500], 0),
    endColor: alpha(theme.palette.grey[500], 0.12),
  }),
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  jobs: JobProps[];
};

export default function CareerLandingFeaturedJobs({ jobs }: Props) {
  return (
    <RootStyle>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          sx={{
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Grid item xs={12} md={4}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Featured Jobs
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h3">
              Jobs available apply to Editorial Specialist, Account Manager, Human Resources
              Specialist and more!
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            py: { xs: 8, md: 10 },
            display: 'grid',
            rowGap: { xs: 4, md: 5 },
            columnGap: 4,
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
          <NextLink href={Routes.career.jobs} passHref>
            <Button
              color="inherit"
              size="large"
              variant="outlined"
              endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
            >
              View All Jobs
            </Button>
          </NextLink>
        </Stack>
      </Container>
    </RootStyle>
  );
}
