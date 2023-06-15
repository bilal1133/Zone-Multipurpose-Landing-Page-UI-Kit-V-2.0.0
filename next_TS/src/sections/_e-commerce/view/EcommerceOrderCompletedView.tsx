import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
// @mui
import { Box, Button, Typography, Stack, Container } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';
import { MotionContainer, varBounce } from 'src/components/animate';
//
import { EcommerceHeader } from '../layout';

// ----------------------------------------------------------------------

export default function EcommerceOrderCompletedView() {
  return (
    <>
      <EcommerceHeader />

      <Container
        component={MotionContainer}
        sx={{
          textAlign: 'center',
          pt: { xs: 5, md: 10 },
          pb: { xs: 10, md: 20 },
        }}
      >
        <m.div variants={varBounce().in}>
          <Box sx={{ fontSize: 128 }}>🎉</Box>
        </m.div>

        <Stack spacing={1} sx={{ my: 5 }}>
          <Typography variant="h3">Your order is complete!</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            You will be receiving a confirmation email with order details.
          </Typography>
        </Stack>

        <Button
          component={NextLink}
          href={paths.eCommerce.products}
          size="large"
          color="inherit"
          variant="contained"
          startIcon={<Iconify icon="carbon:chevron-left" />}
        >
          Continue Shopping
        </Button>
      </Container>
    </>
  );
}
