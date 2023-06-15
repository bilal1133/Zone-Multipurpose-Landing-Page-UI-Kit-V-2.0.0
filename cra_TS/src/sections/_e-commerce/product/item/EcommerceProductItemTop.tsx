import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Theme } from '@mui/material/styles';
import { Stack, Box, Paper, Button, SxProps } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// routes
import { paths } from 'src/routes/paths';
// types
import { IProductItemProps } from 'src/types/product';
// components
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
//
import { ProductPrice } from '../../components';

// ----------------------------------------------------------------------

type Props = {
  product: IProductItemProps;
  sx?: SxProps<Theme>;
  variant?: 'small' | 'large';
};

export default function EcommerceProductItemTop({ product, variant = 'small', sx }: Props) {
  const isMdUp = useResponsive('up', 'md');

  const isLarge = isMdUp && variant === 'large';

  const coverImg = <Image src={product.coverImg} />;

  const nameText = (
    <TextMaxLine variant="h5" line={1}>
      {product.name}
    </TextMaxLine>
  );

  const priceText = (
    <ProductPrice price={product.price} sx={{ typography: 'h5', color: 'text.disabled' }} />
  );

  const moreBtn = (
    <Button
      component={RouterLink}
      to={paths.eCommerce.product}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
      sx={{ flexShrink: 0 }}
    >
      More Details
    </Button>
  );

  const renderLargeItem = (
    <Stack spacing={5}>
      {coverImg}

      <Stack spacing={5} direction="row" alignItems="center">
        <Stack spacing={1} flexGrow={1}>
          {nameText}
          {priceText}
        </Stack>

        {moreBtn}
      </Stack>
    </Stack>
  );

  const renderSmallItem = (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
      sx={{ height: 1 }}
    >
      <Box
        sx={{
          order: { sm: 2 },
        }}
      >
        {coverImg}
      </Box>

      <Stack spacing={1}>
        {nameText}
        {priceText}

        <Stack
          flexGrow={1}
          alignItems={{ xs: 'flex-end', sm: 'flex-start' }}
          justifyContent="flex-end"
          sx={{ pt: 5 }}
        >
          {moreBtn}
        </Stack>
      </Stack>
    </Box>
  );

  return (
    <Paper
      sx={{
        p: 5,
        borderRadius: 2,
        bgcolor: 'background.neutral',
        ...sx,
      }}
    >
      {isLarge ? renderLargeItem : renderSmallItem}
    </Paper>
  );
}
