// @mui
import { Typography, Container, Paper, Button, Box, Unstable_Grid2 as Grid } from '@mui/material';
// types
import { ICourseByCategoryProps } from 'src/types/course';
// components
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

type Props = {
  categories: ICourseByCategoryProps[];
};

export default function ElearningLandingCategories({ categories }: Props) {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 8, lg: 3 }} justifyContent={{ lg: 'space-between' }}>
          <Grid
            xs={12}
            lg={4}
            sx={{
              textAlign: { xs: 'center', lg: 'unset' },
            }}
          >
            <Typography variant="h2">Featured Category</Typography>

            <Typography sx={{ color: 'text.secondary', mt: 2, mb: 5 }}>
              Since wire-frame renderings are relatively simple and fast to calculate, they are
              often used in cases
            </Typography>

            <Button
              variant="contained"
              size="large"
              color="inherit"
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              Explore more
            </Button>
          </Grid>

          <Grid xs={12} lg={7}>
            <Box
              sx={{
                gap: 3,
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                },
              }}
            >
              {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type CategoryItemProps = {
  category: ICourseByCategoryProps;
};

function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        borderRadius: 1.5,
        cursor: 'pointer',
        bgcolor: 'transparent',
        transition: (theme) =>
          theme.transitions.create('all', {
            duration: theme.transitions.duration.enteringScreen,
          }),
        '&:hover': {
          bgcolor: 'background.paper',
          boxShadow: (theme) => theme.customShadows.z24,
          '& h6': {
            color: 'primary.main',
          },
        },
      }}
    >
      <TextMaxLine variant="h6" line={1} gutterBottom>
        {category.name}
      </TextMaxLine>

      <Typography variant="body2" sx={{ color: 'text.disabled' }}>
        {category.students} students
      </Typography>
    </Paper>
  );
}
