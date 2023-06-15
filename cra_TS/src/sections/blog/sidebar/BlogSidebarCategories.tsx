// @mui
import { Stack, Link, Typography, Box } from '@mui/material';
// types
import { IBlogCategoryProps } from 'src/types/blog';

// ----------------------------------------------------------------------

type Props = {
  categories: IBlogCategoryProps[];
};

export default function BlogSidebarCategories({ categories }: Props) {
  return (
    <Stack spacing={1}>
      <Typography variant="h5" gutterBottom>
        Categories
      </Typography>

      {categories.map((category) => (
        <Stack key={category.label} direction="row" alignItems="center">
          <Box sx={{ width: 6, height: 6, mr: 2, bgcolor: 'primary.main', borderRadius: '50%' }} />

          <Link variant="body2" href={category.path} color="inherit">
            {category.label}
          </Link>
        </Stack>
      ))}
    </Stack>
  );
}
