// @mui
import { Stack, Switch, Container, Typography, FormControlLabel } from '@mui/material';
// _mock
import { _productsCompare } from 'src/_mock';
//
import { EcommerceHeader } from '../layout';
import { EcommerceCompareList } from '../compare';

// ----------------------------------------------------------------------

export default function EcommerceCompareView() {
  return (
    <>
      <EcommerceHeader />

      <Container
        sx={{
          overflow: 'hidden',
          pt: 5,
          pb: { xs: 5, md: 10 },
        }}
      >
        <Stack spacing={2} alignItems="flex-start" sx={{ mb: 5 }}>
          <Typography variant="h3">Compare</Typography>

          <FormControlLabel
            control={<Switch color="success" defaultChecked />}
            label="Only view the difference"
          />
        </Stack>

        <EcommerceCompareList products={_productsCompare} />
      </Container>
    </>
  );
}
