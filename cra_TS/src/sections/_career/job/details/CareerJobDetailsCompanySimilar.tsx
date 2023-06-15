import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Stack, Typography, Link, Paper } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// utils
import { fDate } from 'src/utils/formatTime';
// types
import { IJobProps } from 'src/types/job';

// ----------------------------------------------------------------------

type Props = {
  jobs: IJobProps[];
};

export default function CareerJobDetailsCompanySimilar({ jobs }: Props) {
  return (
    <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, bgcolor: 'background.default' }}>
      <Typography variant="h5" sx={{ mb: 1 }}>
        Jobs From This Company
      </Typography>

      {jobs.map((job) => (
        <Stack
          key={job.id}
          spacing={0.5}
          sx={{
            py: 2,
            borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
            '&:last-child': {
              borderBottom: 0,
            },
          }}
        >
          <Link component={RouterLink} to={paths.career.job} variant="subtitle1" color="inherit">
            {job.slug}
          </Link>

          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            {fDate(job.deadline)}
          </Typography>
        </Stack>
      ))}
    </Paper>
  );
}
