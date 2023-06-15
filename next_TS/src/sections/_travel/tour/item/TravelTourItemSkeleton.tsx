import { Skeleton, Stack, Card, Divider, CardProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function TravelTourItemSkeleton({ ...other }: CardProps) {
  return (
    <Card {...other}>
      <Skeleton variant="rectangular" sx={{ width: 1, height: 240 }} />

      <Stack spacing={1} sx={{ p: 3 }}>
        <Skeleton variant="text" sx={{ height: 20, width: 50 }} />
        <Skeleton variant="text" sx={{ height: 20, width: 1 }} />
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack direction="row" justifyContent="space-between" sx={{ p: 3 }}>
        <Skeleton variant="text" sx={{ height: 20, width: 100 }} />
        <Skeleton variant="text" sx={{ height: 20, width: 50 }} />
      </Stack>
    </Card>
  );
}
