import { m } from 'framer-motion';
import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// components
import { Image, LightboxModal } from '../../../components';
import { varTranHover } from '../../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  gallery: string[];
};

export default function TravelTourGallery({ gallery }: Props) {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const handleOpenLightbox = (url: string) => {
    const selectedImage = gallery.findIndex((index) => url === index);

    setOpenLightbox(true);
    setSelectedImage(selectedImage);
  };

  return (
    <RootStyle>
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          },
        }}
      >
        <PhotoItem photo={gallery[0]} onOpenLightbox={() => handleOpenLightbox(gallery[0])} />

        <Box
          sx={{
            display: 'grid',
            gap: 1,
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          {gallery.slice(1, 5).map((photo) => (
            <PhotoItem key={photo} photo={photo} onOpenLightbox={() => handleOpenLightbox(photo)} />
          ))}
        </Box>
      </Box>

      <LightboxModal
        images={gallery}
        mainSrc={gallery[selectedImage]}
        photoIndex={selectedImage}
        setPhotoIndex={setSelectedImage}
        isOpen={openLightbox}
        onCloseRequest={() => setOpenLightbox(false)}
      />
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type PhotoItemProps = {
  photo: string;
  onOpenLightbox: VoidFunction;
};

function PhotoItem({ photo, onOpenLightbox }: PhotoItemProps) {
  return (
    <m.div
      whileHover="hover"
      variants={{
        hover: { opacity: 0.8 },
      }}
      transition={varTranHover()}
    >
      <Image
        alt="photo"
        src={photo}
        ratio="1/1"
        onClick={onOpenLightbox}
        sx={{ borderRadius: 2, cursor: 'pointer' }}
      />
    </m.div>
  );
}
