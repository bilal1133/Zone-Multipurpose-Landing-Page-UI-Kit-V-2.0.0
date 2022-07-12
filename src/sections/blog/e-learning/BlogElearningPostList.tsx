// @mui
import { Pagination, Box } from '@mui/material';
// @types
import { BlogPostProps } from '../../../@types/blog';
//
import BlogElearningPostItem from './BlogElearningPostItem';

// ----------------------------------------------------------------------

type Props = {
  posts: BlogPostProps[];
};

export default function BlogElearningPostList({ posts }: Props) {
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          columnGap: 4,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          },
        }}
      >
        {posts.slice(0, 8).map((post) => (
          <BlogElearningPostItem key={post.slug} post={post} />
        ))}
      </Box>

      <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          py: { xs: 8, md: 10 },
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}
