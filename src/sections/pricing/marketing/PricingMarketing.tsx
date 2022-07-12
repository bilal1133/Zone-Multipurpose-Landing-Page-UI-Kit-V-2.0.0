// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Switch, Container, Typography } from '@mui/material';
// @types
import { PricingMarketingProps } from '../../../@types/pricing';
// components
import PricingMarketingCard from './PricingMarketingCard';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  plans: PricingMarketingProps[];
};

export default function PricingMarketing({ plans }: Props) {
  return (
    <RootStyle>
      <Container>
        <Stack
          spacing={5}
          alignItems={{ xs: 'center', md: 'flex-end' }}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          sx={{ mb: { xs: 5, md: 10 } }}
        >
          <Box
            sx={{
              maxWidth: 480,
              mx: { xs: 'auto', md: 'unset' },
              textAlign: { xs: 'center', md: 'unset' },
            }}
          >
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Pricing
            </Typography>
            <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
              Check Our Pricing
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Choose the perfect plan for your needs.
              <br /> Always flexible to grow
            </Typography>
          </Box>

          <Stack direction="row" alignItems="center">
            <Typography variant="overline">MONTHLY</Typography>
            <Switch defaultChecked />
            <Typography variant="overline">YEARLY (save 10%)</Typography>
          </Stack>
        </Stack>

        <Box
          sx={{
            alignItems: 'center',
            display: 'grid',
            gap: 4,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {plans.map((plan) => (
            <PricingMarketingCard key={plan.license} plan={plan} />
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
