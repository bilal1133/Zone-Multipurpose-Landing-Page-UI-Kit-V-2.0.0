// icons
import { IconifyIcon } from '@iconify/react';
import trophyIcon from '@iconify/icons-carbon/trophy';
import dataVis4 from '@iconify/icons-carbon/data-vis-4';
import increaseLevel from '@iconify/icons-carbon/increase-level';
import userCertification from '@iconify/icons-carbon/user-certification';
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Grid, Box, Container, Typography, Button } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// theme
import { ColorSchema } from '../../../theme/palette';
// components
import { Iconify, CountUpNumber, Image } from '../../../components';

// ----------------------------------------------------------------------

const SUMMARY = [
  { title: 'Years of experience', total: 12, icon: increaseLevel },
  { title: 'Awards', total: 20, icon: trophyIcon },
  { title: 'Projects', total: 150, icon: dataVis4 },
  { title: 'Happy clients', total: 32000, icon: userCertification },
];

const COLORS = ['primary', 'secondary', 'warning', 'success'] as const;

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

type IconStyleProps = {
  color: ColorSchema;
};

const IconStyle = styled('div', {
  shouldForwardProp: (prop) => prop !== 'color',
})<IconStyleProps>(({ color, theme }) => ({
  width: 160,
  height: 160,
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'center',
  color: theme.palette[color].darker,
  border: `dashed 2px ${alpha(theme.palette[color].main, 0.24)}`,
  '&:before': {
    zIndex: 8,
    content: '""',
    borderRadius: '50%',
    position: 'absolute',
    width: 'calc(100% - 48px)',
    height: 'calc(100% - 48px)',
    background: `conic-gradient(from 0deg at 50% 50%, ${theme.palette[color].main} 0deg, ${theme.palette[color].light} 360deg)`,
  },
  '& svg': {
    zIndex: 9,
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAbout() {
  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            lg={5}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Image
              alt="teams"
              src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_teams.svg"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h2">Who We Are?</Typography>
            <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
              Vivamus consectetuer hendrerit lacus. Curabitur a felis in nunc fringilla tristique.
              Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.
              <br />
              <br />
              Nam pretium turpis et arcu. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
              dignissim dolor, a pretium mi sem ut ipsum. Praesent venenatis metus at tortor
              pulvinar varius.
            </Typography>

            <Button
              variant="outlined"
              color="inherit"
              size="large"
              endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
            >
              Check Our Work
            </Button>
          </Grid>
        </Grid>

        <Box
          sx={{
            my: { xs: 8, md: 15 },
          }}
        />

        <Box
          sx={{
            textAlign: 'center',
            display: 'grid',
            gap: { xs: 5, md: 8 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {SUMMARY.map((value, index) => (
            <BoxItem key={value.title} value={value} index={index} />
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type BoxItemProps = {
  value: {
    icon: IconifyIcon;
    total: number;
    title: string;
  };
  index: number;
};

function BoxItem({ value, index }: BoxItemProps) {
  return (
    <div>
      <IconStyle color={COLORS[index]}>
        <Iconify icon={value.icon} sx={{ width: 48, height: 48 }} />
      </IconStyle>
      <Typography variant="h2" sx={{ mt: 2, mb: 1 }}>
        <CountUpNumber
          start={value.total / 5}
          end={value.total}
          formattingFn={(value: number) => fShortenNumber(value)}
        />
      </Typography>
      <Typography sx={{ color: 'text.secondary' }}>{value.title}</Typography>
    </div>
  );
}
