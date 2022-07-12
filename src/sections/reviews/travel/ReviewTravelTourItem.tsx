import { useState } from 'react';
// @mui
import {
  Box,
  Rating,
  Button,
  Stack,
  Avatar,
  Divider,
  Typography,
  FilledInput,
} from '@mui/material';
// utils
import { fDate } from '../../../utils/formatTime';
// @types
import { ReviewProp } from '../../../@types/review';

// ----------------------------------------------------------------------

const AVATAR_SIZE = 48;
const WIDTH = `calc(100% - ${AVATAR_SIZE + 20}px)`;

type IProps = Partial<ReviewProp>;

interface Props extends IProps {
  tagUser?: string;
  hasReply?: boolean;
}

export default function ReviewTravelTourItem({
  name,
  rating,
  message,
  tagUser,
  helpful,
  postedAt,
  hasReply,
  avatarUrl,
}: Props) {
  const [openReply, setOpenReply] = useState(false);
  const [isHelpful, setIsHelpful1] = useState(false);

  const handleOpenReply = () => {
    setOpenReply(!openReply);
  };

  const handleToggleHelpful = () => {
    setIsHelpful1(!isHelpful);
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

          <Typography
            variant="body3"
            sx={{
              mb: 1,
              mt: { xs: 1, sm: 0.5 },
              color: 'text.disabled',
            }}
          >
            {postedAt && fDate(postedAt)}
          </Typography>

          <Typography variant="body2">
            {tagUser && <strong>{`@${tagUser} `}</strong>}
            {message}
          </Typography>

          {!hasReply && (
            <ReviewActions
              helpful={Number(helpful)}
              isOpen={openReply}
              isHelpful={isHelpful}
              onOpenReply={handleOpenReply}
              onToggleHelpful={handleToggleHelpful}
            />
          )}

          {!hasReply && openReply && (
            <FilledInput
              fullWidth
              size="small"
              placeholder="Write comment..."
              sx={{
                mt: 3,
                '& .MuiFilledInput-input': {
                  py: 0,
                  height: 48,
                },
              }}
            />
          )}
        </Stack>
      </Stack>
      <Divider
        sx={{
          ml: 'auto',
          width: WIDTH,
        }}
      />
    </>
  );
}

// ----------------------------------------------------------------------

type ReviewActionsProps = {
  helpful: number;
  isHelpful?: boolean;
  isOpen?: boolean;
  onToggleHelpful: VoidFunction;
  onOpenReply: VoidFunction;
};

function ReviewActions({
  helpful,
  isOpen,
  isHelpful,
  onOpenReply,
  onToggleHelpful,
}: ReviewActionsProps) {
  const totalHelpful =
    helpful > 0
      ? isHelpful
        ? `(${helpful + 1})`
        : `(${helpful})`
      : isHelpful
      ? `(${helpful + 1})`
      : '';

  return (
    <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
      <Button size="small" color={isHelpful ? 'primary' : 'inherit'} onClick={onToggleHelpful}>
        Helpful {totalHelpful}
      </Button>
      <Box sx={{ width: 4, height: 4, bgcolor: 'text.disabled', borderRadius: '50%' }} />
      <Button size="small" color={isOpen ? 'primary' : 'inherit'} onClick={onOpenReply}>
        Reply
      </Button>
    </Stack>
  );
}
