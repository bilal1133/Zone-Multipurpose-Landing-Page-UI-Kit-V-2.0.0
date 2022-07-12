import { useState } from 'react';
// icons
import locationIcon from '@iconify/icons-carbon/location';
import timeIcon from '@iconify/icons-carbon/time';
import increaseLevel from '@iconify/icons-carbon/increase-level';
import moneyIcon from '@iconify/icons-carbon/money';
import userIcon from '@iconify/icons-carbon/user';
// next
import NextLink from 'next/link';
// @mui
import { Divider, Stack, Card, Typography, Grid } from '@mui/material';
// routes
import Routes from '../../../routes';
// utils
import { fDate } from '../../../utils/formatTime';
import { fCurrency } from '../../../utils/formatNumber';
// @types
import { JobProps } from '../../../@types/career';
// components
import {
  Image,
  Label,
  Iconify,
  TextMaxLine,
  TextIconLabel,
  FavoriteButton,
} from '../../../components';

// ----------------------------------------------------------------------

type Props = {
  job: JobProps;
};

export default function CareerJobItem({ job }: Props) {
  const {
    id,
    slug,
    type,
    level,
    salary,
    location,
    isUrgent,
    createdAt,
    favorited,
    experience,
    companyName,
    companyLogo,
  } = job;

  const [favorite, setFavorite] = useState(favorited);

  const handleChangeFavorite = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  };

  return (
    <Card
      sx={{
        boxShadow: (theme) => theme.customShadows.z8,
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >
      <FavoriteButton
        checked={favorite}
        onChange={handleChangeFavorite}
        sx={{ position: 'absolute', right: 16, top: 16 }}
      />

      <Stack sx={{ p: 3, pb: 0 }}>
        <Stack direction="row" alignItems="center" spacing={2.5}>
          <Image
            alt={companyName}
            src={companyLogo}
            sx={{ width: 48, height: 48, borderRadius: 1 }}
          />
          {isUrgent && <Label color="error">Urgent</Label>}
        </Stack>

        <Stack spacing={0.5} sx={{ mt: 3, mb: 2 }}>
          <NextLink as={Routes.career.job(id)} href={Routes.career.job('[id]')} passHref>
            <TextMaxLine variant="h6" asLink line={1}>
              {slug}
            </TextMaxLine>
          </NextLink>

          <Typography variant="body3" sx={{ color: 'secondary.main' }}>
            {companyName}
          </Typography>

          <TextIconLabel
            icon={<Iconify icon={locationIcon} sx={{ mr: 0.5, width: 18, height: 18 }} />}
            value={location}
            sx={{ typography: 'body3', color: 'text.secondary' }}
          />
        </Stack>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          Posted day: {fDate(createdAt)}
        </Typography>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed', my: 2 }} />

      <Grid
        container
        spacing={1.5}
        sx={{
          p: 3,
          pt: 0,
          typography: 'body3',
          color: 'text.secondary',
          textTransform: 'capitalize',
        }}
      >
        <Grid item xs={6}>
          <TextIconLabel
            icon={<Iconify icon={increaseLevel} sx={{ width: 20, height: 20, mr: 1 }} />}
            value={`${experience} year exp`}
          />
        </Grid>

        <Grid item xs={6}>
          <TextIconLabel
            icon={<Iconify icon={timeIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
            value={type}
          />
        </Grid>

        <Grid item xs={6}>
          <TextIconLabel
            icon={<Iconify icon={moneyIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
            value={typeof salary === 'number' ? fCurrency(salary) : salary}
          />
        </Grid>

        <Grid item xs={6}>
          <TextIconLabel
            icon={<Iconify icon={userIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
            value={level}
          />
        </Grid>
      </Grid>
    </Card>
  );
}
