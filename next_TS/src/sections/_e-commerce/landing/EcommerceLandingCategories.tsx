// @mui
import { alpha } from '@mui/material/styles';
import { Box, Typography, Container, Stack } from '@mui/material';
// components
import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

const CATEGORIES = [
  { label: 'Men Clothes', icon: '/assets/icons/e-commerce/ic_men_clothes.svg', path: '#' },
  {
    label: 'Women Clothes',
    icon: '/assets/icons/e-commerce/ic_women_clothes.svg',
    path: '#',
  },
  { label: 'Watches', icon: '/assets/icons/e-commerce/ic_watches.svg', path: '#' },
  {
    label: 'Home Appliances',
    icon: '/assets/icons/e-commerce/ic_home_appliances.svg',
    path: '#',
  },
  { label: 'Sport & Outdoor', icon: '/assets/icons/e-commerce/ic_sport.svg', path: '#' },
  { label: 'Books & Stationery', icon: '/assets/icons/e-commerce/ic_book.svg', path: '#' },
  { label: 'Home & Living', icon: '/assets/icons/e-commerce/ic_home_living.svg', path: '#' },
  { label: 'Health', icon: '/assets/icons/e-commerce/ic_health.svg', path: '#' },
  { label: 'Mobile', icon: '/assets/icons/e-commerce/ic_mobile.svg', path: '#' },
  { label: 'Laptop', icon: '/assets/icons/e-commerce/ic_laptop.svg', path: '#' },
  { label: 'Tablet', icon: '/assets/icons/e-commerce/ic_tablet.svg', path: '#' },
  { label: 'Headphones', icon: '/assets/icons/e-commerce/ic_headphones.svg', path: '#' },
];

// ----------------------------------------------------------------------

export default function EcommerceLandingCategories() {
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
        Categories
      </Typography>

      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(2, 1fr)',
          sm: 'repeat(4, 1fr)',
          md: 'repeat(6, 1fr)',
        }}
      >
        {CATEGORIES.map((category) => (
          <Stack
            key={category.label}
            alignItems="center"
            justifyContent="center"
            sx={{
              px: 1,
              py: 3,
              borderRadius: 2,
              cursor: 'pointer',
              border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
              '&:hover': {
                boxShadow: (theme) => `0 0 0 2px ${theme.palette.text.primary}`,
              },
            }}
          >
            <Box sx={{ mb: 2, p: 1.5, bgcolor: 'background.neutral', borderRadius: '50%' }}>
              <Image src={category.icon} sx={{ width: 40, height: 40 }} />
            </Box>

            <TextMaxLine variant="subtitle2" line={1}>
              {category.label}
            </TextMaxLine>
          </Stack>
        ))}
      </Box>
    </Container>
  );
}
