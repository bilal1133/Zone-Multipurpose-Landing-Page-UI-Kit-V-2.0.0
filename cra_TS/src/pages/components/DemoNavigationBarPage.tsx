import { Helmet } from 'react-helmet-async';
// @mui
import { Box, Container } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// config
import { NAV } from 'src/config-global';
// components
import Iconify from 'src/components/iconify';
import { NavSectionVertical } from 'src/components/nav-section';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

export default function DemoNavigationBarPage() {
  return (
    <>
      <Helmet>
        <title>Components: Navigation Bar | ZONE UI</title>
      </Helmet>

      <Box
        sx={{
          pt: 6,
          pb: 1,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
        }}
      >
        <Container>
          <CustomBreadcrumbs
            heading="Navigation Bar"
            links={[
              {
                name: 'Components',
                href: paths.components.root,
              },
              { name: 'Navigation Bar' },
            ]}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <NavSectionVertical
          data={NAV_ITEMS}
          sx={{
            borderRadius: 2,
            bgcolor: 'background.paper',
            boxShadow: (theme) => theme.customShadows.z24,
            width: NAV.W_BASE,
          }}
        />
      </Container>
    </>
  );
}

// ----------------------------------------------------------------------

const NAV_ITEMS = [
  {
    subheader: 'Marketing',
    items: [
      {
        title: 'Landing',
        path: '#',
        icon: <Iconify icon="carbon:bat" />,
      },
      {
        title: 'Services',
        path: '#',
        icon: <Iconify icon="carbon:cyclist" />,
      },
      {
        title: 'Case Studies',
        path: '#',
        icon: <Iconify icon="carbon:3d-cursor-alt" />,
        children: [
          { title: 'Case Studies', path: '#' },
          { title: 'Case Study', path: '#' },
        ],
      },
      {
        title: 'Blog',
        path: '#',
        icon: <Iconify icon="carbon:3d-mpr-toggle" />,
        children: [
          { title: 'Blog Posts', path: '#' },
          { title: 'Blog Post', path: '#' },
        ],
      },
      {
        title: 'About',
        path: '#',
        icon: <Iconify icon="carbon:airport-01" />,
      },
      {
        title: 'Contact',
        path: '#',
        icon: <Iconify icon="carbon:battery-full" />,
      },
      {
        title: 'Tours',
        path: '#',
        icon: <Iconify icon="carbon:basketball" />,
        children: [
          { title: 'Tours', path: '#' },
          { title: 'Tour', path: '#' },
        ],
      },
      {
        title: 'Checkout',
        path: '#',
        icon: <Iconify icon="carbon:area" />,
        children: [
          { title: 'Checkout', path: '#' },
          { title: 'Checkout Complete', path: '#' },
        ],
      },
    ],
  },
  {
    subheader: 'Travel',
    items: [
      {
        title: 'Level 1',
        path: '#',
        icon: <Iconify icon="carbon:play" />,
        children: [
          { title: 'Level 2.1', path: '#' },
          { title: 'Level 2.2', path: '#' },
          {
            title: 'Level 2.3',
            path: '#',
            children: [
              { title: 'Level 3.1', path: '#' },
              { title: 'Level 3.2', path: '#' },
            ],
          },
        ],
      },
    ],
  },
];
