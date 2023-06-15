// @mui
import Masonry from '@mui/lab/Masonry';
import { Button, Stack } from '@mui/material';
// types
import { IBlogPostProps } from 'src/types/blog';
// components
import Iconify from 'src/components/iconify';
//
import PostItem from './PostItem';

// ----------------------------------------------------------------------

type Props = {
  posts: IBlogPostProps[];
};

export default function BlogCareerPosts({ posts }: Props) {
  return (
    <>
      <Masonry
        columns={{ xs: 1, sm: 2 }}
        spacing={4}
        defaultColumns={1}
        defaultSpacing={4}
        sx={{
          mx: { xs: 'unset', sm: 0 },
        }}
      >
        {posts.slice(0, 8).map((post, index) => (
          <PostItem key={post.id} post={post} index={index} />
        ))}
      </Masonry>

      <Stack
        alignItems="center"
        sx={{
          pt: 5,
          pb: { xs: 10, md: 0 },
        }}
      >
        <Button
          size="large"
          color="inherit"
          variant="outlined"
          endIcon={<Iconify icon="carbon:arrow-down" />}
        >
          Load more
        </Button>
      </Stack>
    </>
  );
}
