// @mui
import { Stack, Rating, Typography, StackProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  rating: number;
  label: string;
}

export default function ProductRating({ rating, label, ...other }: Props) {
  return (
    <Stack spacing={0.5} direction="row" alignItems="center" {...other}>
      <Rating
        size="small"
        value={rating}
        readOnly
        precision={0.5}
        sx={{ '& svg': { height: 12, width: 12 } }}
      />

      {label && (
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {label}
        </Typography>
      )}
    </Stack>
  );
}
