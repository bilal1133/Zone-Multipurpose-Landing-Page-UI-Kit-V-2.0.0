import { useState } from 'react';
import { add } from 'date-fns';
// @mui
import {
  Box,
  Stack,
  alpha,
  Button,
  Divider,
  Container,
  Typography,
  StackProps,
} from '@mui/material';
// components
import Image from 'src/components/image';
//
import { ProductColorPicker, ProductOptionPicker, ProductCountdownBlock } from '../components';

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

export default function EcommerceLandingSpecialOffer() {
  const [color, setColor] = useState('red');

  const [memory, setMemory] = useState('128gb');

  const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor((event.target as HTMLInputElement).value);
  };

  const handleChangeMemory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMemory((event.target as HTMLInputElement).value);
  };

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
        Special Offer
      </Typography>

      <Box
        gap={{ xs: 5, md: 8 }}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
      >
        <SpecialOfferCountdown
          label="New 2022"
          name="Apple iPhone 14"
          price="From $999"
          expired={add(new Date(), { days: 1, hours: 8 })}
        />

        <Box sx={{ borderRadius: 1.5, bgcolor: 'background.neutral' }}>
          <Image src="/assets/images/product/product_5.png" />
        </Box>

        <SpecialOfferBuyNow
          color={color}
          memory={memory}
          onChangeColor={handleChangeColor}
          onChangeMemory={handleChangeMemory}
        />
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

interface SpecialOfferCountdownProps extends StackProps {
  expired: Date;
  label: string;
  name: string;
  price: string;
}

function SpecialOfferCountdown({
  expired,
  label,
  name,
  price,
  sx,
  ...other
}: SpecialOfferCountdownProps) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        p: 5,
        borderRadius: 2,
        textAlign: 'center',
        boxShadow: (theme) => theme.customShadows.z24,
        ...sx,
      }}
      {...other}
    >
      <Typography variant="overline" sx={{ color: 'primary.main' }}>
        {label}
      </Typography>

      <Typography variant="h5" sx={{ mt: 1, mb: 3 }}>
        {name}
      </Typography>

      <Typography
        variant="subtitle2"
        sx={{
          px: 2,
          py: 1,
          borderRadius: 1,
          border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        }}
      >
        {price}
      </Typography>

      <Divider sx={{ borderStyle: 'dashed', my: 3, width: 1 }} />

      <Typography variant="body2" sx={{ mb: 2 }}>
        Deal ends in:
      </Typography>

      <ProductCountdownBlock
        expired={expired}
        sx={{
          '& .value': {
            color: 'text.primary',
            bgcolor: 'transparent',
            border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.32)}`,
          },
          '& .label': { color: 'text.secondary' },
          '& .separator': { color: 'inherit' },
        }}
      />
    </Stack>
  );
}

// ----------------------------------------------------------------------

interface SpecialOfferBuyNowProps extends StackProps {
  color: string;
  memory: string;
  onChangeColor: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeMemory: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SpecialOfferBuyNow({
  color,
  memory,
  onChangeColor,
  onChangeMemory,
  sx,
  ...other
}: SpecialOfferBuyNowProps) {
  return (
    <Stack spacing={3} alignItems="flex-start" {...other}>
      <Stack spacing={1}>
        <Typography variant="h4">Apple iPhone 14</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          While most people enjoy casino gambling, sports betting, lottery and bingo playing for the
          fun.
        </Typography>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="subtitle2">Color</Typography>
        <ProductColorPicker value={color} onChange={onChangeColor} options={COLOR_OPTIONS} />
      </Stack>

      <Stack spacing={2}>
        <Typography variant="subtitle2">Memory</Typography>
        <ProductOptionPicker value={memory} onChange={onChangeMemory} options={MEMORY_OPTIONS} />
      </Stack>

      <Button size="large" color="inherit" variant="contained">
        Buy Now
      </Button>
    </Stack>
  );
}
