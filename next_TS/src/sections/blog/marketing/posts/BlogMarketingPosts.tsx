// @mui
import { Pagination, Box } from '@mui/material';
// types
import { IBlogPostProps } from 'src/types/blog';
//
import PostItem from './PostItem';

// ----------------------------------------------------------------------

type Props = {
  posts: IBlogPostProps[];
};

export default function BlogMarketingPosts({ posts }: Props) {
  return (
    <>
      <Box
        sx={{
          columnGap: 4,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          },
        }}
      >
        {posts.slice(0, 8).map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </Box>

      <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          my: 10,
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}
