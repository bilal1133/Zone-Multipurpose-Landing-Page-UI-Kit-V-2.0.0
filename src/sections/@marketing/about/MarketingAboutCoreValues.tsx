// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Box } from '@mui/material';
// components
import { SvgIconStyle } from '../../../components';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Customer Satisfaction',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_agreement.svg',
  },
  {
    title: 'Transparency',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_transparency.svg',
  },
  {
    title: 'Reputation',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_reputation.svg',
  },
  {
    title: 'Cooperation',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_popularity.svg',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAboutCoreValues() {
  return (
    <RootStyle>
      <Container>
        <Typography
          variant="h2"
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          Our Core Values
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gap: 8,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {CORE_VALUES.map((value) => (
            <div key={value.title}>
              <SvgIconStyle
                src={value.icon}
                sx={{ width: 64, height: 64, mx: 'auto', color: 'primary.main' }}
              />
              <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
                {value.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
            </div>
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
