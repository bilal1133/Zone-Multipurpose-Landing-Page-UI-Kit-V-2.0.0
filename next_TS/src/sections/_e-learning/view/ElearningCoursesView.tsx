import { useState, useEffect } from 'react';
// @mui
import { Container, Stack, Typography, Button, Box } from '@mui/material';
// config
import { NAV } from 'src/config-global';
// _mock
import { _courses } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
//
import NewsletterElearning from '../../newsletter/e-learning';
import { ElearningCourseList } from '../course/list';
import ElearningFilters from '../course/filters';

// ----------------------------------------------------------------------

export default function ElearningCoursesView() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    fakeLoading();
  }, []);

  const handleMobileOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            py: 5,
          }}
        >
          <Typography variant="h2">Courses</Typography>

          <Button
            color="inherit"
            variant="contained"
            startIcon={<Iconify icon="carbon:filter" width={18} />}
            onClick={handleMobileOpen}
            sx={{
              display: { md: 'none' },
            }}
          >
            Filters
          </Button>
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }}>
          <ElearningFilters mobileOpen={mobileOpen} onMobileClose={handleMobileClose} />

          <Box
            sx={{
              flexGrow: 1,
              pl: { md: 8 },
              width: { md: `calc(100% - ${NAV.W_DRAWER}px)` },
            }}
          >
            <ElearningCourseList courses={_courses} loading={loading} />
          </Box>
        </Stack>
      </Container>

      <NewsletterElearning />
    </>
  );
}
