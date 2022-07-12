// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Stack, Button, Box } from '@mui/material';
// @types
import { TeamMemberProps } from '../../../@types/team';
//
import TeamElearningMember from './TeamElearningMember';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  members: TeamMemberProps[];
};

export default function TeamElearningLanding({ members }: Props) {
  return (
    <RootStyle>
      <Container>
        <Stack spacing={3} sx={{ maxWidth: 480, mx: 'auto' }}>
          <Typography variant="h2">Meet Our Teachers</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Since wire-frame renderings are relatively simple and fast to calculate, they are often
            used in cases
          </Typography>
        </Stack>

        <Box
          sx={{
            py: { xs: 8, md: 10 },
            display: 'grid',
            gap: { xs: 4, md: 3 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {members.map((member) => (
            <TeamElearningMember key={member.id} member={member} />
          ))}
        </Box>

        <Button variant="outlined" size="large" color="inherit">
          View All Teachers
        </Button>
      </Container>
    </RootStyle>
  );
}
