import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Stack, Link, Avatar, Typography } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// utils
import { fDate } from 'src/utils/formatTime';
// types
import { IBlogPostProps } from 'src/types/blog';
// components
import Image from 'src/components/image';
//
import PostTimeBlock from '../../components/PostTimeBlock';

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
  index: number;
};

export default function PostItem({ post, index }: Props) {
  const { title, duration, coverImg, author, description, createdAt } = post;

  const noImage = index === 1 || index === 4;

  const smallImage = index === 2 || index === 7;

  return (
    <Stack
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {!noImage && <Image src={coverImg} alt={title} ratio={smallImage ? '4/3' : '1/1'} />}

      <Stack
        spacing={1}
        sx={{
          p: 3,
          bgcolor: 'background.neutral',
          ...(noImage && {
            bgcolor: 'primary.lighter',
          }),
        }}
      >
        <PostTimeBlock
          createdAt={fDate(createdAt)}
          duration={duration}
          sx={{
            ...(noImage && { color: 'grey.500' }),
          }}
        />

        <Link
          component={RouterLink}
          to={paths.career.post}
          color="inherit"
          variant="h5"
          sx={{
            ...(noImage && {
              color: 'grey.800',
            }),
          }}
        >
          {title}
        </Link>

        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            ...(noImage && {
              color: 'grey.600',
            }),
          }}
        >
          {description}
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          sx={{
            typography: 'body2',
            pt: 1.5,
            ...(noImage && {
              color: 'grey.800',
            }),
          }}
        >
          <Avatar src={author?.picture} sx={{ mr: 1 }} />
          {author?.name}
        </Stack>
      </Stack>
    </Stack>
  );
}
