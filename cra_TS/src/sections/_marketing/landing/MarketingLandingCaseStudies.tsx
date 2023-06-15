import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  Stack,
  Paper,
  Button,
  Container,
  Typography,
  Link,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// types
import { ICaseStudyProps } from 'src/types/case-study';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { varHover, varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0.48)} 0%`,
    endColor: `${alpha(theme.palette.common.black, 0.48)} 100%`,
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
  caseStudies: ICaseStudyProps[];
};

export default function MarketingLandingCaseStudies({ caseStudies }: Props) {
  const isMdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: { xs: 5, md: 10 },
        pb: 10,
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Our Work
        </Typography>

        <Typography variant="h2">Case Studies</Typography>
      </Stack>

      <Grid
        spacing={3}
        container
        alignItems="center"
        sx={{
          py: { xs: 8, md: 10 },
        }}
      >
        {/* Item 1 */}
        <Grid xs={6} md={2}>
          <SmallItem caseStudy={caseStudies[0]} isMdUp={isMdUp} />
        </Grid>

        {!isMdUp && (
          <Grid xs={6} md={2}>
            <SmallItem caseStudy={caseStudies[5]} isMdUp={isMdUp} />
          </Grid>
        )}

        <Grid container xs={12} sm={12} md={8}>
          {/* Item 2 */}
          <Grid xs={6} md={9}>
            {isMdUp ? (
              <LargeItem caseStudy={caseStudies[1]} />
            ) : (
              <SmallItem caseStudy={caseStudies[1]} isSquare isMdUp={isMdUp} />
            )}
          </Grid>

          {/* Item 3 */}
          <Grid xs={6} md={3}>
            <Stack justifyContent={{ md: 'flex-end' }} sx={{ height: { md: 1 } }}>
              <SmallItem caseStudy={caseStudies[2]} isSquare isMdUp={isMdUp} />
            </Stack>
          </Grid>

          {/* Item 4 */}
          <Grid xs={6} md={3}>
            <SmallItem caseStudy={caseStudies[3]} isSquare isMdUp={isMdUp} />
          </Grid>

          {/* Item 5 */}
          <Grid xs={6} md={9}>
            {isMdUp ? (
              <LargeItem caseStudy={caseStudies[4]} />
            ) : (
              <SmallItem caseStudy={caseStudies[4]} isSquare isMdUp={isMdUp} />
            )}
          </Grid>
        </Grid>

        {/* Item 6 */}
        {isMdUp && (
          <Grid xs={6} md={2}>
            <SmallItem caseStudy={caseStudies[5]} isMdUp={isMdUp} />
          </Grid>
        )}
      </Grid>

      <Stack alignItems={{ xs: 'center', md: 'flex-end' }}>
        <Button
          component={RouterLink}
          to={paths.marketing.caseStudies}
          size="large"
          color="inherit"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          View all
        </Button>
      </Stack>
    </Container>
  );
}

// ----------------------------------------------------------------------

type LargeItemProps = {
  caseStudy: ICaseStudyProps;
};

function LargeItem({ caseStudy }: LargeItemProps) {
  const { coverImg, title, category, description } = caseStudy;

  return (
    <Paper
      sx={{
        display: 'grid',
        borderRadius: 2,
        boxShadow: (theme) => theme.customShadows.z24,
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        },
      }}
    >
      <Box sx={{ p: 0.75 }}>
        <Image alt="cover" src={coverImg} ratio="3/4" sx={{ borderRadius: 2 }} />
      </Box>

      <Stack alignItems="flex-end" justifyContent="space-between" sx={{ p: 3, pt: 5, height: 1 }}>
        <div>
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            {category}
          </Typography>

          <Typography variant="h4" sx={{ mt: 1, mb: 2 }}>
            {title}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </div>

        <Button
          component={RouterLink}
          to={paths.marketing.caseStudy}
          size="small"
          color="inherit"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          Learn more
        </Button>
      </Stack>
    </Paper>
  );
}

// ----------------------------------------------------------------------

type SmallItemProps = {
  caseStudy: ICaseStudyProps;
  isSquare?: boolean;
  isMdUp?: boolean;
};

function SmallItem({ caseStudy, isSquare, isMdUp }: SmallItemProps) {
  const { coverImg, title, category } = caseStudy;

  return (
    <Link component={RouterLink} to={paths.marketing.caseStudy}>
      <Paper
        component={m.div}
        whileHover="hover"
        sx={{ position: 'relative', cursor: 'pointer', borderRadius: 2, overflow: 'hidden' }}
      >
        <Stack
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{
            width: 1,
            height: 1,
            zIndex: 9,
            position: 'absolute',
            color: 'common.white',
            textAlign: 'center',
          }}
        >
          <Typography variant="overline" sx={{ opacity: 0.48 }}>
            {category}
          </Typography>
          <Typography variant="h6">{title}</Typography>
        </Stack>

        <StyledOverlay />

        <m.div variants={varHover(1.25)} transition={varTranHover()}>
          <Image
            alt="cover"
            src={coverImg}
            ratio={(isSquare && '1/1') || (isMdUp && '3/4') || '1/1'}
          />
        </m.div>
      </Paper>
    </Link>
  );
}
