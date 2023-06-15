import { m } from 'framer-motion';
import { useRef, useEffect } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Typography, Box, Stack } from '@mui/material';
// components
import Image from 'src/components/image';
import Lightbox, { useLightBox } from 'src/components/lightbox';
import Carousel, { CarouselArrows } from 'src/components/carousel';
import { varHover, varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

type Props = {
  images: string[];
};

export default function MarketingCaseStudyDetailsGallery({ images }: Props) {
  const theme = useTheme();

  const carouselRef = useRef<Carousel | null>(null);

  const slides = images.map((slide) => ({
    src: slide,
  }));

  const {
    selected: selectedImage,
    open: openLightbox,
    onOpen: handleOpenLightbox,
    onClose: handleCloseLightbox,
    setSelected: setSelectedImage,
  } = useLightBox(slides);

  useEffect(() => {
    if (openLightbox) {
      carouselRef.current?.slickGoTo(selectedImage);
    }
  }, [openLightbox, selectedImage]);

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  const carouselSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
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

  return (
    <>
      <Stack direction="row" justifyContent="space-between" sx={{ mt: 3, mb: 5 }}>
        <Typography variant="h4">Gallery</Typography>
        <CarouselArrows spacing={2} onNext={handleNext} onPrev={handlePrev} />
      </Stack>

      <Carousel ref={carouselRef} {...carouselSettings}>
        {slides.map((slide) => (
          <Box
            key={slide.src}
            component={m.div}
            whileHover="hover"
            sx={{ px: 1 }}
            onClick={() => handleOpenLightbox(slide.src)}
          >
            <Box sx={{ borderRadius: 2, overflow: 'hidden', cursor: 'pointer' }}>
              <m.div variants={varHover(1.25)} transition={varTranHover()}>
                <Image alt={slide.src} src={slide.src} ratio="4/3" />
              </m.div>
            </Box>
          </Box>
        ))}
      </Carousel>

      <Lightbox
        index={selectedImage}
        slides={slides}
        open={openLightbox}
        close={handleCloseLightbox}
        onGetCurrentIndex={(index) => setSelectedImage(index)}
      />
    </>
  );
}
