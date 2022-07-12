// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Stack, Box } from '@mui/material';
// @types
import { TeamMemberProps } from '../../../@types/team';
//
import TeamTravelMember from './TeamTravelMember';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0, 15, 0),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  members: TeamMemberProps[];
};

export default function TeamTravelAbout({ members }: Props) {
  return (
    <RootStyle>
      <Container>
        <Stack
          spacing={3}
          sx={{
            mx: 'auto',
            maxWidth: 480,
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h2">Our Team</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
            venenatis ante odio sit amet eros.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            rowGap: { xs: 4, md: 5 },
            columnGap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {members.map((member) => (
            <TeamTravelMember key={member.id} member={member} />
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
