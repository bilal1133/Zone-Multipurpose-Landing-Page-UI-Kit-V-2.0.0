import { Helmet } from 'react-helmet-async';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Container, Stack, Paper, CardHeader, Tooltip } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

const COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

// ----------------------------------------------------------------------

export default function DemoLabelPage() {
  return (
    <>
      <Helmet>
        <title>Components: Label | ZONE UI</title>
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
            heading="Label"
            links={[
              {
                name: 'Components',
                href: paths.components.root,
              },
              { name: 'Label' },
            ]}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Stack spacing={3}>
          <Block title="Filled">
            {COLORS.map((color) => (
              <Tooltip key={color} title={color}>
                <Label color={color} variant="filled">
                  {color}
                </Label>
              </Tooltip>
            ))}
          </Block>

          <Block title="Outlined">
            {COLORS.map((color) => (
              <Label key={color} color={color} variant="outlined">
                {color}
              </Label>
            ))}
          </Block>

          <Block title="Soft">
            {COLORS.map((color) => (
              <Label key={color} color={color} variant="soft">
                {color}
              </Label>
            ))}
          </Block>

          <Block title="With Icon">
            <Label variant="filled" color="primary" startIcon={<Iconify icon="eva:email-fill" />}>
              Start Icon
            </Label>

            <Label variant="filled" color="primary" endIcon={<Iconify icon="eva:email-fill" />}>
              End Icon
            </Label>

            <Label variant="outlined" color="primary" startIcon={<Iconify icon="eva:email-fill" />}>
              Start Icon
            </Label>

            <Label variant="outlined" color="primary" endIcon={<Iconify icon="eva:email-fill" />}>
              End Icon
            </Label>

            <Label color="primary" startIcon={<Iconify icon="eva:email-fill" />}>
              Start Icon
            </Label>

            <Label color="primary" endIcon={<Iconify icon="eva:email-fill" />}>
              End Icon
            </Label>
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
};

export function Block({ title, children }: BlockProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: 1.5,
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
      }}
    >
      {title && <CardHeader title={title} />}
      <Box
        sx={{
          p: 5,
          minHeight: 180,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          '& > *': { mx: 1 },
        }}
      >
        {children}
      </Box>
    </Paper>
  );
}
