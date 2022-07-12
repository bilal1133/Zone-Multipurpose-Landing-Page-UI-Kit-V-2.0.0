import { m } from 'framer-motion';
import Slider from 'react-slick';
import { useRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Link, Stack, Avatar, Container, Typography } from '@mui/material';
// routes
import Routes from '../../../routes';
// utils
import { fDate } from '../../../utils/formatTime';
// @types
import { BlogPostProps } from '../../../@types/blog';
// components
import { varHover, varTranHover } from '../../../components/animate';
import { Image, BgOverlay, CarouselArrows, CarouselDots } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

const DotStyle = styled('span')(({ theme }) => ({
  width: 4,
  height: 4,
  borderRadius: '50%',
  backgroundColor: 'currentColor',
  margin: theme.spacing(0, 1),
}));

// ----------------------------------------------------------------------

type Props = {
  posts: BlogPostProps[];
};

export default function BlogMarketingLatestPosts({ posts }: Props) {
  const theme = useTheme();
  const carouselRef = useRef<Slider | null>(null);

  const carouselSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots(),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <RootStyle>
      <Container>
        <Typography
          variant="h2"
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Latest Posts
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <CarouselArrows
            onNext={handleNext}
            onPrevious={handlePrevious}
            sx={{
              '& .arrow': {
                '&.left': { left: -20 },
                '&.right': { right: -20 },
              },
            }}
          >
            <Slider ref={carouselRef} {...carouselSettings}>
              {posts.map((post) => (
                <Box
                  key={post.slug}
                  sx={{
                    px: 2,
                    py: { xs: 8, md: 10 },
                  }}
                >
                  <PostItem post={post} />
                </Box>
              ))}
            </Slider>
          </CarouselArrows>
        </Box>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type PostItemProps = {
  post: BlogPostProps;
};

function PostItem({ post }: PostItemProps) {
  const { slug, frontmatter } = post;
  const { title, duration, coverImg, author, createdAt } = frontmatter;

  return (
    <Stack
      component={m.div}
      whileHover="hover"
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: (theme) => theme.customShadows.z12,
      }}
    >
      <m.div variants={varHover(1.25)} transition={varTranHover()}>
        <Image src={coverImg} alt={title} ratio="3/4" />
      </m.div>

      <Stack
        justifyContent="space-between"
        sx={{
          p: 5,
          width: 1,
          height: 1,
          zIndex: 9,
          position: 'absolute',
          bgcolor: 'background.paper',
          transition: (theme) =>
            theme.transitions.create('background-color', {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.enteringScreen,
            }),
          '&:hover': {
            color: 'common.white',
            bgcolor: 'transparent',
            '& .timeInfo': {
              opacity: 0.72,
              color: 'inherit',
            },
          },
        }}
      >
        <Stack spacing={2}>
          <Stack
            direction="row"
            alignItems="center"
            className="timeInfo"
            sx={{
              typography: 'caption',
              color: 'text.disabled',
            }}
          >
            {fDate(createdAt)}
            <DotStyle />
            {duration}
          </Stack>

          <NextLink
            passHref
            as={Routes.marketing.post(slug)}
            href={Routes.marketing.post('[slug]')}
          >
            <Link variant="h4" color="inherit">
              {title}
            </Link>
          </NextLink>
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
          <Avatar src={author.picture} sx={{ mr: 1 }} />
          {author.name}
        </Stack>
      </Stack>

      <BgOverlay direction="top" />
    </Stack>
  );
}
