import { useState, ReactElement } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography, Divider, Stack, Avatar, Chip } from '@mui/material';
// routes
import Routes from '../../../src/routes';
// utils
import { fDate } from '../../../src/utils/formatTime';
import {
  getAllPosts,
  getPostData,
  getAllPostSlugs,
} from '../../../src/utils/get-mardown/career/posts';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../src/config';
// @types
import { BlogPostProps } from '../../../src/@types/blog';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page } from '../../../src/components';
import {
  Markdown,
  ShareButton,
  Breadcrumbs,
  SocialsButton,
  FavoriteButton,
} from '../../../src/components';
// sections
import { NewsletterCareer } from '../../../src/sections/newsletter';
import { BlogAuthorInfo, BlogCareerLatestPosts } from '../../../src/sections/blog';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
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
  posts: BlogPostProps[];
};

export default function CareerPostPage({ post, posts }: Props) {
  const { frontmatter, content } = post;
  const { title, description, duration, createdAt, favorited, author, shareLinks, tags } =
    frontmatter;

  const [favorite, setFavorite] = useState(favorited);

  const handleChangeFavorite = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  };

  return (
    <Page title={`${title} - Post | Career`}>
      <RootStyle>
        <Divider />

        <Container>
          <Breadcrumbs
            sx={{ my: 3 }}
            links={[
              { name: 'Home', href: '/' },
              { name: 'Blog', href: Routes.career.posts },
              { name: title },
            ]}
          />
        </Container>

        <Divider />

        <Container>
          <Grid container spacing={3} justifyContent={{ md: 'center' }}>
            <Grid item xs={12} md={8}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  pb: 6,
                  pt: { xs: 6, md: 10 },
                }}
              >
                {title}
              </Typography>

              <Stack direction="row" justifyContent="space-between" spacing={1.5}>
                <Avatar src={author.picture} sx={{ width: 48, height: 48 }} />
                <Stack spacing={0.5} flexGrow={1}>
                  <Typography variant="subtitle2">{author.name}</Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ typography: 'caption', color: 'text.disabled' }}
                  >
                    {fDate(createdAt)}
                    <DotStyle />
                    {duration}
                  </Stack>
                </Stack>

                <Stack direction="row" alignItems="center">
                  <ShareButton />
                  <FavoriteButton checked={favorite} onChange={handleChangeFavorite} />
                </Stack>
              </Stack>

              <Divider sx={{ my: 6 }} />

              <Typography variant="h5" sx={{ mb: 5 }}>
                {description}
              </Typography>

              <Markdown content={content} firstLetter />

              <Stack direction="row" alignItems="center" flexWrap="wrap" sx={{ my: 6 }}>
                <Typography variant="subtitle2" sx={{ mr: 1 }}>
                  Tags:
                </Typography>
                {tags.map((tag) => (
                  <Chip key={tag} size="small" label={tag} sx={{ m: 0.5 }} onClick={() => {}} />
                ))}
              </Stack>

              <Stack direction="row" alignItems="center" flexWrap="wrap">
                <Typography variant="subtitle2" sx={{ mr: 1 }}>
                  Share:
                </Typography>
                <SocialsButton initialColor links={shareLinks} simple={false} />
              </Stack>

              <Divider sx={{ mt: 8 }} />

              <BlogAuthorInfo author={author} />
            </Grid>
          </Grid>
        </Container>

        <Divider />

        <BlogCareerLatestPosts posts={posts.slice(0, 5)} />
        <NewsletterCareer />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

CareerPostPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostData(params.slug);

  return {
    props: {
      posts: getAllPosts(),
      post: {
        ...post,
        content: await serialize(post.content),
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();

  return {
    paths,
    fallback: false,
  };
}
