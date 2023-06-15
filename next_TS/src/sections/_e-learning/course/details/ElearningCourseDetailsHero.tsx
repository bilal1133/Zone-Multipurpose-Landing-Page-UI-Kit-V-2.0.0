import { useState } from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Box,
  Fab,
  Link,
  Stack,
  Avatar,
  Divider,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// utils
import { bgGradient } from 'src/utils/cssStyles';
import { fShortenNumber } from 'src/utils/formatNumber';
// types
import { ICourseProps } from 'src/types/course';
// _mock
import _mock from 'src/_mock';
// components
import Label from 'src/components/label';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { PlayerDialog } from 'src/components/player';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------

type Props = {
  course: ICourseProps;
};

export default function ElearningCourseDetailsHero({ course }: Props) {
  const {
    slug,
    level,
    ratings,
    quizzes,
    lessons,
    category,
    coverImg,
    languages,
    bestSeller,
    totalHours,
    description,
    reviews,
    students,
    teachers = [],
  } = course;

  const isMdUp = useResponsive('up', 'md');

  const [openVideo, setOpenVideo] = useState(false);

  const handleOpenVideo = () => {
    setOpenVideo(true);
  };

  const handleCloseVideo = () => {
    setOpenVideo(false);
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.neutral',
          pb: { xs: 5, md: 10 },
        }}
      >
        <Container sx={{ overflow: 'hidden' }}>
          <CustomBreadcrumbs
            links={[
              { name: 'Home', href: '/' },
              { name: 'Courses', href: paths.eLearning.courses },
              { name: course.slug || '' },
            ]}
            sx={{
              pt: 5,
              mb: { xs: 5, md: 10 },
            }}
          />

          <Grid container spacing={{ xs: 5, md: 10 }} direction="row-reverse">
            <Grid xs={12} md={5}>
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
              >
                <Fab
                  color="primary"
                  onClick={handleOpenVideo}
                  sx={{
                    zIndex: 9,
                    position: 'absolute',
                  }}
                >
                  <Iconify icon="carbon:play" width={24} />
                </Fab>

                <StyledOverlay />

                <Image alt="hero" src={coverImg} ratio={isMdUp ? '3/4' : '4/3'} />
              </Stack>
            </Grid>

            <Grid xs={12} md={7}>
              <Stack spacing={3}>
                <Stack spacing={2} alignItems="flex-start">
                  {bestSeller && (
                    <Label color="warning" variant="filled" sx={{ textTransform: 'uppercase' }}>
                      Best Seller
                    </Label>
                  )}

                  <Typography variant="overline" sx={{ color: 'secondary.main' }}>
                    {category}
                  </Typography>

                  <Typography variant="h3" component="h1">
                    {slug}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
                </Stack>

                <Stack
                  spacing={1.5}
                  direction="row"
                  alignItems="center"
                  divider={<Divider orientation="vertical" sx={{ height: 20 }} />}
                >
                  <Stack spacing={0.5} direction="row" alignItems="center">
                    <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />
                    <Box sx={{ typography: 'h6' }}>
                      {Number.isInteger(ratings) ? `${ratings}.0` : ratings}
                    </Box>

                    {reviews && (
                      <Link variant="body2" sx={{ color: 'text.secondary' }}>
                        ({fShortenNumber(reviews)} reviews)
                      </Link>
                    )}
                  </Stack>

                  <Stack direction="row" sx={{ typography: 'subtitle2' }}>
                    {fShortenNumber(students)}
                    <Box component="span" typography="body2" sx={{ ml: 0.5 }}>
                      students
                    </Box>
                  </Stack>
                </Stack>

                <Stack direction="row" alignItems="center">
                  <Avatar src={teachers[0]?.picture} />

                  <Typography variant="body2" sx={{ ml: 1, mr: 0.5 }}>
                    {teachers[0]?.name}
                  </Typography>

                  {!!teachers.length && (
                    <Link underline="always" color="text.secondary" variant="body2">
                      + {teachers.length} teachers
                    </Link>
                  )}
                </Stack>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Stack spacing={2}>
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    sx={{
                      '& > *': { my: 0.5, mr: 3 },
                    }}
                  >
                    <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                      <Iconify icon="carbon:time" sx={{ mr: 1 }} /> {`${totalHours} hours`}
                    </Stack>

                    <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                      <Iconify icon="carbon:document" sx={{ mr: 1 }} />
                      {`${lessons?.length} Lessons`}
                    </Stack>

                    <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                      <Iconify
                        icon={
                          (level === 'Beginner' && 'carbon:skill-level-basic') ||
                          (level === 'Intermediate' && 'carbon:skill-level-intermediate') ||
                          'carbon:skill-level-advanced'
                        }
                        sx={{ mr: 1 }}
                      />
                      {level}
                    </Stack>
                  </Stack>

                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    sx={{
                      '& > *': { my: 0.5, mr: 3 },
                    }}
                  >
                    <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                      <Iconify icon="carbon:content-delivery-network" sx={{ mr: 1 }} />
                      {typeof languages === 'string' ? languages : languages?.join(', ')}
                    </Stack>

                    <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                      <Iconify icon="carbon:help" sx={{ mr: 1 }} /> {`${quizzes} Quizzes`}
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <PlayerDialog open={openVideo} onClose={handleCloseVideo} videoPath={_mock.video(0)} />
    </>
  );
}
