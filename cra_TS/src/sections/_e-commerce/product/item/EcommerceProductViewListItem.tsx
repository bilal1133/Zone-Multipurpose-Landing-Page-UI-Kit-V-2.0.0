import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Stack, StackProps, Link, Fab } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// types
import { IProductItemProps } from 'src/types/product';
// components
import Label from 'src/components/label';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
//
import { ProductRating, ProductPrice } from '../../components';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  product: IProductItemProps;
}

export default function EcommerceProductViewListItem({ product, ...other }: Props) {
  return (
    <Stack
      direction="row"
      sx={{
        position: 'relative',
        '&:hover .add-to-cart': {
          opacity: 1,
        },
      }}
      {...other}
    >
      {product.label === 'new' && (
        <Label color="info" sx={{ position: 'absolute', m: 1, top: 0, left: 0, zIndex: 9 }}>
          NEW
        </Label>
      )}

      {product.label === 'sale' && (
        <Label color="error" sx={{ position: 'absolute', m: 1, top: 0, left: 0, zIndex: 9 }}>
          SALE
        </Label>
      )}

      <Fab
        component={RouterLink}
        to={paths.eCommerce.product}
        className="add-to-cart"
        color="primary"
        size="medium"
        sx={{
          right: 8,
          zIndex: 9,
          top: 8,
          opacity: 0,
          position: 'absolute',
          transition: (theme) =>
            theme.transitions.create('opacity', {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.shortest,
            }),
        }}
      >
        <Iconify icon="carbon:shopping-cart-plus" />
      </Fab>

      <Image
        src={product.coverImg}
        sx={{
          mr: 2,
          width: 160,
          flexShrink: 0,
          borderRadius: 1.5,
          bgcolor: 'background.neutral',
        }}
      />

      <Stack spacing={1}>
        <Stack spacing={0.5}>
          <TextMaxLine variant="caption" line={1} sx={{ color: 'text.disabled' }}>
            {product.category}
          </TextMaxLine>

          <Link component={RouterLink} to={paths.eCommerce.product} color="inherit">
            <TextMaxLine variant="h6" line={1}>
              {product.name}
            </TextMaxLine>
          </Link>
        </Stack>

        <ProductRating rating={product.rating} label={`${product.sold} sold`} />

        <TextMaxLine variant="body2" line={1} sx={{ color: 'text.secondary' }}>
          {product.caption}
        </TextMaxLine>

        <ProductPrice
          price={product.price}
          priceSale={product.priceSale}
          sx={{ typography: 'h6' }}
        />
      </Stack>
    </Stack>
  );
}
