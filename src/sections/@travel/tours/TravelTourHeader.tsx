import { useState } from 'react';
// icons
import locationIcon from '@iconify/icons-carbon/location';
// @mui
import { Typography, Stack, Link, Avatar } from '@mui/material';
// @types
import { TourProps } from '../../../@types/travel';
// components
import {
  Iconify,
  ShareButton,
  RatingLabel,
  TextIconLabel,
  FavoriteButton,
} from '../../../components';

// ----------------------------------------------------------------------

type Props = {
  tour: TourProps;
};

export default function TravelTourHeader({ tour }: Props) {
  const { slug, ratings, reviews, location, favorited, tourGuide } = tour;

  const [favorite, setFavorite] = useState(favorited);

  const handleChangeFavorite = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  };

  return (
    <>
      <Stack
        spacing={3}
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        <Typography variant="h3" component="h1" sx={{ flexGrow: 1, pr: { md: 10 } }}>
          {slug}
        </Typography>
        <Stack direction="row" alignItems="center" flexShrink={0}>
          <ShareButton />
          <FavoriteButton checked={favorite} onChange={handleChangeFavorite} />
        </Stack>
      </Stack>

      <Stack spacing={3} direction={{ xs: 'column', md: 'row' }}>
        <RatingLabel ratings={ratings} reviews={reviews} />

        <TextIconLabel
          icon={<Iconify icon={locationIcon} sx={{ width: 20, height: 20, mr: 0.5 }} />}
          value={location}
        />

        <TextIconLabel
          icon={<Avatar src={tourGuide?.picture} sx={{ width: 24, height: 24 }} />}
          value={
            <>
              <Typography variant="body3" sx={{ color: 'text.secondary', mx: 0.5 }}>
                Tour guide by
              </Typography>
              <Link variant="subtitle2" color="inherit">
                {tourGuide?.name}
              </Link>
            </>
          }
        />
      </Stack>
    </>
  );
}
