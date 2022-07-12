// icons
import checkmarkFilled from '@iconify/icons-carbon/checkmark-filled';
// @mui
import { Stack, Typography, Avatar, Button, Box, Paper } from '@mui/material';
// @types
import { AuthorProps } from '../../../@types/author';
// components
import { SocialsButton, RatingLabel, Iconify } from '../../../components';

// ----------------------------------------------------------------------

type Props = {
  tourGuide: AuthorProps;
};

export default function TravelTourGuideInfo({ tourGuide }: Props) {
  const { name, about, quotes, reviews, ratings, verified, picture, socialLinks } = tourGuide;

  return (
    <Paper variant="outlined" sx={{ borderRadius: 2 }}>
      <Stack alignItems="center" sx={{ textAlign: 'center', p: 5 }}>
        <Box sx={{ position: 'relative' }}>
          {verified && (
            <Box
              sx={{
                width: 20,
                height: 20,
                bottom: 4,
                right: 4,
                zIndex: 9,
                borderRadius: '50%',
                position: 'absolute',
                bgcolor: 'background.default',
              }}
            >
              <Iconify
                icon={checkmarkFilled}
                sx={{
                  width: 1,
                  height: 1,
                  color: 'success.main',
                }}
              />
            </Box>
          )}

          <Avatar src={picture} sx={{ width: 96, height: 96 }} />
        </Box>

        <Stack spacing={1} sx={{ my: 2 }}>
          <Typography variant="h4">{name}</Typography>
          <RatingLabel ratings={ratings} reviews={reviews} />
        </Stack>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {about}
        </Typography>

        <Stack alignItems="center" sx={{ my: 2.5 }}>
          <SocialsButton initialColor links={socialLinks} />
        </Stack>

        <Typography variant="caption" paragraph sx={{ color: 'text.disabled' }}>
          {quotes}
        </Typography>

        <Button color="inherit" variant="outlined" size="large">
          Contact Tour Guide
        </Button>
      </Stack>
    </Paper>
  );
}
