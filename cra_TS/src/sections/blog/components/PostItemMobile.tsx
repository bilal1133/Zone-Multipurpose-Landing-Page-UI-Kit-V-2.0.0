// @mui
import { Stack, Link } from '@mui/material';
// utils
import { fDate } from 'src/utils/formatTime';
// types
import { IBlogPostProps } from 'src/types/blog';
// components
import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
//
import PostTimeBlock from './PostTimeBlock';

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
  onSiderbar?: boolean;
};

export default function PostItemMobile({ post, onSiderbar }: Props) {
  const { title, duration, coverImg, createdAt } = post;

  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems={{ xs: 'flex-start', md: 'unset' }}
      sx={{ width: 1 }}
    >
      <Image
        alt={title}
        src={coverImg}
        sx={{
          width: 80,
          height: 80,
          flexShrink: 0,
          borderRadius: 1.5,
        }}
      />

      <Stack spacing={onSiderbar ? 0.5 : 1}>
        <Link color="inherit">
          <TextMaxLine variant={onSiderbar ? 'subtitle2' : 'h6'}>{title}</TextMaxLine>
        </Link>

        <PostTimeBlock createdAt={fDate(createdAt)} duration={duration} />
      </Stack>
    </Stack>
  );
}
