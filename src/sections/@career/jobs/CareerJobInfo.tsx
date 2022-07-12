// icons
import calendarIcon from '@iconify/icons-carbon/calendar';
import hourglassIcon from '@iconify/icons-carbon/hourglass';
import moneyIcon from '@iconify/icons-carbon/money';
import increaseLevel from '@iconify/icons-carbon/increase-level';
import userIcon from '@iconify/icons-carbon/user';
import translateIcon from '@iconify/icons-carbon/translate';
// @mui
import { Stack, Typography, Card } from '@mui/material';
// @types
import { fCurrency } from '../../../utils/formatNumber';
import { fDate } from '../../../utils/formatTime';
// @types
import { JobProps } from '../../../@types/career';
// components
import { Iconify, TextIconLabel } from '../../../components';

// ----------------------------------------------------------------------

type Props = {
  job: JobProps;
};

export default function CareerJobInfo({ job }: Props) {
  const { createdAt, salary, experience, deadline, level, languages } = job;

  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={2}>
        <TextIconLabel
          spacing={2}
          alignItems="flex-start"
          icon={<Iconify icon={calendarIcon} sx={{ width: 24, height: 24 }} />}
          value={
            <Stack>
              <Typography variant="subtitle2"> Date Posted </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {fDate(createdAt)}
              </Typography>
            </Stack>
          }
        />

        <TextIconLabel
          spacing={2}
          alignItems="flex-start"
          icon={<Iconify icon={hourglassIcon} sx={{ width: 24, height: 24 }} />}
          value={
            <Stack>
              <Typography variant="subtitle2"> Expiration date </Typography>
              <Typography variant="body2" sx={{ color: 'error.main' }}>
                {fDate(deadline)}
              </Typography>
            </Stack>
          }
        />

        <TextIconLabel
          spacing={2}
          alignItems="flex-start"
          icon={<Iconify icon={moneyIcon} sx={{ width: 24, height: 24 }} />}
          value={
            <Stack>
              <Typography variant="subtitle2"> Offered Salary (month) </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {typeof salary === 'number' ? fCurrency(salary) : salary}
              </Typography>
            </Stack>
          }
        />

        <TextIconLabel
          spacing={2}
          alignItems="flex-start"
          icon={<Iconify icon={increaseLevel} sx={{ width: 24, height: 24 }} />}
          value={
            <Stack>
              <Typography variant="subtitle2"> Experience </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {`${experience} year exp`}
              </Typography>
            </Stack>
          }
        />

        <TextIconLabel
          spacing={2}
          alignItems="flex-start"
          icon={<Iconify icon={userIcon} sx={{ width: 24, height: 24 }} />}
          value={
            <Stack>
              <Typography variant="subtitle2"> Level </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {level}
              </Typography>
            </Stack>
          }
        />

        <TextIconLabel
          spacing={2}
          alignItems="flex-start"
          icon={<Iconify icon={translateIcon} sx={{ width: 24, height: 24 }} />}
          value={
            <Stack>
              <Typography variant="subtitle2"> Language </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {typeof languages === 'string' ? languages : languages.join(', ')}
              </Typography>
            </Stack>
          }
        />
      </Stack>
    </Card>
  );
}
