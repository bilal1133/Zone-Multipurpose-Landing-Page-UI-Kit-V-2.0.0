import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Stack, Container, Typography, Button, Divider } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import { Iconify, Image } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    paddingBottom: 0,
    paddingTop: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingLandingAbout() {
  return (
    <RootStyle>
      <Container>
        <Image
          alt="langding about"
          src="https://zone-assets-api.vercel.app/assets/images/marketing/marketing_langding_about.jpg"
          ratio="16/9"
          sx={{
            borderRadius: 1.5,
            mb: { xs: 5, md: 10 },
          }}
        />

        <Grid
          container
          rowSpacing={{ xs: 5, md: 0 }}
          columnSpacing={{ md: 3 }}
          justifyContent="space-between"
        >
          <Grid item xs={12} md={5} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              About Us
            </Typography>

            <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
              Who We Are
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. In dui magna, posuere eget, vestibulum et, tempor
              auctor, justo. Pellentesque habitant morbi tristique senectus et netus et malesuada
              fames ac turpis egestas.
            </Typography>

            <Button size="large" endIcon={<Iconify icon={directionStraightRight} />} sx={{ mt: 5 }}>
              Lean more
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={5}>
              <LineItem
                total="150"
                label="projects"
                text="Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus."
              />
              <LineItem
                total={fShortenNumber(32000)}
                label="Happy clients"
                text="Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus."
              />
              <LineItem
                total="20"
                label="years of experience"
                text="Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus."
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type LineItemProps = {
  total: string;
  label: string;
  text: string;
};

function LineItem({ total, label, text }: LineItemProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      divider={<Divider orientation="vertical" flexItem sx={{ ml: 3, mr: 5 }} />}
    >
      <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
        <Stack direction="row">
          <Typography variant="h2">{total}</Typography>
          <Typography variant="h4" sx={{ color: 'primary.main' }}>
            +
          </Typography>
        </Stack>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          {label}
        </Typography>
      </Stack>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {text}
      </Typography>
    </Stack>
  );
}
