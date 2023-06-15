import { useState } from 'react';
// @mui
import { Box, Rating, Button, Stack, Avatar, Divider, Typography, TextField } from '@mui/material';
// utils
import { fDate } from 'src/utils/formatTime';
// types
import { IReviewItemProp } from 'src/types/review';

// ----------------------------------------------------------------------

const AVATAR_SIZE = 48;

const WIDTH = `calc(100% - ${AVATAR_SIZE + 20}px)`;

type Props = Partial<IReviewItemProp> & {
  tagUser?: string;
  hasReply?: boolean;
};

export default function ReviewItem({
  name,
  rating,
  message,
  tagUser,
  postedAt,
  hasReply,
  avatarUrl,
  helpful = 0,
}: Props) {
  const [openReply, setOpenReply] = useState(false);

  const [isHelpful, setIsHelpful] = useState(false);

  const handleOpenReply = () => {
    setOpenReply(!openReply);
  };

  const handleToggleHelpful = () => {
    setIsHelpful(!isHelpful);
  };

  return (
    <>
      <Stack
        direction="row"
        sx={{
          py: 3,
          alignItems: 'flex-start',
          ...(hasReply && {
            ml: 'auto',
            width: WIDTH,
          }),
        }}
      >
        <Avatar
          alt={name}
          src={avatarUrl}
          sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE, mr: 2.5 }}
        />

        <Stack sx={{ width: 1 }}>
          <Stack
            spacing={1}
            alignItems={{ sm: 'center' }}
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent={{ sm: 'space-between' }}
          >
            <Typography variant="subtitle2">{name}</Typography>

            {!hasReply && <Rating size="small" value={rating} precision={0.5} readOnly />}
          </Stack>

          {postedAt && (
            <Typography
              variant="body2"
              sx={{
                mb: 1,
                mt: { xs: 1, sm: 0.5 },
                color: 'text.disabled',
              }}
            >
              {fDate(postedAt)}
            </Typography>
          )}

          <Typography variant="body2">
            {tagUser && <strong>{`@${tagUser} `}</strong>}
            {message}
          </Typography>

          {!hasReply && (
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
              <Button
                size="small"
                color={isHelpful ? 'primary' : 'inherit'}
                onClick={handleToggleHelpful}
              >
                Helpful {getHelpful(helpful, isHelpful)}
              </Button>

              <Box sx={{ width: 4, height: 4, bgcolor: 'text.disabled', borderRadius: '50%' }} />

              <Button
                size="small"
                color={openReply ? 'primary' : 'inherit'}
                onClick={handleOpenReply}
              >
                Reply
              </Button>
            </Stack>
          )}

          {!hasReply && openReply && (
            <TextField
              fullWidth
              hiddenLabel
              placeholder="Write comment..."
              InputProps={{ sx: { height: 48 } }}
              sx={{ mt: 3 }}
            />
          )}
        </Stack>
      </Stack>

      <Divider sx={{ ml: 'auto', width: WIDTH }} />
    </>
  );
}

// ----------------------------------------------------------------------

const getHelpful = (helpful: number, isHelpful: boolean) => {
  if (helpful > 0) {
    return isHelpful ? `(${helpful + 1})` : `(${helpful})`;
  }

  return isHelpful ? `(${helpful + 1})` : '';
};
