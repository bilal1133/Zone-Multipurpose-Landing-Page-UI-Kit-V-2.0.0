import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Divider, Stack, Card, Typography, Box, Link, Avatar } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// utils
import { fCurrency, fShortenNumber } from 'src/utils/formatNumber';
// types
import { ICourseProps } from 'src/types/course';
// components
import Image from 'src/components/image';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

type Props = {
  course: ICourseProps;
  vertical?: boolean;
};

export default function ElearningCourseItem({ course, vertical }: Props) {
  const {
    slug,
    level,
    price,
    ratings,
    reviews,
    teachers,
    students,
    coverImg,
    category,
    priceSale,
    bestSeller,
    totalHours,
    description,
  } = course;

  return (
    <Card
      sx={{
        display: { sm: 'flex' },
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
        ...(vertical && {
          flexDirection: 'column',
        }),
      }}
    >
      <Box sx={{ flexShrink: { sm: 0 } }}>
        <Image
          alt={slug}
          src={coverImg}
          sx={{
            height: 1,
            objectFit: 'cover',
            width: { sm: 240 },
            ...(vertical && {
              width: { sm: 1 },
            }),
          }}
        />
      </Box>

      {bestSeller && (
        <Label
          color="warning"
          variant="filled"
          sx={{ top: 12, left: 12, position: 'absolute', textTransform: 'uppercase' }}
        >
          Best Seller
        </Label>
      )}

      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack
          spacing={{
            xs: 3,
            sm: vertical ? 3 : 1,
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="overline" sx={{ color: 'primary.main' }}>
              {category}
            </Typography>

            <Typography variant="h4">
              {priceSale > 0 && (
                <Box
                  component="span"
                  sx={{ mr: 0.5, color: 'text.disabled', textDecoration: 'line-through' }}
                >
                  {fCurrency(priceSale)}
                </Box>
              )}
              {fCurrency(price)}
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <Link component={RouterLink} to={paths.eLearning.course} color="inherit">
              <TextMaxLine variant="h6" line={1}>
                {slug}
              </TextMaxLine>
            </Link>

            <TextMaxLine
              variant="body2"
              color="text.secondary"
              sx={{
                ...(vertical && {
                  display: { sm: 'none' },
                }),
              }}
            >
              {description}
            </TextMaxLine>
          </Stack>
        </Stack>

        <Stack
          spacing={1.5}
          direction="row"
          alignItems="center"
          flexWrap="wrap"
          divider={<Divider orientation="vertical" sx={{ height: 20, my: 'auto' }} />}
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

          {teachers?.length > 0 && (
            <Link underline="always" color="text.secondary" variant="body2">
              + {teachers?.length} teachers
            </Link>
          )}
        </Stack>

        <Divider
          sx={{
            borderStyle: 'dashed',
            display: { sm: 'none' },
            ...(vertical && {
              display: 'block',
            }),
          }}
        />

        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          sx={{ color: 'text.disabled', '& > *:not(:last-child)': { mr: 2.5 } }}
        >
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:time" sx={{ mr: 1 }} /> {`${totalHours} hours`}
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
      </Stack>
    </Card>
  );
}
