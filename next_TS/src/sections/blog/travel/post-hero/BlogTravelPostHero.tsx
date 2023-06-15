// @mui
import { alpha, useTheme } from '@mui/material/styles';
import {
  Box,
  Stack,
  Container,
  Typography,
  IconButton,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// utils
import { fDate } from 'src/utils/formatTime';
import { bgGradient } from 'src/utils/cssStyles';
// types
import { IBlogPostProps } from 'src/types/blog';
// _mock
import { _socials } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
};

export default function BlogTravelPostHero({ post }: Props) {
  const theme = useTheme();

  const { title, duration, createdAt, heroImg } = post;

  return (
    <Box
      sx={{
        py: 20,
        position: 'relative',
        ...bgGradient({
          startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
          endColor: `${theme.palette.common.black} 75%`,
          imgUrl: heroImg,
        }),
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <Stack
              spacing={3}
              alignItems={{
                xs: 'center',
                md: 'flex-start',
              }}
              sx={{
                color: 'common.white',
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              <Typography variant="body2" sx={{ opacity: 0.72 }}>
                {duration}
              </Typography>

              <Typography variant="h2" component="h1">
                {title}
              </Typography>

              <Typography variant="caption" sx={{ opacity: 0.72 }}>
                {fDate(createdAt, 'dd/MM/yyyy p')}
              </Typography>

              <Stack direction="row">
                {_socials.map((social) => (
                  <IconButton key={social.value}>
                    <Iconify icon={social.icon} sx={{ color: social.color }} />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
