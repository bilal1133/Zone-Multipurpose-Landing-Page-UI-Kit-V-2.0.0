// @mui
import { Skeleton, Stack, Card, CardProps } from '@mui/material';
// hooks
import { useResponsive } from '../../../src/hooks';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  vertical?: boolean;
}

export default function CourseItemSkeleton({ vertical, ...other }: Props) {
  const isDesktop = useResponsive('up', 'sm');

  const verticalStyle = vertical || !isDesktop;

  return (
    <Card {...other}>
      <Stack direction={verticalStyle ? 'column' : 'row'}>
        <Skeleton
          variant="rectangular"
          sx={{
            width: 240,
            height: 346,
            flexShrink: 0,
            ...(verticalStyle && {
              width: 1,
            }),
          }}
        />

        <Stack sx={{ p: 3, flexGrow: 1 }}>
          <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
            <Skeleton variant="text" sx={{ height: 20, width: 72 }} />
            <Skeleton variant="text" sx={{ height: 20, width: 48 }} />
          </Stack>

          <Stack spacing={1} flexGrow={1}>
            {[...Array(3)].map((_, index) => (
              <Skeleton
                key={index}
                variant="text"
                sx={{
                  maxWidth: 1,
                  height: 20 - index * 2,
                  width: (5 - index) * 80,
                }}
              />
            ))}
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mt: 3 }}>
            <Skeleton variant="rectangular" sx={{ height: 16, width: 120, borderRadius: 0.5 }} />
            <Skeleton variant="rectangular" sx={{ height: 16, width: 120, borderRadius: 0.5 }} />
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ my: 3 }}>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="text" sx={{ height: 20, width: 48 }} />
            <Skeleton variant="text" sx={{ height: 20, width: 24 }} />
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Skeleton variant="rectangular" sx={{ height: 16, width: 56, borderRadius: 0.5 }} />
            <Skeleton variant="rectangular" sx={{ height: 16, width: 56, borderRadius: 0.5 }} />
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
