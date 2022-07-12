import Slider from 'react-slick';
import { MDXRemote } from 'next-mdx-remote';
import { useState, useRef, ReactNode, ReactElement } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
// icons
import batIcon from '@iconify/icons-carbon/bat';
import playIcon from '@iconify/icons-carbon/play';
import areaIcon from '@iconify/icons-carbon/area';
import beeBat from '@iconify/icons-carbon/bee-bat';
import cyclistIcon from '@iconify/icons-carbon/cyclist';
import airport01 from '@iconify/icons-carbon/airport-01';
import apertureIcon from '@iconify/icons-carbon/aperture';
import batteryFull from '@iconify/icons-carbon/battery-full';
import basketballIcon from '@iconify/icons-carbon/basketball';
import icon3dCursorAlt from '@iconify/icons-carbon/3d-cursor-alt';
import icon3dMprToggle from '@iconify/icons-carbon/3d-mpr-toggle';
// next
import dynamic from 'next/dynamic';
// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  Link,
  Grid,
  Stack,
  Divider,
  SxProps,
  BoxProps,
  FabProps,
  Container,
  Typography,
  IconButtonProps,
} from '@mui/material';
// utils
import { getAllComponentSlugs, getComponentData } from '../../src/utils/get-mardown/components-ui';
// _data
import _mock, { _offices } from '../../_data/mock';
// routes
import Routes from '../../src/routes';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT, DRAWER_WIDTH } from '../../src/config';
// @types
import { ComponentProps } from './';
// layouts
import Layout from '../../src/layouts';
// components
import { components as MDXComponents, RootStyle as MDXStyle } from '../../src/components/Markdown';
import {
  Page,
  Label,
  Image,
  Iconify,
  Scrollbar,
  NavSection,
  Breadcrumbs,
  TextMaxLine,
  ShareButton,
  CarouselDots,
  SvgIconStyle,
  CountUpNumber,
  LightboxModal,
  FavoriteButton,
  CarouselArrows,
  AppStoreButton,
  PlayerWithImage,
  PlayerWithButton,
  FabButtonAnimate,
  IconButtonAnimate,
} from '../../src/components';
//
const ContactMap = dynamic(() => import('../../src/components/map/ContactMap'));

// ----------------------------------------------------------------------

const IMAGES = [...Array(6)].map((_, index) => _mock.image.travel(index));

