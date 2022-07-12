import { m } from 'framer-motion';
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
import { Image, BgOverlay, TextMaxLine } from '../../../components';
import { varHover, varTranHover } from '../../../components/animate';

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

export default function BlogMarketingPostItem({ post }: Props) {
  const { slug, frontmatter } = post;
  const { title, duration, coverImg, author, createdAt } = frontmatter;

  return (
    <Stack
      component={m.div}
      whileHover="hover"
      variants={varHover(1)}
      transition={varTranHover()}
      sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative' }}
    >
      <m.div variants={varHover(1.25)} transition={varTranHover()}>
        <Image src={coverImg} alt={title} ratio="3/4" />
      </m.div>

      <Stack
        justifyContent="space-between"
        sx={{
          p: 5,
          height: 1,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Stack spacing={2}>
          <Stack direction="row" alignItems="center" sx={{ opacity: 0.72, typography: 'caption' }}>
            {fDate(createdAt)}
            <DotStyle />
            {duration}
          </Stack>

          <NextLink
            passHref
            as={Routes.marketing.post(slug)}
            href={Routes.marketing.post('[slug]')}
          >
            <TextMaxLine variant="h4" asLink>
              {title}
            </TextMaxLine>
          </NextLink>
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
          <Avatar src={author.picture} sx={{ mr: 1 }} />
          {author.name}
        </Stack>
      </Stack>

      <BgOverlay direction="top" />
    </Stack>
  );
}
