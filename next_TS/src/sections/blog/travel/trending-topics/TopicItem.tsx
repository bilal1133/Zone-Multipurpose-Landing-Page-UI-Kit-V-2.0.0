import { m } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Typography, Stack, Box } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// _mock
import _mock from 'src/_mock';
// components
import Image from 'src/components/image';
import { varHover, varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

const CATEGORIES = [
  'Marketing',
  'Community',
  'Tutorials',
  'Business',
  'Management',
  'Sports',
  'Travel',
  'Design',
];

export const TOPICS = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  cover: _mock.image.travel(index + 4),
  totalPost: index + 10,
  category: CATEGORIES[index],
}));

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
  topic: {
    cover: string;
    totalPost: number;
    category: string;
  };
};

export default function TopicItem({ topic }: Props) {
  const { totalPost, cover, category } = topic;

  return (
    <Box
      component={m.div}
      whileHover="hover"
      variants={varHover(1)}
      transition={varTranHover()}
      sx={{ px: 1.5, cursor: 'pointer' }}
    >
      <Box sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
        <Stack
          spacing={0.5}
          sx={{
            py: 3,
            width: 1,
            zIndex: 9,
            bottom: 0,
            textAlign: 'center',
            position: 'absolute',
            color: 'common.white',
          }}
        >
          <m.div variants={varHover(1.05)} transition={varTranHover()}>
            <Typography variant="h6">{category}</Typography>
          </m.div>

          <Typography variant="body2" sx={{ opacity: 0.72 }}>
            {totalPost} posts
          </Typography>
        </Stack>

        <StyledOverlay />

        <m.div variants={varHover(1.25)} transition={varTranHover()}>
          <Image alt={category} src={cover} ratio="4/3" />
        </m.div>
      </Box>
    </Box>
  );
}
