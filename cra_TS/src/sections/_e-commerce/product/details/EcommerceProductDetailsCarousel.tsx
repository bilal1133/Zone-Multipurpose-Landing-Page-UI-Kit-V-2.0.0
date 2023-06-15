import { useState, useRef, useEffect } from 'react';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// components
import Image from 'src/components/image';
import Carousel, { CarouselArrows } from 'src/components/carousel';
import Lightbox, { useLightBox } from 'src/components/lightbox';

// ----------------------------------------------------------------------

const THUMB_SIZE = 64;

type StyledThumbnailsContainerProps = {
  length: number;
};

const StyledThumbnailsContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'length',
})<StyledThumbnailsContainerProps>(({ length, theme }) => ({
  margin: theme.spacing(0, 'auto'),
  position: 'relative',

  '& .slick-slide': {
    opacity: 0.48,
    '&.slick-current': {
      opacity: 1,
    },
    '& > div': {
      padding: theme.spacing(0, 0.75),
    },
  },

  ...(length === 1 && {
    maxWidth: THUMB_SIZE * 1 + 16,
  }),
  ...(length === 2 && {
    maxWidth: THUMB_SIZE * 2 + 32,
  }),
  ...((length === 3 || length === 4) && {
    maxWidth: THUMB_SIZE * 3 + 48,
  }),
  ...(length >= 5 && {
    maxWidth: THUMB_SIZE * 6,
  }),
  ...(length > 2 && {
    '&:before, &:after': {
      ...bgGradient({
        direction: 'to left',
        startColor: `${alpha(theme.palette.background.default, 0)} 0%`,
        endColor: `${theme.palette.background.default} 100%`,
      }),
      top: 0,
      zIndex: 9,
      content: "''",
      height: '100%',
      position: 'absolute',
      width: (THUMB_SIZE * 2) / 3,
    },
    '&:after': {
      right: 0,
      transform: 'scaleX(-1)',
    },
  }),
}));

// ----------------------------------------------------------------------

type Props = {
  images: string[];
};

export default function EcommerceProductDetailsCarousel({ images }: Props) {
  const theme = useTheme();

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

  const carousel1 = useRef<Carousel | null>(null);

  const carousel2 = useRef<Carousel | null>(null);

  const [nav1, setNav1] = useState<Carousel>();

  const [nav2, setNav2] = useState<Carousel>();

  const carouselSettings1 = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const carouselSettings2 = {
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    variableWidth: true,
    centerPadding: '0px',
    slidesToShow: slides.length > 3 ? 3 : slides.length,
  };

  useEffect(() => {
    if (carousel1.current) {
      setNav1(carousel1.current);
    }
    if (carousel2.current) {
      setNav2(carousel2.current);
    }
  }, []);

  useEffect(() => {
    if (openLightbox) {
      carousel1.current?.slickGoTo(selectedImage);
    }
  }, [openLightbox, selectedImage]);

  const handlePrev = () => {
    carousel2.current?.slickPrev();
  };

  const handleNext = () => {
    carousel2.current?.slickNext();
  };

  const renderLargeImg = (
    <Box
      sx={{
        mb: 3,
        borderRadius: 3,
        overflow: 'hidden',
        position: 'relative',
        bgcolor: 'background.neutral',
      }}
    >
      <CarouselArrows onNext={handleNext} onPrev={handlePrev}>
        <Carousel {...carouselSettings1} asNavFor={nav2} ref={carousel1}>
          {slides.map((slide) => (
            <Image
              key={slide.src}
              alt="product"
              src={slide.src}
              ratio="1/1"
              onClick={() => handleOpenLightbox(slide.src)}
              sx={{ cursor: 'zoom-in' }}
            />
          ))}
        </Carousel>
      </CarouselArrows>
    </Box>
  );

  const renderThumbnails = (
    <StyledThumbnailsContainer
      length={slides.length}
      sx={{
        '& .slick-current img': {
          borderRadius: 1.5,
          border: `solid 2px ${theme.palette.primary.main}`,
        },
      }}
    >
      <Carousel {...carouselSettings2} asNavFor={nav1} ref={carousel2}>
        {slides.map((slide) => (
          <Image
            className="thumbnail"
            key={slide.src}
            disabledEffect
            alt="thumbnail"
            src={slide.src}
            sx={{
              width: THUMB_SIZE,
              height: THUMB_SIZE,
              borderRadius: 1.5,
              cursor: 'pointer',
            }}
          />
        ))}
      </Carousel>
    </StyledThumbnailsContainer>
  );

  return (
    <>
      <Box
        sx={{
          '& .slick-slide': {
            float: theme.direction === 'rtl' ? 'right' : 'left',
          },
        }}
      >
        {renderLargeImg}

        {renderThumbnails}
      </Box>

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
