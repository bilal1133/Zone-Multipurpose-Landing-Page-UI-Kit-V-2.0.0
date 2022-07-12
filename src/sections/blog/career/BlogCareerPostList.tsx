// icons

import arrowDown from '@iconify/icons-carbon/arrow-down';
// @mui
import Masonry from '@mui/lab/Masonry';
import { Button, Stack } from '@mui/material';
// @types
import { BlogPostProps } from '../../../@types/blog';
// components
import { Iconify } from '../../../components';
//
import BlogCareerPostItem from './BlogCareerPostItem';

// ----------------------------------------------------------------------

type Props = {
  posts: BlogPostProps[];
};

export default function BlogCareerPostList({ posts }: Props) {
  return (
    <>
      <Masonry
        columns={{ xs: 1, md: 2 }}
        spacing={4}
        defaultHeight={450}
        defaultColumns={1}
        defaultSpacing={4}
        sx={{
          mx: { xs: 'unset', md: 0 },
        }}
      >
        {posts.slice(0, 8).map((post, index) => (
          <BlogCareerPostItem key={post.slug} post={post} index={index} />
        ))}
      </Masonry>

      <Stack
        alignItems="center"
        sx={{
          pt: 8,
          pb: { xs: 8, md: 10 },
        }}
      >
        <Button
          size="large"
          color="inherit"
          variant="outlined"
          endIcon={<Iconify icon={arrowDown} sx={{ width: 20, height: 20 }} />}
        >
          Load more
        </Button>
      </Stack>
    </>
  );
}
