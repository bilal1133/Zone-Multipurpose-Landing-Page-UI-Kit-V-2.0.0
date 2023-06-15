import { Link as RouterLink } from 'react-router-dom';
// @mui
import { alpha } from '@mui/material/styles';
import {
  Box,
  Stack,
  Button,
  Container,
  Typography,
  StackProps,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// _mock
import { _products } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
//
import { EcommerceProductItemFeaturedByBrand } from '../product/item';

// ----------------------------------------------------------------------

export default function EcommerceLandingFeaturedBrands() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 8 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 8,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        Featured Brands
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <BrandInfo
            logo={<Iconify icon="ri:apple-fill" width={40} />}
            name="Apple"
            description=" While most people enjoy casino gambling, sports betting, lottery and bingo playing."
            path="#"
            sx={{ height: 1 }}
          />
        </Grid>

        <Grid xs={12} md={8}>
          <Box
            gap={3}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            }}
          >
            {_products.slice(4, 8).map((product) => (
              <EcommerceProductItemFeaturedByBrand key={product.id} product={product} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

// ----------------------------------------------------------------------

interface BrandInfoProps extends StackProps {
  name?: string;
  path: string;
  description?: string;
  logo?: React.ReactNode;
}

function BrandInfo({ logo, name, description, path, sx, ...other }: BrandInfoProps) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        p: 5,
        borderRadius: 2,
        textAlign: 'center',
        border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        ...sx,
      }}
      {...other}
    >
      {logo}

      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
        {name}
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {description}
      </Typography>

      <Button
        component={RouterLink}
        to={path}
        color="inherit"
        endIcon={<Iconify icon="carbon:chevron-right" />}
        sx={{ mt: 5 }}
      >
        More Details
      </Button>
    </Stack>
  );
}
