// @mui
import { Typography, Card, Box, Stack } from '@mui/material';
// @types
import { TeamMemberProps } from '../../../@types/team';
// components
import { Image, SocialsButton, BgOverlay } from '../../../components';

// ----------------------------------------------------------------------

type Props = {
  member: TeamMemberProps;
};

export default function TeamElearningMember({ member }: Props) {
  const { name, role, photo, socialLinks } = member;

  return (
    <Card>
      <Stack spacing={0.5} sx={{ textAlign: 'center', pt: 3, pb: 1.5 }}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body3" sx={{ color: 'text.disabled' }}>
          {role}
        </Typography>
      </Stack>

      <Box sx={{ position: 'relative' }}>
        <Shape />

        <BgOverlay
          sx={{
            opacity: 0,
            transition: (theme) =>
              theme.transitions.create('opacity', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.short,
              }),
            '&:hover': { opacity: 1 },
          }}
        >
          <Box
            sx={{
              width: 1,
              zIndex: 9,
              bottom: 24,
              display: 'flex',
              position: 'absolute',
              justifyContent: 'center',
            }}
          >
            <SocialsButton color="primary" links={socialLinks} />
          </Box>
        </BgOverlay>
        <Image src={photo} alt={name} ratio="1/1" />
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------

function Shape() {
  return (
    <Box
      sx={{
        top: 0,
        width: 1,
        height: 8,
        zIndex: 9,
        position: 'absolute',
        color: 'background.paper',
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="32" viewBox="0 0 1080 32">
        <path fill="currentColor" d="M1080 32L0 0h1080v32z" />
      </svg>
    </Box>
  );
}
