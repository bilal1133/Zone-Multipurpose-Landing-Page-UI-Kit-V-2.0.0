import Slider from 'react-slick';
import { useRef } from 'react';
// icons
import chevronRight from '@iconify/icons-carbon/chevron-right';
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// next
import NextLink from 'next/link';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Grid, Stack, Button, Divider, Typography } from '@mui/material';
// hooks
import { useBoundingClientRect, useResponsive } from '../../../hooks';
// routes
import Routes from '../../../routes';
// utils
import { fDate } from '../../../utils/formatTime';
// @types
import { BlogPostProps } from '../../../@types/blog';
// components
import {
  Image,
  Iconify,
  BgOverlay,
  TextMaxLine,
  CarouselDots,
  CarouselArrows,
} from '../../../components';
import { FabButtonAnimate } from '../../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
}));

// ----------------------------------------------------------------------

type Props = {
  posts: BlogPostProps[];
};

export default function BlogMarketingLatestPosts({ posts }: Props) {
  const theme = useTheme();
  const isDesktop = useResponsive('up', 'md');

  const carouselRef = useRef<Slider | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const container = useBoundingClientRect(containerRef);

  const imageSize = isDesktop
    ? {
        width: container?.width,
        height: container?.height,
      }
    : {
        width: 1,
        height: 800,
      };

  const carouselSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      width: 1,
      bottom: 80,
      position: 'absolute',
    }),
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <RootStyle>
      <Typography
        variant="h2"
        sx={{ py: 8, px: 2.5, color: 'common.white', display: { md: 'none' } }}
      >
        Latest Posts
      </Typography>

      <Grid container>
        <Grid item xs={12} md={6} ref={containerRef} sx={{ position: 'relative' }}>
          <CarouselArrows
            onNext={handleNext}
            onPrevious={handlePrevious}
            sx={{
              '& .arrow': {
                mx: 1,
                '& button': {
                  opacity: 0.48,
                  color: 'common.white',
                  '&:hover': { opacity: 1, color: 'common.white' },
                },
              },
            }}
          >
            <Slider ref={carouselRef} {...carouselSettings}>
              {posts.map((post) => (
                <PostCarouselItem key={post.slug} post={post} imageSize={imageSize} />
              ))}
            </Slider>
          </CarouselArrows>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              py: 8,
              px: { xs: 2.5, sm: 5, md: 8, lg: 15 },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: 'common.white',
                py: { md: 10 },
                display: { xs: 'none', md: 'block' },
              }}
            >
              Latest Posts
            </Typography>

            <Stack spacing={3}>
              {posts.slice(0, 3).map((post) => (
                <PostItem key={post.slug} post={post} />
              ))}
            </Stack>

            <Box sx={{ textAlign: 'right', mt: { xs: 8, md: 5 } }}>
              <NextLink passHref href={Routes.travel.posts}>
                <Button endIcon={<Iconify icon={directionStraightRight} />}> View All</Button>
              </NextLink>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type PostItemProps = {
  post: BlogPostProps;
  imageSize?: {
    width: number | undefined;
    height: number | undefined;
  };
};

function PostItem({ post }: PostItemProps) {
  const { slug, frontmatter } = post;
  const { title, description, createdAt } = frontmatter;

  return (
    <div>
      <Typography variant="caption" sx={{ color: 'primary.main' }}>
        {fDate(createdAt)}
      </Typography>

      <NextLink passHref as={Routes.travel.post(slug)} href={Routes.travel.post('[slug]')}>
        <TextMaxLine variant="h5" asLink sx={{ color: 'common.white', mt: 1, mb: 2 }}>
          {title}
        </TextMaxLine>
      </NextLink>

      <TextMaxLine variant="body2" sx={{ color: 'text.secondary' }}>
        {description}
      </TextMaxLine>

      <Divider sx={{ borderStyle: 'dashed', mt: 3 }} />
    </div>
  );
}

// ----------------------------------------------------------------------

function PostCarouselItem({ post, imageSize }: PostItemProps) {
  const { slug, frontmatter } = post;
  const { title, coverImg, description, createdAt } = frontmatter;

  return (
    <Stack sx={{ position: 'relative', ...imageSize }}>
      <Stack
        sx={{
          width: 1,
          height: 1,
          zIndex: 9,
          textAlign: 'center',
          position: 'absolute',
          color: 'common.white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ mx: 'auto', maxWidth: 400 }}>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            {fDate(createdAt)}
          </Typography>

          <Typography variant="h3" sx={{ mt: 1, mb: 5 }}>
            {title}
          </Typography>

          <Typography sx={{ opacity: 0.72, mb: 10 }}>{description}</Typography>

          <NextLink passHref as={Routes.travel.post(slug)} href={Routes.travel.post('[slug]')}>
            <FabButtonAnimate>
              <Iconify icon={chevronRight} />
            </FabButtonAnimate>
          </NextLink>
        </Box>
      </Stack>

      <BgOverlay />

      <Image src={coverImg} alt={title} sx={{ width: 1, height: 1 }} />
    </Stack>
  );
}
