// @mui
import { Stack } from '@mui/material';
// types
import { IProductItemProps } from 'src/types/product';
// components
import Scrollbar from 'src/components/scrollbar';
//
import EcommerceCartItem from './EcommerceCartItem';

// ----------------------------------------------------------------------

type Props = {
  products: IProductItemProps[];
  wishlist?: boolean;
};

export default function EcommerceCartList({ products, wishlist = false }: Props) {
  return (
    <Scrollbar>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          py: 2,
          minWidth: 720,
          typography: 'subtitle2',
          borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      >
        <Stack flexGrow={1}>Item</Stack>
        <Stack sx={{ width: 120 }}>Qty</Stack>
        <Stack sx={{ width: 120 }}>Subtotal</Stack>
        <Stack sx={{ width: 36 }} />
        {wishlist && <Stack sx={{ width: 36 }} />}
      </Stack>

      {products.map((product) => (
        <EcommerceCartItem key={product.id} product={product} wishlist={wishlist} />
      ))}
    </Scrollbar>
  );
}
