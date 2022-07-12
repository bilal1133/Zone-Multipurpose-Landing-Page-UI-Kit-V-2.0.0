// @mui
import { styled } from '@mui/material/styles';
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
} from '@mui/lab';
import { Stack, Typography, Container } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    year: '2021',
    title: 'Customer Satisfaction',
    description:
      'Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.',
  },
  {
    year: '2020',
    title: 'Transparency',
    description:
      'Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.',
  },
  {
    year: '2019',
    title: 'Reputation',
    description:
      'Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.',
  },
  {
    year: '2018',
    title: 'Cooperation',
    description:
      'Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.',
  },
];

const COLORS = ['primary', 'secondary', 'warning', 'success'] as const;

const RootStyle = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAboutStory() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <RootStyle>
      <Container>
        <Stack
          spacing={3}
          sx={{
            maxWidth: 480,
            textAlign: 'center',
            mx: 'auto',
            mb: { xs: 8, md: 15 },
          }}
        >
          <Typography variant="h2">Our Story</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
          </Typography>
        </Stack>

        <Timeline position={isDesktop ? 'alternate' : 'right'}>
          {CORE_VALUES.map((value, index) => {
            const { title, description, year } = value;
            return (
              <TimelineItem
                key={title}
                sx={{
                  '&:before': {
                    display: { xs: 'none', md: 'block' },
                  },
                }}
              >
                <TimelineSeparator>
                  <TimelineDot color={COLORS[index]} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                  <Typography variant="subtitle3" sx={{ color: `${COLORS[index]}.main` }}>
                    {year}
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 0.5, mb: 1 }}>
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      maxWidth: { md: 360 },
                      ...(index % 2 && {
                        ml: 'auto',
                      }),
                    }}
                  >
                    {description}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Container>
    </RootStyle>
  );
}
