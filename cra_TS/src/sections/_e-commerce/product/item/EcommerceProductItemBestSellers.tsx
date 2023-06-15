import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Stack, StackProps, Link } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// types
import { IProductItemProps } from 'src/types/product';
// components
import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
//
import { ProductPrice, ProductRating } from '../../components';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  product: IProductItemProps;
}

export default function EcommerceProductItemBestSellers({ product, ...other }: Props) {
  return (
    <Link component={RouterLink} to={paths.eCommerce.product} color="inherit" underline="none">
      <Stack
        spacing={2}
        direction="row"
        sx={{
          transition: (theme) =>
            theme.transitions.create('opacity', {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.shortest,
            }),
          '&:hover': { opacity: 0.72 },
        }}
        {...other}
      >
        <Image
          src={product.coverImg}
          sx={{
            width: 80,
            height: 80,
            flexShrink: 0,
            borderRadius: 1.5,
            bgcolor: 'background.neutral',
          }}
        />

        <Stack spacing={0.5}>
          <TextMaxLine variant="body2" line={1} sx={{ fontWeight: 'fontWeightMedium' }}>
            {product.name}
          </TextMaxLine>

          <ProductRating rating={product.rating} label={`${product.sold} sold`} />

          <ProductPrice price={product.price} priceSale={product.priceSale} />
        </Stack>
      </Stack>
    </Link>
  );
}
