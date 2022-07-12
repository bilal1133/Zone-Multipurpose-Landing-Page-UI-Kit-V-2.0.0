// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Avatar } from '@mui/material';
// routes
import Routes from '../../../routes';
// utils
import { fDate } from '../../../utils/formatTime';
// @types
import { BlogPostProps } from '../../../@types/blog';
// components
import { Image, TextMaxLine } from '../../../components';

// ----------------------------------------------------------------------

const DotStyle = styled('span')(({ theme }) => ({
  width: 4,
  height: 4,
  borderRadius: '50%',
  backgroundColor: 'currentColor',
  margin: theme.spacing(0, 1),
}));

// ----------------------------------------------------------------------

type Props = {
  post: BlogPostProps;
};

export default function BlogTravelPostItem({ post }: Props) {
  const { slug, frontmatter } = post;
  const { title, duration, coverImg, author, createdAt } = frontmatter;

  return (
    <Stack spacing={2.5}>
      <Image src={coverImg} alt={title} ratio="1/1" sx={{ borderRadius: 2 }} />

      <Stack spacing={1}>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ typography: 'caption', color: 'text.disabled' }}
        >
          {fDate(createdAt)}
          <DotStyle />
          {duration}
        </Stack>

        <NextLink passHref as={Routes.travel.post(slug)} href={Routes.travel.post('[slug]')}>
          <TextMaxLine variant="h5" persistent asLink>
            {title}
          </TextMaxLine>
        </NextLink>
      </Stack>

      <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
        <Avatar src={author.picture} sx={{ mr: 1 }} />
        {author.name}
      </Stack>
    </Stack>
  );
}
