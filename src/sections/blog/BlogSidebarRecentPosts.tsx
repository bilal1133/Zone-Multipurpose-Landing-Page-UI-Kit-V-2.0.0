// @mui
import { Stack, Typography } from '@mui/material';
// @types
import { BlogPostProps } from '../../@types/blog';
//
import BlogPostItemMobile from './BlogPostItemMobile';

// ----------------------------------------------------------------------

type BlogSidebarRecentPosts = {
  recentPosts: {
    list: BlogPostProps[];
    path: string;
  };
};

export default function BlogSidebarRecentPosts({ recentPosts }: BlogSidebarRecentPosts) {
  const { list, path } = recentPosts;

  return (
    <Stack spacing={3}>
      <Typography variant="h4" gutterBottom>
        Recent Posts
      </Typography>
      {list.map((post) => (
        <BlogPostItemMobile key={post.slug} post={post} onSiderbar path={path} />
      ))}
    </Stack>
  );
}
