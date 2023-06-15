// @mui
import { Box, Stack, Paper, Badge, Avatar, Button, Typography, IconButton } from '@mui/material';
// utils
import { fShortenNumber } from 'src/utils/formatNumber';
// types
import { IAuthorProps } from 'src/types/author';
// _mock
import { _socials } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  tourGuide: IAuthorProps;
};

export default function ReviewTourGuideInfo({ tourGuide }: Props) {
  const { name, about, quotes, reviews, ratings, verified, picture } = tourGuide;

  return (
    <Paper variant="outlined" sx={{ borderRadius: 2 }}>
      <Stack alignItems="center" sx={{ textAlign: 'center', p: 5 }}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            verified ? (
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  bgcolor: 'background.default',
                }}
              >
                <Iconify icon="carbon:checkmark-filled" sx={{ color: 'success.main' }} />
              </Box>
            ) : null
          }
        >
          <Avatar src={picture} sx={{ width: 96, height: 96 }} />
        </Badge>

        <Stack spacing={1} sx={{ my: 2 }}>
          <Typography variant="h4">{name}</Typography>

          <Stack spacing={0.5} direction="row" alignItems="center">
            <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />

            <Box sx={{ typography: 'h6' }}>
              {Number.isInteger(ratings) ? `${ratings}.0` : ratings}
            </Box>

            <Box sx={{ typography: 'body2', color: 'text.secondary' }}>
              ({reviews ? fShortenNumber(reviews) : 0} reviews)
            </Box>
          </Stack>
        </Stack>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {about}
        </Typography>

        <Stack direction="row" sx={{ my: 2.5 }}>
          {_socials.map((social) => (
            <IconButton key={social.value}>
              <Iconify icon={social.icon} sx={{ color: social.color }} />
            </IconButton>
          ))}
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
