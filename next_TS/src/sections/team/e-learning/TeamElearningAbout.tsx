// @mui
import { Typography, Container, Box } from '@mui/material';
// types
import { ITeamMemberProps } from 'src/types/team';
//
import TeamMember from './TeamMember';

// ----------------------------------------------------------------------

type Props = {
  members: ITeamMemberProps[];
};

export default function TeamElearningAbout({ members }: Props) {
  return (
    <Container sx={{ py: { xs: 8, md: 15 } }}>
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
        }}
      >
        Our Teachers
      </Typography>

      <Box
        sx={{
          columnGap: 3,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {members.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </Box>
    </Container>
  );
}
