// @mui
import { Stack, Typography } from '@mui/material';
// _mock
import { IProductItemProps } from 'src/types/product';
//
import { EcommerceProductItemBestSellers } from '../item';

// ----------------------------------------------------------------------

type Props = {
  products: IProductItemProps[];
};

export default function EcommerceProductListBestSellers({ products }: Props) {
  return (
    <Stack spacing={3}>
      <Typography variant="h6">Best Sellers</Typography>

      {products.slice(0, 8).map((product) => (
        <EcommerceProductItemBestSellers key={product.id} product={product} />
      ))}
    </Stack>
  );
}
