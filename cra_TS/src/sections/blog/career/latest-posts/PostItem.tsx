import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Typography, Stack, Link } from '@mui/material';
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
  order?: number;
  largePost?: boolean;
};

export default function PostItem({ post, order, largePost }: Props) {
  const { title, duration, coverImg, description, createdAt } = post;

  return (
    <Stack
      spacing={2}
      sx={{
        ...(largePost && {
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
        }),
      }}
    >
      <Image
        src={coverImg}
        alt={title}
        ratio={(largePost && '3/4') || (order && '4/3') || '1/1'}
        sx={{ borderRadius: 2 }}
      />

      <Stack
        spacing={largePost ? 2 : 1}
        sx={{
          ...(largePost && {
            p: 5,
            bottom: 0,
            zIndex: 9,
            position: 'absolute',
            color: 'common.white',
          }),
        }}
      >
        <PostTimeBlock
          createdAt={fDate(createdAt)}
          duration={duration}
          sx={{
            ...(largePost && { opacity: 0.72, color: 'inherit' }),
          }}
        />

        <Link component={RouterLink} to={paths.career.post} color="inherit">
          <TextMaxLine variant={largePost ? 'h3' : 'h6'}>{title}</TextMaxLine>
        </Link>

        {largePost && <Typography sx={{ opacity: 0.48 }}>{description}</Typography>}
      </Stack>

      {largePost && <StyledOverlay />}
    </Stack>
  );
}
