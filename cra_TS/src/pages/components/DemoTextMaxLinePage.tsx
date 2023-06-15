import { Helmet } from 'react-helmet-async';
// @mui
import Masonry from '@mui/lab/Masonry';
import { Box, Card, CardHeader, Container, CardContent } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// components
import TextMaxLine from 'src/components/text-max-line';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

export default function DemoTextMaxLinePage() {
  return (
    <>
      <Helmet>
        <title>Components: Text Max Line | ZONE UI</title>
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
            heading="TextMaxLine"
            links={[
              {
                name: 'Components',
                href: paths.components.root,
              },
              { name: 'TextMaxLine' },
            ]}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Masonry columns={3} spacing={3}>
          <Card>
            <CardHeader title="1 Line" />
            <CardContent>
              <TextMaxLine line={1}>
                Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna.
                Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc
                et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id
                tortor.
              </TextMaxLine>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="2 Line" />
            <CardContent>
              <TextMaxLine>
                Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna.
                Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc
                et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id
                tortor.
              </TextMaxLine>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="3 Line" />
            <CardContent>
              <TextMaxLine line={3}>
                Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna.
                Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc
                et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id
                tortor.
              </TextMaxLine>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="4 Line" />
            <CardContent>
              <TextMaxLine line={4}>
                Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna.
                Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc
                et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id
                tortor.
              </TextMaxLine>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="As Link" />
            <CardContent>
              <TextMaxLine asLink line={3} href="#" color="primary" sx={{ maxWidth: 300 }}>
                Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna.
                Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc
                et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id
                tortor.
              </TextMaxLine>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Persistent" />
            <CardContent>
              <TextMaxLine persistent line={3} href="#" sx={{ bgcolor: 'background.neutral' }}>
                Donec posuere vulputate arcu.
              </TextMaxLine>
            </CardContent>
          </Card>
        </Masonry>
      </Container>
    </>
  );
}
