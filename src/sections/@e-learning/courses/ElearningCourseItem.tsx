// icons
import timeIcon from '@iconify/icons-carbon/time';
// next
import NextLink from 'next/link';
// @mui
import { Divider, Stack, Card, Typography, Box, Link, Avatar } from '@mui/material';
// routes
import Routes from '../../../routes';
// utils
import { getLevelIcon } from '../../../utils/getIcon';
import { fCurrency, fShortenNumber } from '../../../utils/formatNumber';
// @types
import { CourseProps } from '../../../@types/e-learning';
// components
import {
  Image,
  Label,
  Iconify,
  RatingLabel,
  TextMaxLine,
  TextIconLabel,
} from '../../../components';

// ----------------------------------------------------------------------

type Props = {
  course: CourseProps;
  vertical?: boolean;
};

export default function ElearningCourseItem({ course, vertical }: Props) {
  const {
    id,
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
        boxShadow: (theme) => theme.customShadows.z16,
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
                  sx={{ color: 'text.disabled', textDecoration: 'line-through' }}
                >
                  {fCurrency(priceSale)}
                </Box>
              )}{' '}
              {fCurrency(price)}
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <NextLink
              passHref
              as={Routes.eLearning.course(id)}
              href={Routes.eLearning.course('[id]')}
            >
              <TextMaxLine variant="h6" line={1} asLink>
                {slug}
              </TextMaxLine>
            </NextLink>

            <TextMaxLine
              variant="body2"
              color="text.secondary"
              line={2}
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
          <RatingLabel ratings={ratings} reviews={reviews} />
          <Stack direction="row" sx={{ typography: 'subtitle2' }}>
            {fShortenNumber(students)}
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
          <TextIconLabel
            icon={<Iconify icon={timeIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
            value={`${totalHours} hours`}
          />
          <TextIconLabel icon={getLevelIcon(level)} value={level} />
        </Stack>
      </Stack>
    </Card>
  );
}
