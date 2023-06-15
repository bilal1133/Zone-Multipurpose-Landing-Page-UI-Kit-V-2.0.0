import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Container, Link, Paper, Typography, Divider } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

const ITEMS = [
  { title: 'Animate', path: paths.components.animate },
  { title: 'Carousel', path: paths.components.carousel },
  { title: 'CountUp', path: paths.components.countUp },
  { title: 'Form Validation', path: paths.components.form },
  { title: 'Icons', path: paths.components.icons },
  { title: 'Image', path: paths.components.image },
  { title: 'Label', path: paths.components.label },
  { title: 'Lightbox', path: paths.components.lightbox },
  { title: 'Markdown', path: paths.components.markdown },
  { title: 'Mega Menu', path: paths.components.megaMenu },
  { title: 'Navigation Bar', path: paths.components.navigation },
  { title: 'Scroll', path: paths.components.scroll },
  { title: 'Player', path: paths.components.player },
  { title: 'Text Max Line', path: paths.components.textMaxLine },
];

// ----------------------------------------------------------------------

export default function ComponentsPage() {
  return (
    <>
      <Helmet>
        <title>Components | ZONE UI</title>
      </Helmet>

      <Container sx={{ mt: 5, mb: 10 }}>
        <Typography variant="h4" paragraph>
          MUI Components
        </Typography>

        <Link href="https://mui.com/components/" target="_blank" rel="noopener">
          https://mui.com/components/
        </Link>

        <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

        <Typography variant="h4" paragraph>
          Extra Components
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 5 }}>
          Extension components and 3rd party dependencies.
        </Typography>

        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
        >
          {ITEMS.map((item) => (
            <Link
              component={RouterLink}
              to={item.path}
              key={item.title}
              color="inherit"
              underline="none"
            >
              <Paper
                variant="outlined"
                sx={{
                  px: 3,
                  py: 5,
                  typography: 'h6',
                  borderRadius: 1.5,
                  textAlign: 'center',
                  '&:hover': {
                    boxShadow: (theme) => `0 0 0 2px ${theme.palette.text.primary}`,
                  },
                }}
              >
                {item.title}
              </Paper>
            </Link>
          ))}
        </Box>
      </Container>
    </>
  );
}
