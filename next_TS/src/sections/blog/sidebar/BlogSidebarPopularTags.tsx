// @mui
import { Typography, Chip, Box } from '@mui/material';
// types
import { IBlogTagsProps } from 'src/types/blog';

// ----------------------------------------------------------------------

type Props = {
  popularTags: IBlogTagsProps[];
};

export default function BlogSidebarPopularTags({ popularTags }: Props) {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Popular Tags
      </Typography>

      {popularTags.map((tag) => (
        <Chip key={tag.label} label={tag.label} sx={{ m: 0.5 }} onClick={() => {}} />
      ))}
    </Box>
  );
}
