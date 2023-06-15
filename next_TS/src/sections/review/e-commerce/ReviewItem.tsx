// @mui
import { Stack, Rating, Button, Avatar, Typography } from '@mui/material';
// utils
import { fDate } from 'src/utils/formatTime';
// types
import { IReviewItemProp } from 'src/types/review';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = Partial<IReviewItemProp>;

export default function ReviewItem({ name, rating, message, postedAt, avatarUrl }: Props) {
  return (
    <Stack
      direction="row"
      sx={{
        py: 4,
        borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
      }}
    >
      <Avatar alt={name} src={avatarUrl} sx={{ width: 64, height: 64, mr: 2.5 }} />

      <Stack spacing={1}>
        <Rating
          size="small"
          value={rating}
          precision={0.5}
          readOnly
          sx={{
            '& svg': { color: 'text.primary' },
          }}
        />

        <Typography variant="subtitle1">{name}</Typography>

        {postedAt && (
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            {fDate(postedAt)}
          </Typography>
        )}

        <Typography variant="body2">{message}</Typography>

        <Stack spacing={1} direction={{ xs: 'column', sm: 'row' }} alignItems={{ sm: 'center' }}>
          <Typography variant="subtitle2">Was this review helpful?</Typography>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Button size="small" color="inherit" startIcon={<Iconify icon="carbon:thumbs-up" />}>
              Yes
            </Button>

            <Button
              size="small"
              color="inherit"
              startIcon={
                <Iconify
                  icon="carbon:thumbs-up"
                  sx={{
                    transform: 'scale(-1, -1)',
                  }}
                />
              }
            >
              No
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
