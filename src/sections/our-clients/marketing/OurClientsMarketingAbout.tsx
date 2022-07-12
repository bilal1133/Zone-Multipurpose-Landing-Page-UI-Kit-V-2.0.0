// @mui
import { styled } from '@mui/material/styles';
import { Typography, Stack, Container } from '@mui/material';
// @types
import { BrandProps } from '../../../@types/brand';
// components
import { Image } from '../../../components';

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

export default function OurClientsMarketingAbout({ brands }: Props) {
  return (
    <RootStyle>
      <Container>
        <Stack alignItems="center" spacing={{ xs: 6, md: 8 }}>
          <Typography variant="h2">Our Clients</Typography>

          <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{ maxWidth: 680 }}>
            {brands.slice(0, 8).map((brand) => (
              <Image
                key={brand.id}
                alt={brand.name}
                src={brand.image}
                sx={{
                  height: 32,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            ))}
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}
