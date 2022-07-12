import { ReactElement } from 'react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography, Stack, Box, Link, Paper } from '@mui/material';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config';
// utils
import { getAllComponents } from '../../src/utils/get-mardown/components-ui';
// routes
import Routes from '../../src/routes';
// layouts
import Layout from '../../src/layouts';
// components
import { Page, Iconify, TextIconLabel } from '../../src/components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT * 1.5,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT * 1.5,
    paddingBottom: theme.spacing(15),
  },
}));

// ----------------------------------------------------------------------

export type ComponentProps = {
  slug: string;
  content: MDXRemoteSerializeResult;
  frontmatter: {
    title: string;
    link: string;
  };
};

type Props = {
  components: ComponentProps[];
};

export default function ComponentsUIPage({ components }: Props) {
  return (
    <Page title="Components">
      <RootStyle>
        <Container>
          <Typography variant="h4" sx={{ mb: 3 }}>
            MUI Components
          </Typography>

          <Paper
            variant="outlined"
            sx={{
              p: 3,
              mb: 5,
              borderRadius: 1.5,
              borderStyle: 'dashed',
              bgcolor: 'background.neutral',
            }}
          >
            <Stack spacing={2} alignItems="flex-start">
              <Typography>
                The
                <Box component="span" sx={{ color: 'text.disabled', fontWeight: 'fontWeightBold' }}>
                  {' '}
                  ZONE{' '}
                </Box>
                UI is built on components from{' '}
                <Link underline="always" href={Routes.muiComponents} target="_blank" rel="noopener">
                  {' '}
                  MUI
                </Link>
              </Typography>
              <Typography>
                So you can use all the components provided from MUI in this template.
              </Typography>

              <Link href={Routes.muiComponents} target="_blank" rel="noopener">
                <TextIconLabel
                  endIcon
                  icon={
                    <Iconify icon={directionStraightRight} sx={{ ml: 1, width: 20, height: 20 }} />
                  }
                  value="Browsing MUI Components"
                  sx={{ typography: 'h6' }}
                />
              </Link>
            </Stack>
          </Paper>

          <Stack spacing={2} sx={{ mb: 5 }}>
            <Typography variant="h4">ZONE Components</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Some other components used in this template
            </Typography>
          </Stack>

          <Box
            sx={{
              display: 'grid',
              gap: 4,
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)',
              },
            }}
          >
            {components.map((component) => (
              <BoxItem key={component.slug} component={component} />
            ))}
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

type BoxItemProps = {
  component: ComponentProps;
};

function BoxItem({ component }: BoxItemProps) {
  return (
    <NextLink passHref as={Routes.componentUI(component.slug)} href={Routes.componentUI('[slug]')}>
      <Link color="inherit">
        <Paper variant="outlined" sx={{ px: 3, py: 4, borderRadius: 1.5 }}>
          <TextIconLabel
            icon={
              <Box
                sx={{
                  mr: 2,
                  width: 12,
                  height: 12,
                  opacity: 0.24,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                }}
              />
            }
            value={component.frontmatter.title}
            sx={{ typography: 'h6', textTransform: 'capitalize' }}
          />
        </Paper>
      </Link>
    </NextLink>
  );
}

// ----------------------------------------------------------------------

ComponentsUIPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      components: getAllComponents(),
    },
  };
}
