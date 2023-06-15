// @mui
import { Stack, Typography } from '@mui/material';
// types
import { IBlogPostProps } from 'src/types/blog';
//
import PostItemMobile from '../components/PostItemMobile';

// ----------------------------------------------------------------------

type Props = {
  recentPosts: {
    list: IBlogPostProps[];
  };
};

export default function BlogSidebarRecentPosts({ recentPosts }: Props) {
  const { list } = recentPosts;

  return (
    <Stack spacing={3}>
      <Typography variant="h5">Recent Posts</Typography>

      {list.map((post) => (
        <PostItemMobile key={post.id} post={post} onSiderbar />
      ))}
    </Stack>
  );
}
