import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Stack, Button, Rating, Typography, TextField, Divider } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// routes
import { paths } from 'src/routes/paths';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
//
import { ProductColorPicker, ProductOptionPicker, ProductPrice } from '../../components';

// ----------------------------------------------------------------------

const COLOR_OPTIONS = [
  { label: '#FA541C', value: 'red' },
  { label: '#754FFE', value: 'violet' },
  { label: '#00B8D9', value: 'cyan' },
  { label: '#36B37E', value: 'green' },
];

const MEMORY_OPTIONS = [
  { label: '128GB', value: '128gb' },
  { label: '256GB', value: '256gb' },
  { label: '512GB', value: '512gb' },
  { label: '1TB', value: '1tb' },
];

// ----------------------------------------------------------------------

type Props = {
  name: string;
  price: number;
  rating: number;
  review: number;
  priceSale: number;
  caption: string;
};

export default function EcommerceProductDetailsInfo({
  name,
  price,
  rating,
  review,
  priceSale,
  caption,
}: Props) {
  const isMdUp = useResponsive('up', 'md');

  const [color, setColor] = useState('red');

  const [memory, setMemory] = useState('128gb');

  const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor((event.target as HTMLInputElement).value);
  };

  const handleChangeMemory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMemory((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <Label color="success" sx={{ mb: 3 }}>
        In Stock
      </Label>

      <Stack spacing={1} sx={{ mb: 2 }}>
        <Typography variant="h4"> {name} </Typography>

        <Stack spacing={0.5} direction="row" alignItems="center">
          <Rating size="small" value={rating} readOnly precision={0.5} />

          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            ({review} reviews)
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={2}>
        <ProductPrice price={price} priceSale={priceSale} sx={{ typography: 'h5' }} />

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {caption}
        </Typography>
      </Stack>

      <Stack spacing={3} sx={{ my: 5 }}>
        <Stack spacing={2}>
          <Typography variant="subtitle2">Color</Typography>
          <ProductColorPicker value={color} onChange={handleChangeColor} options={COLOR_OPTIONS} />
        </Stack>

        <Stack spacing={2}>
          <Typography variant="subtitle2">Memory</Typography>
          <ProductOptionPicker
            value={memory}
            onChange={handleChangeMemory}
            options={MEMORY_OPTIONS}
          />
        </Stack>
      </Stack>

      <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} alignItems={{ md: 'center' }}>
        <TextField
          select
          hiddenLabel
          SelectProps={{
            native: true,
          }}
          sx={{
            minWidth: 100,
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextField>

        <Stack direction="row" spacing={2}>
          <Button
            component={RouterLink}
            to={paths.eCommerce.cart}
            fullWidth={!isMdUp}
            size="large"
            color="inherit"
            variant="contained"
            startIcon={<Iconify icon="carbon:shopping-cart-plus" />}
          >
            Add to Cart
          </Button>

          <Button
            component={RouterLink}
            to={paths.eCommerce.cart}
            fullWidth={!isMdUp}
            size="large"
            color="primary"
            variant="contained"
          >
            Buy Now
          </Button>
        </Stack>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed', my: 3 }} />

      <Stack spacing={3} direction="row" justifyContent={{ xs: 'center', md: 'unset' }}>
        <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
          <Iconify icon="carbon:add-alt" sx={{ mr: 1 }} /> Compare
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
          <Iconify icon="carbon:favorite" sx={{ mr: 1 }} /> Compare
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
          <Iconify icon="carbon:share" sx={{ mr: 1 }} /> Compare
        </Stack>
      </Stack>
    </>
  );
}
