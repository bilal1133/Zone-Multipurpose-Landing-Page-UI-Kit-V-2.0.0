// @mui
import { Skeleton, Stack, Card, Divider, Box, CardProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function CareerJobItemSkeleton({ ...other }: CardProps) {
  return (
    <Card {...other}>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Skeleton variant="circular" width={48} height={48} />

        {[...Array(4)].map((_, index) => (
          <Skeleton
            key={index}
            variant="text"
            sx={{
              height: 20 - index * 2,
              width: (5 - index) * 50,
            }}
          />
        ))}
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box
        sx={{
          p: 3,
          gap: 3,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        {[...Array(4)].map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            sx={{ width: 1, height: 20, borderRadius: 0.5 }}
          />
        ))}
      </Box>
    </Card>
  );
}
