// @mui
import { styled } from '@mui/material/styles';
import { Typography, Stack, Container, Box } from '@mui/material';
// @types
import { BrandProps } from '../../../@types/brand';
// components
import { SvgIconStyle } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  brands: BrandProps[];
};

export default function OurClientsTravel({ brands }: Props) {
  return (
    <RootStyle>
      <Container>
        <Box
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            display: 'grid',
            gap: 3,
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
            mt: { xs: 8, md: 15 },
            display: 'grid',
            rowGap: { xs: 4, md: 5 },
            columnGap: 3,
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {brands.map((brand) => (
            <SvgIconStyle
              key={brand.id}
              src={brand.image}
              sx={{
                width: 106,
                height: 32,
                color: 'grey.50080',
                mr: { xs: 'auto' },
                ml: { xs: 'auto', md: 'unset' },
              }}
            />
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
