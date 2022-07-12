// @mui
import { Stack, Typography, Link, Paper } from '@mui/material';
// @types
import { JobProps } from '../../../@types/career';
// components
import { Image } from '../../../components';

// ----------------------------------------------------------------------

type Props = {
  job: JobProps;
};

export default function CareerJobCompanyInfo({ job }: Props) {
  const { companyLogo, companyName } = job;

  return (
    <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, bgcolor: 'background.default' }}>
      <Stack spacing={2} direction="row" alignItems="center">
        <Image
          alt={companyName}
          src={companyLogo}
          sx={{ width: 48, height: 48, borderRadius: 1 }}
        />

        <Stack spacing={0.5}>
          <Typography variant="h6">{companyName}</Typography>
          <Link variant="body3" sx={{ color: 'text.secondary' }}>
            View Company Profile
          </Link>
        </Stack>
      </Stack>
    </Paper>
  );
}
