import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Stack, Avatar, Link } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// utils
import { fDate } from 'src/utils/formatTime';
import { bgGradient } from 'src/utils/cssStyles';
// types
import { IBlogPostProps } from 'src/types/blog';
// components
import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
//
import PostTimeBlock from '../../components/PostTimeBlock';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
  largePost?: boolean;
};

export default function PostItem({ post, largePost }: Props) {
  const { title, description, duration, createdAt, author, coverImg } = post;

  return (
    <Box sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
      <Image src={coverImg} alt={title} ratio="1/1" />

      <Stack
        spacing={1}
        sx={{
          p: 3,
          bottom: 0,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
          ...(largePost && {
            p: { xs: 3, md: 5 },
          }),
        }}
      >
        <PostTimeBlock
          createdAt={fDate(createdAt)}
          duration={duration}
          sx={{ color: 'inherit', opacity: 0.72 }}
        />

        <Link component={RouterLink} to={paths.travel.post} color="inherit">
          <TextMaxLine
            sx={{
              typography: 'h6',
              ...(largePost && {
                typography: { xs: 'h6', md: 'h4' },
              }),
            }}
          >
            {title}
          </TextMaxLine>
        </Link>

        {largePost && <TextMaxLine sx={{ opacity: 0.48 }}>{description}</TextMaxLine>}

        <Stack direction="row" alignItems="center" sx={{ typography: 'body2', pt: 1.5 }}>
          <Avatar
            src={author.picture}
            sx={{
              mr: 1,
              width: 32,
              height: 32,
              ...(largePost && {
                width: { xs: 32, md: 40 },
                height: { xs: 32, md: 40 },
              }),
            }}
          />
          {author.name}
        </Stack>
      </Stack>

      <StyledOverlay />
    </Box>
  );
}
