// @mui
import { Stack, Skeleton } from '@mui/material';

// ----------------------------------------------------------------------

export default function EcommerceProductViewListItemSkeleton() {
  return (
    <Stack spacing={2} direction="row">
      <Skeleton
        variant="rounded"
        width={160}
        height={160}
        sx={{ flexShrink: 0, borderRadius: 2 }}
      />

      <Stack flexGrow={1.5} spacing={1}>
        <Skeleton variant="rounded" height={16} width="90%" />

        <Skeleton variant="rounded" height={16} width="80%" />

        <Skeleton variant="rounded" height={16} width="70%" />

        <Skeleton variant="rounded" height={16} width="60%" />

        <Skeleton variant="rounded" height={16} width="50%" />
      </Stack>
    </Stack>
  );
}
