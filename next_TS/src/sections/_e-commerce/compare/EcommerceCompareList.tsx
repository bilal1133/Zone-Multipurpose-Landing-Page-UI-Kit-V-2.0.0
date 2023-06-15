// @mui
import { Divider, Stack } from '@mui/material';
// types
import { IProductItemCompareProps } from 'src/types/product';
//
import EcommerceCompareItem from './EcommerceCompareItem';

// ----------------------------------------------------------------------

type Props = {
  products: IProductItemCompareProps[];
};

export default function EcommerceCompareList({ products }: Props) {
  return (
    <Stack
      direction="row"
      spacing={{ xs: 1, md: 3 }}
      divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
    >
      {products.map((product) => (
        <EcommerceCompareItem key={product.id} product={product} />
      ))}
    </Stack>
  );
}
