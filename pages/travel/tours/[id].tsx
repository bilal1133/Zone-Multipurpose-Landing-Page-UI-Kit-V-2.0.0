import { useState, ReactElement } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { styled } from '@mui/material/styles';
import {
  Grid,
  Stack,
  Divider,
  Collapse,
  Container,
  Typography,
  SelectChangeEvent,
} from '@mui/material';
// routes
import Routes from '../../../src/routes';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../src/config';
// hooks
import { useRequest } from '../../../src/hooks';
// _data
import { _reviews } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import {
  Page,
  ErrorScreen,
  LoadingScreen,
  Breadcrumbs,
  SocialsButton,
} from '../../../src/components';
// sections
import { NewsletterTravel } from '../../../src/sections/newsletter';
import {
  ReviewForm,
  ReviewTravelTourList,
  ReviewTravelToolbar,
} from '../../../src/sections/reviews';
import {
  TravelTourHeader,
  TravelTourGallery,
  TravelTourDetails,
  TravelTourSimilar,
  TravelTourGuideInfo,
  TravelTourReserveForm,
} from '../../../src/sections/@travel';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function TravelTourPage() {
  const router = useRouter();

  const [sort, setSort] = useState('latest');

  const [openReview, setOpenReview] = useState(false);

  const handleChangeSort = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  const { id } = router.query;

  const { data: tours = [] } = useRequest('/api/travel/tours');

  const {
    data: tour,
    error: tourError,
    isLoading: tourLoading,
  } = useRequest(id ? `/api/travel/tours/${id}` : '');

  if (tourError) {
    return <ErrorScreen />;
  }

  if (tourLoading) {
    return <LoadingScreen />;
  }

  return (
    <Page title={`${tour.slug} - Travel`}>
      <RootStyle>
        <Container>
          <Breadcrumbs
            sx={{ mt: 5 }}
            links={[
              { name: 'Home', href: '/' },
              { name: 'Tours', href: Routes.travel.tours },
              { name: tour.slug },
            ]}
          />

          <TravelTourGallery gallery={tour.gallery} />

          <Grid container spacing={8} direction="row-reverse">
            <Grid item xs={12} md={5} lg={4}>
              <TravelTourReserveForm tour={tour} />
            </Grid>

            <Grid item xs={12} md={7} lg={8}>
              <TravelTourHeader tour={tour} />

              <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

              <TravelTourDetails tour={tour} />

              <Stack spacing={2} direction="row" sx={{ mt: 5 }}>
                <Typography variant="subtitle2" sx={{ mt: 0.5 }}>
                  Share:
                </Typography>
                <SocialsButton initialColor simple={false} links={tour.shareLinks} />
              </Stack>
            </Grid>
          </Grid>
        </Container>

        <Divider sx={{ my: { xs: 10, md: 15 } }} />

        <Container>
          <Grid container spacing={8}>
            <Grid item xs={12} md={5} lg={4}>
              <TravelTourGuideInfo tourGuide={tour.tourGuide} />
            </Grid>

            <Grid item xs={12} md={7} lg={8}>
              <ReviewTravelToolbar
                totalReview={_reviews.length}
                onOpenReview={() => setOpenReview(!openReview)}
                sort={sort}
                onChangeSort={handleChangeSort}
              />
              <Collapse in={openReview}>
                <ReviewForm onClose={() => setOpenReview(false)} />
              </Collapse>
              <ReviewTravelTourList reviews={_reviews} />
            </Grid>
          </Grid>
        </Container>

        <TravelTourSimilar tours={tours.slice(-4)} />
        <NewsletterTravel />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

TravelTourPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
