// @mui
import { styled } from '@mui/material/styles';
import { Typography, Stack, Container, Grid, Paper, Button, Box } from '@mui/material';
// @types
import { CourseByCategoryProps } from '../../../@types/e-learning';
// components
import { TextMaxLine } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  categories: CourseByCategoryProps[];
};

export default function ElearningLandingCategories({ categories }: Props) {
  return (
    <RootStyle>
      <Container>
        <Grid container spacing={{ xs: 8, lg: 3 }} justifyContent={{ lg: 'space-between' }}>
          <Grid
            item
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

            <Button variant="contained" size="large">
              Explore more
            </Button>
          </Grid>

          <Grid item xs={12} lg={7}>
            <Box
              sx={{
                display: 'grid',
                gap: 3,
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
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type CategoryItemProps = {
  category: CourseByCategoryProps;
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

      <Typography variant="body3" sx={{ color: 'text.disabled' }}>
        {category.students} students
      </Typography>
    </Paper>
  );
}
