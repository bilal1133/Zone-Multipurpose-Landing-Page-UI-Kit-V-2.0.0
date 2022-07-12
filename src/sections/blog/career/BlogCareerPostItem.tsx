// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Link, Avatar, Typography } from '@mui/material';
// routes
import Routes from '../../../routes';
// utils
import { fDate } from '../../../utils/formatTime';
// @types
import { BlogPostProps } from '../../../@types/blog';
// components
import { Image } from '../../../components';

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
  index: number;
};

export default function BlogCareerPostItem({ post, index }: Props) {
  const { slug, frontmatter } = post;
  const { title, duration, coverImg, author, description, createdAt } = frontmatter;

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
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            typography: 'caption',
            color: 'text.disabled',
            ...(noImage && {
              color: 'grey.500',
            }),
          }}
        >
          {fDate(createdAt)}
          <DotStyle />
          {duration}
        </Stack>

        <NextLink passHref as={Routes.career.post(slug)} href={Routes.career.post('[slug]')}>
          <Link
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
        </NextLink>

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
