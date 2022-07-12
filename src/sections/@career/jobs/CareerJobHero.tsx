import { useState } from 'react';
// icons
import viewIcon from '@iconify/icons-carbon/view';
import locationIcon from '@iconify/icons-carbon/location';
import baggageClaim from '@iconify/icons-carbon/baggage-claim';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Stack, Box, Link, Button, Container } from '@mui/material';
// routes
import Routes from '../../../routes';
// utils
import { fDate } from '../../../utils/formatTime';
import cssStyles from '../../../utils/cssStyles';
// @types
import { JobProps } from '../../../@types/career';
// components
import { FavoriteButton, Breadcrumbs, TextIconLabel, Iconify } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(10),
  ...cssStyles(theme).bgImage(),
}));

// ----------------------------------------------------------------------

type Props = {
  job: JobProps;
};

export default function CareerJobHero({ job }: Props) {
  const { slug, category, views, location, deadline, favorited } = job;

  const [favorite, setFavorite] = useState(favorited);

  const handleChangeFavorite = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  };

  return (
    <RootStyle>
      <Container>
        <Breadcrumbs
          onDark
          links={[
            { name: 'Home', href: '/' },
            { name: 'Jobs', href: Routes.career.jobs },
            { name: job.slug },
          ]}
          sx={{
            mb: { xs: 5, md: 8 },
          }}
        />

        <Stack
          spacing={5}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Stack spacing={{ xs: 3, md: 2 }} sx={{ color: 'common.white' }}>
            <Typography variant="h3" component="h1">
              {slug}
            </Typography>

            <Stack spacing={3} direction={{ xs: 'column', md: 'row' }} sx={{ opacity: 0.48 }}>
              <TextIconLabel
                icon={<Iconify icon={baggageClaim} sx={{ width: 20, height: 20, mr: 1 }} />}
                value={
                  <Link color="inherit" underline="always">
                    {category}
                  </Link>
                }
              />
              <TextIconLabel
                icon={<Iconify icon={viewIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
                value={`${views} views`}
              />
              <TextIconLabel
                icon={<Iconify icon={locationIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
                value={location}
              />
            </Stack>
          </Stack>

          <Stack
            spacing={2}
            direction="row"
            alignItems="flex-start"
            sx={{ width: 1, maxWidth: 340 }}
          >
            <Stack spacing={2} alignItems="center" sx={{ width: 1 }}>
              <Button fullWidth variant="contained" size="large">
                Apply Now
              </Button>
              <Typography variant="body3" sx={{ color: 'common.white' }}>
                Expiration date:{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  {fDate(deadline)}
                </Box>
              </Typography>
            </Stack>

            <Box sx={{ pt: 0.75 }}>
              <FavoriteButton
                checked={favorite}
                onChange={handleChangeFavorite}
                sx={{ '& svg': { width: 24, height: 24 } }}
              />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}
