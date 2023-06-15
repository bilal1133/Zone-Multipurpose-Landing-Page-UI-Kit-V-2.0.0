import { useState } from 'react';
// next
import Head from 'next/head';
// @mui
import { Box, Container, Fab, Stack } from '@mui/material';
// _mock
import _mock from 'src/_mock';
// routes
import { paths } from 'src/routes/paths';
// layouts
import MainLayout from 'src/layouts/main';
// components
import Iconify from 'src/components/iconify';
import Player, { PlayerDialog } from 'src/components/player';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

DemoPlayerPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function DemoPlayerPage() {
  const [openVideo, setOpenVideo] = useState(false);

  const handleOpenVideo = () => {
    setOpenVideo(true);
  };

  const handleCloseVideo = () => {
    setOpenVideo(false);
  };

  return (
    <>
      <Head>
        <title>Components: Player | ZONE UI</title>
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
            heading="Player"
            links={[
              {
                name: 'Components',
                href: paths.components.root,
              },
              { name: 'Player' },
            ]}
            moreLink={['https://www.npmjs.com/package/react-player']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Box gap={3} display="grid" gridTemplateColumns="repeat(2, 1fr)">
          <Player controls url={_mock.video(0)} />

          <Stack alignItems="center" justifyContent="center">
            <Fab color="primary" variant="extended" onClick={handleOpenVideo}>
              <Iconify icon="carbon:play" width={24} />
              Open with Dialog
            </Fab>
          </Stack>
        </Box>
      </Container>

      <PlayerDialog open={openVideo} onClose={handleCloseVideo} videoPath={_mock.video(0)} />
    </>
  );
}
