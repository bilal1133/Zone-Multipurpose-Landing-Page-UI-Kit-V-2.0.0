import { Helmet } from 'react-helmet-async';
// @mui
import { Box, Stack, Card, Container, CardHeader, CardContent } from '@mui/material';
import { Masonry } from '@mui/lab';
// routes
import { paths } from 'src/routes/paths';
// _mock
import _mock from 'src/_mock';
// components
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
// sections
import {
  CarouselBasic1,
  CarouselBasic2,
  CarouselBasic3,
  CarouselBasic4,
  CarouselAnimation,
  CarouselThumbnail,
  CarouselCenterMode,
} from 'src/sections/examples/carousel';

// ----------------------------------------------------------------------

const _carouselsExample = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.text.blogTitle(index),
  image: _mock.image.travel(index),
  description: _mock.text.description(index),
}));

// ----------------------------------------------------------------------

export default function DemoCarouselsPage() {
  return (
    <>
      <Helmet>
        <title>Components: Carousels | ZONE UI</title>
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
            heading="Carousel"
            links={[
              {
                name: 'Components',
                href: paths.components.root,
              },
              { name: 'Carousel' },
            ]}
            moreLink={['https://react-slick.neostack.com']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
          <Card>
            <CardHeader title="Carousel Basic 1" />
            <CardContent>
              <CarouselBasic1 data={_carouselsExample} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Carousel Basic 2" />
            <CardContent>
              <CarouselBasic2 data={_carouselsExample} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Carousel Basic 3" />
            <CardContent>
              <CarouselBasic3 data={_carouselsExample} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Carousel Basic 4" />
            <CardContent>
              <CarouselBasic4 data={_carouselsExample} />
            </CardContent>
          </Card>
        </Masonry>

        <Stack spacing={3}>
          <Card>
            <CardHeader title="Carousel Thumbnail" />
            <CardContent>
              <CarouselThumbnail data={_carouselsExample} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Carousel Center Mode" subheader="Customs shape & icon button" />
            <CardContent>
              <CarouselCenterMode data={_carouselsExample} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Carousel Animation" />
            <CardContent>
              <CarouselAnimation data={_carouselsExample} />
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
