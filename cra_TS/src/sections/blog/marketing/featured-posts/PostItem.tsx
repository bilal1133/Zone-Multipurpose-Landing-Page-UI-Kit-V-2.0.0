import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Stack, Avatar, Link } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// utils
import { fDate } from 'src/utils/formatTime';
// types
import { IBlogPostProps } from 'src/types/blog';
// components
import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
//
import PostTimeBlock from '../../components/PostTimeBlock';

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
};

export default function PostItem({ post }: Props) {
  const { title, duration, coverImg, author, description, createdAt } = post;

  return (
    <Stack
      direction={{
        xs: 'column',
        md: 'row',
      }}
      sx={{ bgcolor: 'background.default', borderRadius: 2 }}
    >
      <Image src={coverImg} alt={title} sx={{ flexGrow: 1, height: { md: 560 } }} />

      <Stack
        justifyContent="space-between"
        sx={{
          mx: 'auto',
          p: { xs: 3, md: 5 },
          maxWidth: { md: 396 },
        }}
      >
        <Stack spacing={1}>
          <PostTimeBlock createdAt={fDate(createdAt)} duration={duration} />

          <Link component={RouterLink} to={paths.marketing.post} color="inherit" variant="h3">
            {title}
          </Link>

          <TextMaxLine line={3} variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </TextMaxLine>
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ pt: 2, typography: 'body2' }}>
          <Avatar src={author.picture} sx={{ mr: 1 }} />
          {author.name}
        </Stack>
      </Stack>
    </Stack>
  );
}
