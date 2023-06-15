import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import {
  Divider,
  Stack,
  Card,
  Typography,
  Link,
  Checkbox,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// utils
import { fDate } from 'src/utils/formatTime';
import { fCurrency } from 'src/utils/formatNumber';
// types
import { IJobProps } from 'src/types/job';
// components
import Image from 'src/components/image';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

type Props = {
  job: IJobProps;
};

export default function CareerJobItem({ job }: Props) {
  const {
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
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >
      <Checkbox
        color="error"
        checked={favorite}
        onChange={handleChangeFavorite}
        icon={<Iconify icon="carbon:favorite" />}
        checkedIcon={<Iconify icon="carbon:favorite-filled" />}
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
          <Link component={RouterLink} to={paths.career.job} color="inherit">
            <TextMaxLine variant="h6" line={1}>
              {slug}
            </TextMaxLine>
          </Link>

          <Typography variant="body2" sx={{ color: 'info.main' }}>
            {companyName}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            sx={{ typography: 'body2', color: 'text.secondary' }}
          >
            <Iconify icon="carbon:location" width={18} sx={{ mr: 0.5 }} />
            {location}
          </Stack>
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
          typography: 'body2',
          color: 'text.secondary',
          textTransform: 'capitalize',
        }}
      >
        <Grid xs={6}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:increase-level" sx={{ mr: 1 }} />
            {`${experience} year exp`}
          </Stack>
        </Grid>

        <Grid xs={6}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:time" sx={{ mr: 1 }} />
            {type}
          </Stack>
        </Grid>

        <Grid xs={6}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:money" sx={{ mr: 1 }} />
            {typeof salary === 'number' ? fCurrency(salary) : salary}
          </Stack>
        </Grid>

        <Grid xs={6}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:user" sx={{ mr: 1 }} />
            {level}
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}
