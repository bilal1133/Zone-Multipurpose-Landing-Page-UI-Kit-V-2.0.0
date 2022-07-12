import { useState, ReactElement } from 'react';
// icons
import filterIcon from '@iconify/icons-carbon/filter';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Stack, Typography, Button, Box } from '@mui/material';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT, DRAWER_WIDTH } from '../../../src/config';
// hooks
import { useRequest } from '../../../src/hooks';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, Iconify } from '../../../src/components';
// sections
import { NewsletterElearning } from '../../../src/sections/newsletter';
import { ElearningCourseList, ElearningCourseBarFilters } from '../../../src/sections/@e-learning';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function ElearningCoursesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { data: courses = [], error, isLoading } = useRequest('/api/e-learning/courses');

  const handleMobileOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Courses - Elearning">
      <RootStyle>
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              my: 5,
              mb: { md: 8 },
            }}
          >
            <Typography variant="h2">Courses</Typography>

            <Button
              color="inherit"
              variant="contained"
              startIcon={<Iconify icon={filterIcon} sx={{ width: 18, height: 18 }} />}
              onClick={handleMobileOpen}
              sx={{
                display: { md: 'none' },
              }}
            >
              Filters
            </Button>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }}>
            <ElearningCourseBarFilters mobileOpen={mobileOpen} onMobileClose={handleMobileClose} />

            <Box
              sx={{
                flexGrow: 1,
                pl: { md: 8 },
                width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
              }}
            >
              <ElearningCourseList courses={courses} loading={isLoading} />
            </Box>
          </Stack>
        </Container>
        <NewsletterElearning />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

ElearningCoursesPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
