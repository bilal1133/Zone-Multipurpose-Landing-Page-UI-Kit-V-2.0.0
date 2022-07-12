import { m } from 'framer-motion';
// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Stack, Paper, Button, Container, Typography } from '@mui/material';
// routes
import Routes from '../../../routes';
// hooks
import { useResponsive } from '../../../hooks';
// @types
import { CaseStudyProps } from '../../../@types/marketing';
// components
import { Image, Iconify, BgOverlay } from '../../../components';
import { varHover, varTranHover } from '../../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  caseStudies: CaseStudyProps[];
};

export default function MarketingLandingCaseStudies({ caseStudies }: Props) {
  const isDesktop = useResponsive('up', 'md');

  const getData = (index: number) => {
    const item = caseStudies[index];
    return {
      slug: item.slug,
      title: item.frontmatter.title,
      coverImg: item.frontmatter.coverImg,
      category: item.frontmatter.category,
      description: item.frontmatter.description,
    };
  };

  return (
    <RootStyle>
      <Container>
        <Stack
          sx={{
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled', mb: 2 }}>
            Our Work
          </Typography>
          <Typography variant="h2">Case Studies</Typography>
        </Stack>

        <Grid container spacing={3} alignItems="center" sx={{ py: { xs: 8, md: 15 } }}>
          {/* Item 1 */}
          <Grid item xs={12} sm={6} md={2}>
            <SmallItem {...getData(0)} isDesktop={isDesktop} />
          </Grid>

          {!isDesktop && (
            <Grid item xs={12} sm={6} md={2}>
              <SmallItem {...getData(5)} isDesktop={isDesktop} />
            </Grid>
          )}

          <Grid item xs={12} sm={12} md={8}>
            <Grid container spacing={3}>
              {/* Item 2 */}
              <Grid item xs={12} sm={6} md={9}>
                {isDesktop ? (
                  <LargeItem {...getData(1)} />
                ) : (
                  <SmallItem {...getData(1)} isSquare isDesktop={isDesktop} />
                )}
              </Grid>

              {/* Item 3 */}
              <Grid item xs={12} sm={6} md={3}>
                <Stack justifyContent={{ md: 'flex-end' }} sx={{ height: { md: 1 } }}>
                  <SmallItem {...getData(2)} isSquare isDesktop={isDesktop} />
                </Stack>
              </Grid>

              {/* Item 4 */}
              <Grid item xs={12} sm={6} md={3}>
                <SmallItem {...getData(3)} isSquare isDesktop={isDesktop} />
              </Grid>

              {/* Item 5 */}
              <Grid item xs={12} sm={6} md={9}>
                {isDesktop ? (
                  <LargeItem {...getData(4)} />
                ) : (
                  <SmallItem {...getData(4)} isSquare isDesktop={isDesktop} />
                )}
              </Grid>
            </Grid>
          </Grid>

          {/* Item 6 */}
          {isDesktop && (
            <Grid item xs={12} sm={6} md={2}>
              <SmallItem {...getData(5)} isDesktop={isDesktop} />
            </Grid>
          )}
        </Grid>

        <Stack alignItems={{ xs: 'center', md: 'flex-end' }}>
          <NextLink href={Routes.marketing.caseStudies} passHref>
            <Button size="large" endIcon={<Iconify icon={directionStraightRight} />}>
              View all
            </Button>
          </NextLink>
        </Stack>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type LargeItemProps = {
  slug: string;
  title: string;
  coverImg: string;
  category: string;
  description: string;
};

function LargeItem({ slug, coverImg, title, category, description }: LargeItemProps) {
  return (
    <Paper sx={{ borderRadius: 2, boxShadow: (theme) => theme.customShadows.z24 }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 0.75 }}>
            <Image alt="cover" src={coverImg} ratio="3/4" sx={{ borderRadius: 2 }} />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack
            alignItems="flex-end"
            justifyContent="space-between"
            sx={{ p: 3, pt: 5, height: 1 }}
          >
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

            <NextLink
              as={Routes.marketing.caseStudy(slug)}
              href={Routes.marketing.caseStudy('[slug]')}
              passHref
            >
              <Button
                size="small"
                color="inherit"
                endIcon={<Iconify icon={directionStraightRight} />}
                sx={{ color: 'text.secondary' }}
              >
                Learn more
              </Button>
            </NextLink>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}

// ----------------------------------------------------------------------

interface SmallItemProps extends LargeItemProps {
  isSquare?: boolean;
  isDesktop?: boolean;
}

function SmallItem({ slug, coverImg, title, category, isSquare, isDesktop }: SmallItemProps) {
  return (
    <NextLink
      as={Routes.marketing.caseStudy(slug)}
      href={Routes.marketing.caseStudy('[slug]')}
      passHref
    >
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
          }}
        >
          <Typography variant="overline" sx={{ opacity: 0.48 }}>
            {category}
          </Typography>
          <Typography variant="h6">{title}</Typography>
        </Stack>
        <BgOverlay />

        <m.div variants={varHover(1.25)} transition={varTranHover()}>
          <Image
            alt="cover"
            src={coverImg}
            ratio={(isSquare && '1/1') || (isDesktop && '3/4') || '1/1'}
          />
        </m.div>
      </Paper>
    </NextLink>
  );
}
