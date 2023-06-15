import { useState } from 'react';
// next
import Head from 'next/head';
// @mui
import { Box, Container, Tab, Tabs } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// layouts
import MainLayout from 'src/layouts/main';
// components
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
// sections
import {
  Inview,
  OtherView,
  ScrollView,
  DialogView,
  BackgroundView,
} from 'src/sections/examples/animate';

// ----------------------------------------------------------------------

const TABS = [
  { value: 'inview', label: 'In View', component: <Inview /> },
  { value: 'scroll', label: 'Scroll', component: <ScrollView /> },
  { value: 'dialog', label: 'Dialog', component: <DialogView /> },
  { value: 'background', label: 'Background', component: <BackgroundView /> },
  { value: 'other', label: 'Other', component: <OtherView /> },
];

// ----------------------------------------------------------------------

DemoAnimatePage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function DemoAnimatePage() {
  const [currentTab, setCurrentTab] = useState('inview');

  return (
    <>
      <Head>
        <title>Components: Animate | ZONE UI</title>
      </Head>

      <Box
        sx={{
          pt: 6,
          pb: 1,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
        }}
      >
        <Container>
          <CustomBreadcrumbs
            heading="Animate"
            links={[
              {
                name: 'Components',
                href: paths.components.root,
              },
              { name: 'Animate' },
            ]}
            moreLink={['https://www.framer.com/api/motion']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)}>
          {TABS.map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </Tabs>

        {TABS.map(
          (tab) =>
            tab.value === currentTab && (
              <Box key={tab.value} sx={{ mt: 5 }}>
                {tab.component}
              </Box>
            )
        )}
      </Container>
    </>
  );
}
