// @mui
import { styled } from '@mui/material/styles';
import { Typography, Stack, Box } from '@mui/material';
// @types
import { TeamMemberProps } from '../../../@types/team';
//
import TeamCareerMember from './TeamCareerMember';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  members: TeamMemberProps[];
};

export default function TeamCareerAbout({ members }: Props) {
  return (
    <RootStyle>
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
          Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis
          ante odio sit amet eros.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {members.map((member) => (
          <TeamCareerMember key={member.id} member={member} />
        ))}
      </Box>
    </RootStyle>
  );
}
