import { useRef } from 'react';
// @mui
import { styled, alpha, useTheme } from '@mui/material/styles';
import { Box, Container, Typography, Stack, Unstable_Grid2 as Grid } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// hooks
import useResponsive from 'src/hooks/useResponsive';
import useBoundingClientRect from 'src/hooks/useBoundingClientRect';
// types
import { ITeamMemberProps } from 'src/types/team';
// components
import Carousel, { CarouselArrows, CarouselDots } from 'src/components/carousel';
//
import TeamMember from './TeamMember';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  padding: theme.spacing(10, 0),
  ...bgGradient({
    color: alpha(theme.palette.grey[900], 0.8),
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
  [theme.breakpoints.up('md')]: {
    position: 'relative',
    padding: theme.spacing(20, 0),
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    left: 0,
    right: 0,
    marginBottom: 0,
    position: 'absolute',
    height: 'calc(100% - 320px)',
  },
}));

// ----------------------------------------------------------------------

type Props = {
  members: ITeamMemberProps[];
};

export default function TeamMarketing({ members }: Props) {
  const theme = useTheme();

  const isMdUp = useResponsive('up', 'md');

  const carouselRef = useRef<Carousel | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  const carouselSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      sx: {
        mt: 8,
        display: { md: 'none' },
      },
    }),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <StyledRoot>
      <StyledContainer>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid xs={12} md={4}>
            <Stack spacing={3} sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
              <Typography variant="overline" sx={{ color: 'grey.600' }}>
                Team
              </Typography>

              <Typography variant="h2" sx={{ color: 'primary.main' }}>
                Meet Our Team
              </Typography>

              <Typography sx={{ color: 'common.white' }}>
                Since wire-frame renderings are relatively simple and fast to calculate, they are
                often used in cases
              </Typography>
            </Stack>
          </Grid>

          <Grid xs={12} md={7}>
            <Box ref={containerRef} />
          </Grid>
        </Grid>

        {isMdUp && (
          <CarouselArrows
            spacing={2}
            onNext={handleNext}
            onPrev={handlePrev}
            leftButtonProps={{ color: 'primary', sx: { color: 'primary.main', opacity: 1 } }}
            rightButtonProps={{ color: 'primary', sx: { color: 'primary.main', opacity: 1 } }}
            sx={{ position: 'absolute', bottom: 0 }}
          />
        )}
      </StyledContainer>

      <Box
        sx={{
          pl: `${offsetLeft}px`,
          width: { md: `calc(100% + 120px)` },
        }}
      >
        <Carousel ref={carouselRef} {...carouselSettings}>
          {members.map((member) => (
            <Box
              key={member.id}
              sx={{
                ml: '-1px',
                pl: { xs: 2, md: 4 },
                pr: { xs: 2, md: 0 },
                color: 'common.white',
              }}
            >
              <TeamMember member={member} />
            </Box>
          ))}
        </Carousel>
      </Box>
    </StyledRoot>
  );
}
