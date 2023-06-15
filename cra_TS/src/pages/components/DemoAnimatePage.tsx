import { useState } from 'react';

import { Helmet } from 'react-helmet-async';
// @mui
import { Box, Container, Tab, Tabs } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
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

export default function DemoAnimatePage() {
  const [currentTab, setCurrentTab] = useState('inview');

  return (
    <>
      <Helmet>
        <title>Components: Animate | ZONE UI</title>
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