const NAV_ITEMS = [
  {
    subheader: 'Marketing',
    items: [
      { title: 'Landing', path: '/marketing', icon: <Iconify icon={batIcon} /> },
      {
        title: 'Services',
        path: '/marketing/services',
        icon: <Iconify icon={cyclistIcon} />,
      },
      {
        title: 'Case Studies',
        path: '/marketing/case-studies',
        icon: <Iconify icon={icon3dCursorAlt} />,
        children: [
          { title: 'Case Studies', path: '/marketing/case-studies' },
          { title: 'Case Study', path: '/marketing/case-studies/case-study-01' },
        ],
      },
      {
        title: 'Blog',
        path: '/marketing/blog',
        icon: <Iconify icon={icon3dMprToggle} />,
        children: [
          { title: 'Blog Posts', path: '/marketing/blog' },
          { title: 'Blog Post', path: '/marketing/blog/post-01' },
        ],
      },
      { title: 'About', path: '/marketing/about-us', icon: <Iconify icon={airport01} /> },
      { title: 'Contact', path: '/marketing/contact-us', icon: <Iconify icon={batteryFull} /> },
      //
    ],
  },
  {
    subheader: 'Travel',
    items: [
      { title: 'Landing', path: '/travel', icon: <Iconify icon={apertureIcon} /> },
      {
        title: 'Tours',
        path: '/travel/tours',
        icon: <Iconify icon={basketballIcon} />,
        children: [
          { title: 'Tours', path: '/travel/tours' },
          { title: 'Tour', path: '/travel/tours/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1' },
        ],
      },
      {
        title: 'Checkout',
        path: '/travel/checkout',
        icon: <Iconify icon={areaIcon} />,
        children: [
          { title: 'Checkout', path: '/travel/checkout' },
          { title: 'Checkout Complete', path: '/travel/checkout/complete' },
        ],
      },
      {
        title: 'Blog',
        path: '/travel/blog',
        icon: <Iconify icon={playIcon} />,
        children: [
          { title: 'Blog Posts', path: '/travel/blog' },
          { title: 'Blog Post', path: '/travel/blog/post-01' },
        ],
      },
      { title: 'About', path: '/travel/about-us', icon: <Iconify icon={cyclistIcon} /> },
      { title: 'Contact', path: '/travel/contact-us', icon: <Iconify icon={beeBat} /> },
    ],
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
    paddingBottom: theme.spacing(15),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  component: ComponentProps;
};

export default function ComponentUIPage({ component }: Props) {
  const { content, frontmatter } = component;
  const { title, link } = frontmatter;

  return (
    <Page title={`${title} - Components`}>
      <RootStyle>
        <Container>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={10}>
              <Breadcrumbs
                links={[{ name: 'Components', href: Routes.componentsUI }, { name: title }]}
                sx={{ my: 3 }}
              />

              <Stack spacing={2} alignItems="flex-start">
                <Typography variant="h3">{title}</Typography>
                {link && (
                  <Typography variant="body2">
                    Ref: <Link>{link}</Link>
                  </Typography>
                )}
              </Stack>

              <Divider sx={{ my: 5 }} />

              <MDXStyle>
                <MDXRemote {...content} components={components} />
              </MDXStyle>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

ComponentUIPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

const components = {
  ...MDXComponents,
  Block,
  Label,
  Iconify,
  Lightbox,
  Carousel,
  Scrollbar,
  Breadcrumbs,
  ShareButton,
  TextMaxLine,
  PlayerButton,
  SvgIconStyle,
  CountUpNumber,
  FavoriteButton,
  AppStoreButton,
  PlayerImage: () => (
    <PlayerWithImage
      imgPath="https://zone-assets-api.vercel.app/assets/images/travel/travel_hero_4.jpg"
      videoPath={_mock.video}
    />
  ),
  IconButton: (props: IconButtonProps) => (
    <IconButtonAnimate {...props}>
      <Iconify icon={playIcon} />
    </IconButtonAnimate>
  ),
  FabButton: (props: FabProps) => (
    <FabButtonAnimate {...props}>
      <Iconify icon={playIcon} />
      {props.children}
    </FabButtonAnimate>
  ),
  NavSection: () => (
    <NavSection
      navConfig={NAV_ITEMS}
      sx={{
        py: 5,
        borderRadius: 2,
        maxWidth: DRAWER_WIDTH,
        bgcolor: 'background.default',
        boxShadow: (theme) => theme.customShadows.z24,
      }}
    />
  ),
  ContactMap: () => <ContactMap offices={_offices} />,
};

// ----------------------------------------------------------------------

interface BlockProps extends BoxProps {
  children: ReactNode;
  sx?: SxProps;
}

function Block({ children, sx }: BlockProps) {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 1,
        bgcolor: 'background.neutral',
        '& p': { mb: 0 },
        '& ul, & ol': { mb: '0 !important' },
        border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

// ----------------------------------------------------------------------

function PlayerButton() {
  const [openVideo, setOpenVideo] = useState(false);

  const handleOpenVideo = () => {
    setOpenVideo(true);
  };

  const handleCloseVideo = () => {
    setOpenVideo(false);
  };

  return (
    <>
      <FabButtonAnimate onClick={handleOpenVideo}>
        <Iconify icon={playIcon} />
      </FabButtonAnimate>
      <PlayerWithButton open={openVideo} onClose={handleCloseVideo} videoPath={_mock.video} />
    </>
  );
}

// ----------------------------------------------------------------------

function Lightbox() {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const handleOpenLightbox = (url: string) => {
    const selectedImage = IMAGES.findIndex((index) => url === index);

    setOpenLightbox(true);
    setSelectedImage(selectedImage);
  };

  return (
    <>
      <Stack direction="row" spacing={2}>
        {IMAGES.map((img) => (
          <Image
            key={img}
            alt={img}
            src={img}
            onClick={() => handleOpenLightbox(img)}
            sx={{
              width: 120,
              height: 120,
              borderRadius: 2,
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          />
        ))}
      </Stack>

      <LightboxModal
        images={IMAGES}
        mainSrc={IMAGES[selectedImage]}
        photoIndex={selectedImage}
        setPhotoIndex={setSelectedImage}
        isOpen={openLightbox}
        onCloseRequest={() => setOpenLightbox(false)}
      />
    </>
  );
}

// ----------------------------------------------------------------------

function Carousel() {
  const carouselRef = useRef<Slider | null>(null);

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  const carouselSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    ...CarouselDots({ sx: { my: 3 } }),
  };

  return (
    <Container sx={{ position: 'relative' }}>
      <CarouselArrows
        onNext={handleNext}
        onPrevious={handlePrevious}
        sx={{
          '& .arrow': {
            mt: -5,
            '&.left': { left: -16 },
            '&.right': { right: -16 },
          },
        }}
      >
        <Slider ref={carouselRef} {...carouselSettings}>
          {IMAGES.map((img) => (
            <Box key={img} sx={{ px: 1 }}>
              <Image alt={img} src={img} sx={{ borderRadius: 2 }} />
            </Box>
          ))}
        </Slider>
      </CarouselArrows>
    </Container>
  );
}

// ----------------------------------------------------------------------

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const component = getComponentData(params.slug);

  return {
    props: {
      component: {
        ...component,
        content: await serialize(component.content),
      },
    },
  };
}

export async function getStaticPaths() {
  const files = getAllComponentSlugs();

  return {
    paths: files,
    fallback: false,
  };
}
