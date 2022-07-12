import { useState, ReactElement } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Stack, Container, Typography, Divider } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../src/config';
// hooks
import { useRequest, useResponsive } from '../../../src/hooks';
// _data
import _mock, { _reviews } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import {
  Page,
  ErrorScreen,
  LoadingScreen,
  DialogAnimate,
  SocialsButton,
} from '../../../src/components';
// sections
import { NewsletterElearning } from '../../../src/sections/newsletter';
import { Advertisement01 } from '../../../src/sections/advertisement';
import {
  ReviewForm,
  ReviewSummary,
  ReviewElearningCourseList,
  ReviewElearningToolbar,
} from '../../../src/sections/reviews';
import {
  ElearningCourseHero,
  ElearningCourseInfo,
  ElearningCourseSimilar,
  ElearningCourseDetails,
  ElearningCourseTeachersInfo,
} from '../../../src/sections/@e-learning';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function ElearningCoursePage() {
  const router = useRouter();

  const isDesktop = useResponsive('up', 'md');

  const [sort, setSort] = useState('latest');

  const [openForm, setOpenForm] = useState(false);

  const [filter, setFilter] = useState<string | null>(null);

  const handleChangeSort = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  const handleChangeFilters = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((event.target as HTMLInputElement).value);
  };

  const { id } = router.query;

  const { data: courses = [] } = useRequest('/api/e-learning/courses');

  const {
    data: course,
    error: courseError,
    isLoading: courseLoading,
  } = useRequest(id ? `/api/e-learning/courses/${id}` : '');

  if (courseError) {
    return <ErrorScreen />;
  }

  if (courseLoading) {
    return <LoadingScreen />;
  }

  return (
    <Page title={`${course.slug} - E-Learning`}>
      <RootStyle>
        <ElearningCourseHero course={course} />

        <Container
          sx={{
            pt: { xs: 10, md: 10 },
            pb: { xs: 15, md: 10 },
          }}
        >
          <Grid container spacing={8}>
            {!isDesktop && (
              <Grid item xs={12}>
                <ElearningCourseInfo course={course} />
              </Grid>
            )}

            <Grid item xs={12} md={7} lg={8}>
              <ElearningCourseDetails course={course} />
              <Stack spacing={2} direction="row" sx={{ mt: 5 }}>
                <Typography variant="subtitle2" sx={{ mt: 0.5 }}>
                  Share:
                </Typography>
                <SocialsButton initialColor simple={false} links={course.shareLinks} />
              </Stack>

              <Divider sx={{ my: 5 }} />
              <ElearningCourseTeachersInfo teachers={course.teachers} />
            </Grid>

            <Grid item xs={12} md={5} lg={4}>
              <Stack spacing={5}>
                {isDesktop && <ElearningCourseInfo course={course} />}
                <Advertisement01
                  advertisement={{
                    title: 'Advertisement',
                    description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                    imageUrl: _mock.image.course(7),
                    path: '#',
                  }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Container>

        <Divider
          sx={{
            display: { xs: 'none', md: 'block' },
          }}
        />

        <Container
          sx={{
            pt: { md: 15 },
          }}
        >
          <Grid item xs={12} md={7} lg={8}>
            <ReviewElearningToolbar sort={sort} onChangeSort={handleChangeSort} />
          </Grid>

          <Grid container spacing={8} direction="row-reverse">
            <Grid item xs={12} md={5} lg={4}>
              <ReviewSummary
                reviews={course.reviews}
                ratings={course.ratings}
                filter={filter}
                onChangeFilters={handleChangeFilters}
                onOpenForm={() => setOpenForm(true)}
              />
              <DialogAnimate open={openForm} onClose={() => setOpenForm(false)}>
                <ReviewForm onClose={() => setOpenForm(false)} />
              </DialogAnimate>
            </Grid>

            <Grid item xs={12} md={7} lg={8}>
              <ReviewElearningCourseList reviews={_reviews} />
            </Grid>
          </Grid>
        </Container>

        <ElearningCourseSimilar courses={courses.slice(-3)} />
        <NewsletterElearning />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

ElearningCoursePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
