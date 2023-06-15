// @mui
import { Stack, Typography, Link, Paper } from '@mui/material';
// types
import { IJobProps } from 'src/types/job';
// components
import Image from 'src/components/image';

// ----------------------------------------------------------------------

type Props = {
  job: IJobProps;
};

export default function CareerJobDetailsCompanyInfo({ job }: Props) {
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
          <Link variant="body2" sx={{ color: 'text.secondary' }}>
            View Company Profile
          </Link>
        </Stack>
      </Stack>
    </Paper>
  );
}
