import { useState, useEffect } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import {
  Stack,
  Button,
  Divider,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// _mock
import _mock, { _socials, _jobs } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
import LoadingScreen from 'src/components/loading-screen';
//
import Advertisement from '../../advertisement';
import NewsletterCareer from '../../newsletter/career';
import { CareerJobListSimilar } from '../job/list';
import {
  CareerJobDetailsHero,
  CareerJobDetailsInfo,
  CareerJobDetailsSummary,
  CareerJobDetailsCompanyInfo,
  CareerJobDetailsCompanySimilar,
} from '../job/details';

// ----------------------------------------------------------------------

const _mockJob = _jobs[0];

export default function CareerJobView() {
  const isMdUp = useResponsive('up', 'md');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    fakeLoading();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <CareerJobDetailsHero job={_mockJob} />

      <Container
        sx={{
          overflow: 'hidden',
          pt: { xs: 5, md: 10 },
          pb: 10,
        }}
      >
        <Grid container spacing={{ xs: 5, md: 8 }}>
          {!isMdUp && (
            <Grid xs={12} md={5} lg={4}>
              <CareerJobDetailsInfo job={_mockJob} />
            </Grid>
          )}

          <Grid xs={12} md={7} lg={8}>
            <CareerJobDetailsSummary job={_mockJob} />

            <Divider sx={{ my: 5 }} />

            <Stack direction="row" flexWrap="wrap" sx={{ mt: 5 }}>
              <Typography variant="subtitle2" sx={{ mt: 0.75, mr: 1.5 }}>
                Share:
              </Typography>

              <Stack direction="row" alignItems="center" flexWrap="wrap">
                {_socials.map((social) => (
                  <Button
                    key={social.value}
                    size="small"
                    variant="outlined"
                    startIcon={<Iconify icon={social.icon} />}
                    sx={{
                      m: 0.5,
                      flexShrink: 0,
                      color: social.color,
                      borderColor: social.color,
                      '&:hover': {
                        borderColor: social.color,
                        bgcolor: alpha(social.color, 0.08),
                      },
                    }}
                  >
                    {social.label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={5} lg={4}>
            <Stack spacing={5}>
              {isMdUp && <CareerJobDetailsInfo job={_mockJob} />}

              <CareerJobDetailsCompanyInfo job={_mockJob} />

              <CareerJobDetailsCompanySimilar jobs={_jobs.slice(-3)} />

              <Advertisement
                advertisement={{
                  title: 'Advertisement',
                  description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                  imageUrl: _mock.image.career(2),
                  path: '',
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <CareerJobListSimilar jobs={_jobs.slice(-3)} />

      <NewsletterCareer />
    </>
  );
}
