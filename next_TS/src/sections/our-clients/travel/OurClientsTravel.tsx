// @mui
import { alpha } from '@mui/material/styles';
import { Typography, Stack, Container, Box } from '@mui/material';
// types
import { IBrandProps } from 'src/types/brand';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

type Props = {
  brands: IBrandProps[];
};

export default function OurClientsTravel({ brands }: Props) {
  return (
    <Container
      sx={{
        pt: 5,
        pb: { xs: 10, md: 15 },
      }}
    >
      <Box
        sx={{
          gap: 3,
          display: 'grid',
          textAlign: { xs: 'center', md: 'left' },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          },
        }}
      >
        <Typography variant="h2">Our Clients</Typography>

        <Stack spacing={2}>
          <Typography variant="h4" paragraph>
            Enhance Your Life By Having A Sense Of Purpose
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Around the world, food-borne illnesses have become increasingly common. In the United
            States alone, millions of people get a food-related illness each year.
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          columnGap: 3,
          display: 'grid',
          mt: { xs: 8, md: 15 },
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {brands.map((brand) => (
          <SvgColor
            key={brand.id}
            src={brand.image}
            sx={{
              width: 106,
              height: 32,
              color: (theme) => alpha(theme.palette.grey[500], 0.8),
              mr: { xs: 'auto' },
              ml: { xs: 'auto', md: 'unset' },
            }}
          />
        ))}
      </Box>
    </Container>
  );
}
