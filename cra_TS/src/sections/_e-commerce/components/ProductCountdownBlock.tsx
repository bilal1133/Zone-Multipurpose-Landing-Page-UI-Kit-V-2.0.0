// @mui
import { Stack, Typography, StackProps } from '@mui/material';
// hooks
import useCountdown from 'src/hooks/useCountdown';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  expired: Date;
  hiddenLabel?: boolean;
}

export default function ProductCountdownBlock({
  expired,
  hiddenLabel = false,
  sx,
  ...other
}: Props) {
  const { days, hours, minutes, seconds } = useCountdown(expired);

  return (
    <Stack
      spacing={1}
      display="inline-flex"
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        typography: 'subtitle1',
        ...sx,
      }}
      {...other}
    >
      {Number(days) > 0 && (
        <>
          <TimeBlock label="Days" value={days} hiddenLabel={hiddenLabel} />
          <Separator hiddenLabel={hiddenLabel} />
        </>
      )}

      <TimeBlock label="Hours" value={hours} hiddenLabel={hiddenLabel} />

      <Separator hiddenLabel={hiddenLabel} />

      <TimeBlock label="Minutes" value={minutes} hiddenLabel={hiddenLabel} />

      <Separator hiddenLabel={hiddenLabel} />

      <TimeBlock label="Seconds" value={seconds} hiddenLabel={hiddenLabel} />
    </Stack>
  );
}

// ----------------------------------------------------------------------

type TimeBlockProps = {
  label: string;
  value: string;
  hiddenLabel: boolean;
};

function TimeBlock({ label, value, hiddenLabel }: TimeBlockProps) {
  return (
    <Stack spacing={1}>
      <Stack
        className="value"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 56,
          height: 44,
          borderRadius: 1,
          bgcolor: 'grey.800',
          color: 'common.white',
        }}
      >
        {value}
      </Stack>

      {!hiddenLabel && (
        <Typography
          className="label"
          variant="caption"
          sx={{ color: 'grey.600', textAlign: 'center' }}
        >
          {label}
        </Typography>
      )}
    </Stack>
  );
}
// ----------------------------------------------------------------------

type SeparatorProps = {
  hiddenLabel: boolean;
};

function Separator({ hiddenLabel }: SeparatorProps) {
  return (
    <Stack spacing={1} flexShrink={0} className="separator" sx={{ color: 'grey.800' }}>
      <Stack alignItems="center" justifyContent="center" flexGrow={1}>
        :
      </Stack>

      {!hiddenLabel && (
        <Typography variant="caption" sx={{ opacity: 0 }}>
          :
        </Typography>
      )}
    </Stack>
  );
}
