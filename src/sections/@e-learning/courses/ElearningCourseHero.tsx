// icons
import timeIcon from '@iconify/icons-carbon/time';
import documentIcon from '@iconify/icons-carbon/document';
import contentDeliveryNetwork from '@iconify/icons-carbon/content-delivery-network';
import helpIcon from '@iconify/icons-carbon/help';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Stack, Divider, Container, Grid, Box, Avatar, Link } from '@mui/material';
// routes
import Routes from '../../../routes';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
import { getLevelIcon } from '../../../utils/getIcon';
// @types
import { CourseProps } from '../../../@types/e-learning';
// _data
import _mock from '../../../../_data/mock';
// components
import { PlayerWithImage } from '../../../components/player';
import { Label, Breadcrumbs, RatingLabel, TextIconLabel, Iconify } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(10),
  backgroundColor: theme.palette.background.neutral,
}));

// ----------------------------------------------------------------------

type Props = {
  course: CourseProps;
};

export default function ElearningCourseHero({ course }: Props) {
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

  return (
    <RootStyle>
      <Container>
        <Breadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Courses', href: Routes.eLearning.courses },
            { name: course.slug || '' },
          ]}
          sx={{ mb: 8 }}
        />

        <Grid
          container
          rowSpacing={{ xs: 6, md: 0 }}
          columnSpacing={{ md: 10 }}
          direction="row-reverse"
        >
          <Grid item xs={12} md={5}>
            <PlayerWithImage imgPath={coverImg} videoPath={_mock.video} ratio="3/4" />
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={3}>
              <Stack spacing={2} alignItems="flex-start">
                {bestSeller && (
                  <Label color="warning" variant="filled" sx={{ textTransform: 'uppercase' }}>
                    Best Seller
                  </Label>
                )}
                <Typography variant="h3" component="h1">
                  {slug}
                </Typography>
                <Typography variant="overline" sx={{ color: 'secondary.main' }}>
                  {category}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
              </Stack>

              <Stack
                spacing={1.5}
                direction="row"
                alignItems="center"
                divider={<Divider orientation="vertical" sx={{ height: 20, my: 'auto' }} />}
              >
                <RatingLabel ratings={ratings} reviews={reviews} />
                <Stack direction="row" sx={{ typography: 'subtitle2' }}>
                  {fShortenNumber(students)} {''}
                  <Box component="span" typography="body2" sx={{ ml: 0.5 }}>
                    students
                  </Box>
                </Stack>
              </Stack>

              <TextIconLabel
                icon={<Avatar src={teachers[0]?.picture} />}
                value={
                  <>
                    <Typography variant="body2" sx={{ ml: 1, mr: 0.5 }}>
                      {teachers[0]?.name}
                    </Typography>
                    {teachers?.length > 0 && (
                      <Link underline="always" color="text.secondary" variant="body2">
                        + {teachers?.length} teachers
                      </Link>
                    )}
                  </>
                }
              />

              <Divider sx={{ borderStyle: 'dashed' }} />

              <Stack spacing={2}>
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  sx={{
                    '& > *': { my: 0.5, mr: 3 },
                  }}
                >
                  <TextIconLabel
                    icon={<Iconify icon={timeIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
                    value={`${totalHours} hours`}
                  />
                  <TextIconLabel
                    icon={<Iconify icon={documentIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
                    value={`${lessons?.length} Lessons`}
                  />
                  <TextIconLabel icon={getLevelIcon(level)} value={level} />
                </Stack>

                <Stack
                  direction="row"
                  flexWrap="wrap"
                  sx={{
                    '& > *': { my: 0.5, mr: 3 },
                  }}
                >
                  <TextIconLabel
                    icon={
                      <Iconify
                        icon={contentDeliveryNetwork}
                        sx={{ width: 20, height: 20, mr: 1 }}
                      />
                    }
                    value={typeof languages === 'string' ? languages : languages?.join(', ')}
                  />
                  <TextIconLabel
                    icon={<Iconify icon={helpIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
                    value={`${quizzes} Quizzes`}
                  />
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
