import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Stack, Container, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
// _mock
import { _pricing01 } from 'src/_mock';
//
import { PlanCard } from '../pricing-01';

// ----------------------------------------------------------------------

export default function Pricing01View() {
  const [subscription, setSubscription] = useState('monthly');

  const handleChangeSubscription = (event: React.MouseEvent<HTMLElement>, newValue: string) => {
    if (newValue !== null) {
      setSubscription(newValue);
    }
  };

  return (
    <Container
      sx={{
        minHeight: 1,
        pt: { xs: 13, md: 16 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h3" align="center" paragraph>
        Flexible plans for your
        <br /> community&apos;s size and needs
      </Typography>

      <Typography align="center" sx={{ color: 'text.secondary' }}>
        Choose your plan and make modern online conversation magic
      </Typography>

      <Stack sx={{ my: { xs: 5, md: 8 } }}>
        <ToggleButtonGroup
          exclusive
          color="standard"
          value={subscription}
          onChange={handleChangeSubscription}
          sx={{
            mx: 'auto',
            border: 0,
            bgcolor: (theme) => alpha(theme.palette.grey[500], 0.08),
            '& .MuiToggleButton-root': {
              m: 0,
              typography: 'overline',
              color: 'text.secondary',
              '&:hover': {
                bgcolor: 'transparent',
              },
              '&.Mui-selected': {
                bgcolor: 'text.primary',
                color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                '&:hover': {
                  bgcolor: 'text.primary',
                },
              },
            },
          }}
        >
          <ToggleButton value="monthly">MONTHLY</ToggleButton>
          <ToggleButton value="yearly">YEARLY (save 10%)</ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {_pricing01.map((plan) => (
          <PlanCard key={plan.license} plan={plan} />
        ))}
      </Box>
    </Container>
  );
}
