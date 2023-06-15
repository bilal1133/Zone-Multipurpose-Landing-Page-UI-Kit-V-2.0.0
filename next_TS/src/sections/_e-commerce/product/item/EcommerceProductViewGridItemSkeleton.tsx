// @mui
import { Stack, Box, Skeleton } from '@mui/material';

// ----------------------------------------------------------------------

export default function EcommerceProductViewGridItemSkeleton() {
  return (
    <Stack spacing={2}>
      <Box
        sx={{
          pt: '100%',
          flexShrink: 0,
          borderRadius: 2,
          position: 'relative',
        }}
      >
        <Skeleton
          variant="rounded"
          width="100%"
          height="100%"
          sx={{ position: 'absolute', top: 0, left: 0 }}
        />
      </Box>

      <Stack spacing={1}>
        <Skeleton variant="rounded" height={16} width="90%" />

        <Skeleton variant="rounded" height={16} width="70%" />

        <Skeleton variant="rounded" height={16} width="50%" />
      </Stack>
    </Stack>
  );
}
