// @mui
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
} from '@mui/lab';
import { Box, Stack, Typography, Container } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';

// ----------------------------------------------------------------------

const TIMELINES = [
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

// ----------------------------------------------------------------------

export default function MarketingAboutStory() {
  const isMdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Stack
          spacing={3}
          sx={{
            maxWidth: 480,
            mx: 'auto',
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h2">Our Story</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
          </Typography>
        </Stack>

        <Timeline position={isMdUp ? 'alternate' : 'right'}>
          {TIMELINES.map((value, index) => (
            <TimelineItem
              key={value.title}
              sx={{
                '&:before': {
                  ...(!isMdUp && { display: 'none' }),
                },
              }}
            >
              <TimelineSeparator>
                <TimelineDot color={COLORS[index]} />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                <Typography variant="overline" sx={{ color: `${COLORS[index]}.main` }}>
                  {value.year}
                </Typography>

                <Typography variant="h6" sx={{ mt: 0.5, mb: 1 }}>
                  {value.title}
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
                  {value.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
