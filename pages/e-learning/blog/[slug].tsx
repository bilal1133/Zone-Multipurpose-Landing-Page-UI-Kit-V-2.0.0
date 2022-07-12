import { useState, ReactElement } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Chip, Stack, Avatar, Divider, Container, Typography } from '@mui/material';
// routes
import Routes from '../../../src/routes';
// utils
import { fDate } from '../../../src/utils/formatTime';
import {
  getAllPosts,
  getPostData,
  getAllPostSlugs,
} from '../../../src/utils/get-mardown/e-learning/posts';
// hooks
import { useResponsive } from '../../../src/hooks';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../src/config';
// @types
import { BlogPostProps } from '../../../src/@types/blog';
// _data
import _mock from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, PlayerWithImage, Markdown } from '../../../src/components';
import { SocialsButton, Breadcrumbs, ShareButton, FavoriteButton } from '../../../src/components';
// sections
import { NewsletterElearning } from '../../../src/sections/newsletter';
import {
  BlogAuthorInfo,
  BlogElearningLatestPosts,
  BlogPrevAndNextPost,
} from '../../../src/sections/blog';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

type Props = {
  post: BlogPostProps;
  posts: BlogPostProps[];
};

export default function ElearningPostPage({ post, posts }: Props) {
  const isDesktop = useResponsive('up', 'md');

  const { slug, frontmatter, content } = post;

  const { title, description, duration, createdAt, author, favorited, heroImg, shareLinks, tags } =
    frontmatter;

  const [favorite, setFavorite] = useState(favorited);

  const handleChangeFavorite = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  };

  const currentPost = posts.findIndex((post) => post.slug === slug);

  const prevPost = posts.find((_, index) => index === currentPost - 1);

  const nextPost = posts.find((_, index) => index === currentPost + 1);

  return (
    <Page title={`${title} - Post | E-Learning`}>
      <RootStyle>
        <Divider />

        <Container>
          <Breadcrumbs
            sx={{
              my: { xs: 3, md: 5 },
            }}
            links={[
              { name: 'Home', href: '/' },
              { name: 'Blog', href: Routes.eLearning.posts },
              { name: title },
            ]}
          />
        </Container>

        <Container>
          <PlayerWithImage
            imgPath={heroImg}
            videoPath={_mock.video}
            ratio={isDesktop ? '21/9' : '16/9'}
          />

          <Grid container spacing={3} justifyContent={{ md: 'center' }}>
            <Grid item xs={12} md={8}>
              <Stack
                spacing={3}
                sx={{
                  pb: 6,
                  textAlign: 'center',
                  pt: { xs: 6, md: 10 },
                }}
              >
                <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                  {duration}
                </Typography>
                <Typography variant="h2" component="h1">
                  {title}
                </Typography>
                <Typography variant="h5">{description}</Typography>
              </Stack>

              <Divider />
              <Stack direction="row" justifyContent="space-between" spacing={1.5} sx={{ py: 3 }}>
                <Avatar src={author.picture} sx={{ width: 48, height: 48 }} />
                <Stack spacing={0.5} flexGrow={1}>
                  <Typography variant="subtitle2">{author.name}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {fDate(createdAt, 'dd/MM/yyyy p')}
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center">
                  <ShareButton />
                  <FavoriteButton checked={favorite} onChange={handleChangeFavorite} />
                </Stack>
              </Stack>

              <Divider sx={{ mb: 6 }} />

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

              <Divider />

              {(prevPost || nextPost) && (
                <BlogPrevAndNextPost prevPost={prevPost} nextPost={nextPost} />
              )}
            </Grid>
          </Grid>
        </Container>

        <Divider />

        <BlogElearningLatestPosts posts={posts.slice(0, 3)} />

        <NewsletterElearning />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

ElearningPostPage.getLayout = function getLayout(page: ReactElement) {
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
