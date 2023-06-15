// @mui
import { Typography, Box, Container } from '@mui/material';
// types
import { ITeamMemberProps } from 'src/types/team';
//
import TeamMember from './TeamMember';

// ----------------------------------------------------------------------

type Props = {
  members: ITeamMemberProps[];
};

export default function TeamMarketingAbout({ members }: Props) {
  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Great Team Is The Key
      </Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
          color: 'text.secondary',
        }}
      >
        Since wire-frame renderings are relatively simple and fast to calculate, they are often used
        in cases
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
