// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Stack, Avatar, Link } from '@mui/material';
// routes
import Routes from '../../../routes';
// utils
import { fDate } from '../../../utils/formatTime';
// @types
import { BlogPostProps } from '../../../@types/blog';
// components
import { Image } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
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
  post: BlogPostProps;
};

export default function BlogElearningFeaturedPosts({ post }: Props) {
  const { slug, frontmatter } = post;
  const { title, duration, coverImg, description, author, createdAt } = frontmatter;

  return (
    <RootStyle>
      <Container>
        <Stack direction={{ xs: 'column', md: 'row' }}>
          <Image src={coverImg} alt={title} sx={{ flexGrow: 1, height: 560, borderRadius: 2 }} />

          <Stack
            spacing={1}
            sx={{
              mx: 'auto',
              pl: { md: 8 },
              py: { xs: 3, md: 5 },
              maxWidth: { md: 408 },
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              sx={{ typography: 'caption', color: 'text.disabled' }}
            >
              {fDate(createdAt)}
              <DotStyle />
              {duration}
            </Stack>

            <NextLink
              passHref
              as={Routes.eLearning.post(slug)}
              href={Routes.eLearning.post('[slug]')}
            >
              <Link color="inherit" variant="h3">
                {title}
              </Link>
            </NextLink>

            <Typography sx={{ color: 'text.secondary', flexGrow: 1 }}>{description}</Typography>

            <Stack direction="row" alignItems="center" sx={{ pt: 1.5, typography: 'body2' }}>
              <Avatar src={author.picture} sx={{ mr: 1 }} />
              {author.name}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}
