import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Stack, Typography, Rating, Button } from '@mui/material';
// utils
import { fCurrency } from 'src/utils/formatNumber';
// routes
import { paths } from 'src/routes/paths';
// types
import { IProductItemCompareProps } from 'src/types/product';
// components
import Image from 'src/components/image';

// ----------------------------------------------------------------------

type Props = {
  product: IProductItemCompareProps;
};

export default function EcommerceCompareItem({ product }: Props) {
  return (
    <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center' }}>
      <Image
        src={product.coverImg}
        sx={{
          flexShrink: 0,
          borderRadius: 1.5,
          bgcolor: 'background.neutral',
        }}
      />

      <Stack alignItems="center" spacing={1}>
        <Typography variant="subtitle2"> {product.name} </Typography>
        <Typography variant="h6"> {fCurrency(product.price)} </Typography>
        <Rating
          size="small"
          readOnly
          value={product.rating}
          precision={0.5}
          sx={{
            '& svg': {
              width: { xs: 12, md: 20 },
              height: { xs: 12, md: 20 },
            },
          }}
        />
      </Stack>

      <Button
        component={RouterLink}
        to={paths.eCommerce.cart}
        fullWidth
        size="large"
        color="inherit"
        variant="contained"
        sx={{ px: 0 }}
      >
        Buy Now
      </Button>

      {product.details.map((row, index) => (
        <Typography
          key={index}
          sx={{
            typography: { xs: 'caption', md: 'body2' },
          }}
        >
          {row || '-'}
        </Typography>
      ))}
    </Stack>
  );
}
