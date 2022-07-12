import { m } from 'framer-motion';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
// @mui
import { useTheme } from '@mui/material/styles';
import { Typography, Box, Stack } from '@mui/material';
// components
import { Image, CarouselArrows, LightboxModal } from '../../../components';
import { varHover, varTranHover } from '../../../components/animate';

// ----------------------------------------------------------------------

type Props = {
  images: string[];
};

export default function MarketingCaseStudyGallery({ images }: Props) {
  const theme = useTheme();
  const carouselRef = useRef<Slider | null>(null);

  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const carouselSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  const handleOpenLightbox = (url: string) => {
    const selectedImage = images.findIndex((index) => url === index);
    setOpenLightbox(true);
    setSelectedImage(selectedImage);
  };

  return (
    <>
      <Stack direction="row" justifyContent={{ md: 'space-between' }} sx={{ mt: 3, mb: 5 }}>
        <Typography variant="h3">Gallery</Typography>
        <CarouselArrows onNext={handleNext} onPrevious={handlePrevious} />
      </Stack>

      <Slider ref={carouselRef} {...carouselSettings}>
        {images.map((img) => (
          <Box
            key={img}
            component={m.div}
            whileHover="hover"
            sx={{ px: 1 }}
            onClick={() => handleOpenLightbox(img)}
          >
            <Box sx={{ borderRadius: 2, overflow: 'hidden', cursor: 'pointer' }}>
              <m.div variants={varHover(1.25)} transition={varTranHover()}>
                <Image alt={img} src={img} ratio="4/3" />
              </m.div>
            </Box>
          </Box>
        ))}
      </Slider>

      <LightboxModal
        images={images}
        mainSrc={images[selectedImage]}
        photoIndex={selectedImage}
        setPhotoIndex={setSelectedImage}
        isOpen={openLightbox}
        onCloseRequest={() => setOpenLightbox(false)}
      />
    </>
  );
}
