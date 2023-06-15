import { Helmet } from 'react-helmet-async';
// @mui
import { Theme } from '@mui/material/styles';
import { Box, Stack, Container, Link, Tooltip, SxProps, Paper, CardHeader } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { m: '8px !important' },
} as const;

// ----------------------------------------------------------------------

export default function DemoIconsPage() {
  return (
    <>
      <Helmet>
        <title>Components: Icons | ZONE UI</title>
      </Helmet>

      <Box
        sx={{
          pt: 6,
          pb: 1,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
        }}
      >
        <Container>
          <CustomBreadcrumbs
            heading="Icons"
            links={[
              {
                name: 'Components',
                href: paths.components.root,
              },
              { name: 'Icons' },
            ]}
            moreLink={[
              'https://mui.com/components/material-icons',
              'https://iconify.design/icon-sets',
            ]}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Stack spacing={3}>
          <Block title="Material Icons" sx={style}>
            <Link
              href="https://mui.com/components/icons/#main-content"
              target="_blank"
              rel="noopener"
            >
              https://mui.com/components/icons/#main-content
            </Link>
          </Block>

          <Block title="Iconify Icons" sx={style}>
            <Tooltip title="Iconify">
              <Iconify icon="eva:color-palette-fill" width={24} />
            </Tooltip>

            <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'action.active' }} />
            <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'action.disabled' }} />
            <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'primary.main' }} />
            <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'secondary.main' }} />
            <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'info.main' }} />
            <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'success.main' }} />
            <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'warning.main' }} />
            <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'error.main' }} />
          </Block>

          <Block title="Local Icons" sx={style}>
            <Tooltip title="SvgColor">
              <SvgColor src="/assets/icons/platforms/ic_cra.svg" />
            </Tooltip>

            <SvgColor src="/assets/icons/platforms/ic_cra.svg" sx={{ color: 'action.active' }} />
            <SvgColor src="/assets/icons/platforms/ic_cra.svg" sx={{ color: 'action.disabled' }} />
            <SvgColor src="/assets/icons/platforms/ic_cra.svg" sx={{ color: 'primary.main' }} />
            <SvgColor src="/assets/icons/platforms/ic_cra.svg" sx={{ color: 'secondary.main' }} />
            <SvgColor src="/assets/icons/platforms/ic_cra.svg" sx={{ color: 'info.main' }} />
            <SvgColor src="/assets/icons/platforms/ic_cra.svg" sx={{ color: 'success.main' }} />
            <SvgColor src="/assets/icons/platforms/ic_cra.svg" sx={{ color: 'warning.main' }} />
            <SvgColor src="/assets/icons/platforms/ic_cra.svg" sx={{ color: 'error.main' }} />
          </Block>
        </Stack>
      </Container>
    </>
  );
}

// ----------------------------------------------------------------------

type BlockProps = {
  title?: string;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
};

export function Block({ title, sx, children }: BlockProps) {
  return (
    <Paper variant="outlined" sx={{ borderRadius: 1.5 }}>
      {title && <CardHeader title={title} />}

      <Box
        sx={{
          p: 5,
          minHeight: 180,
          ...sx,
        }}
      >
        {children}
      </Box>
    </Paper>
  );
}
