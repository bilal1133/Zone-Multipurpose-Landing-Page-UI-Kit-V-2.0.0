import { Helmet } from 'react-helmet-async';
// @mui
import { Box, Container, Typography, Stack } from '@mui/material';
// utils
import { fShortenNumber } from 'src/utils/formatNumber';
// routes
import { paths } from 'src/routes/paths';
// components
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import CountUp from 'src/components/count-up';

// ----------------------------------------------------------------------

const SUMMARY = [
  { name: 'Jobs', number: 2230000 },
  { name: 'Successful Hiring', number: 500000 },
  { name: 'Partners', number: 250 },
  { name: 'Employee', number: 1560 },
];

// ----------------------------------------------------------------------

export default function DemoCountUpPage() {
  return (
    <>
      <Helmet>
        <title>Components: CountUp | ZONE UI</title>
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
            heading="CountUp"
            links={[
              {
                name: 'Components',
                href: paths.components.root,
              },
              { name: 'CountUp' },
            ]}
            moreLink={['https://www.npmjs.com/package/react-countup']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Stack spacing={5} direction="row" alignItems="center">
          {SUMMARY.map((value) => (
            <div key={value.name}>
              <Typography variant="h2" gutterBottom>
                <CountUp
                  start={value.number / 5}
                  end={value.number}
                  formattingFn={(newValue: number) => fShortenNumber(newValue)}
                />

                <Typography variant="h3" component="span" sx={{ verticalAlign: 'top', ml: 0.5 }}>
                  +
                </Typography>
              </Typography>

              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                {value.name}
              </Typography>
            </div>
          ))}
        </Stack>
      </Container>
    </>
  );
}
