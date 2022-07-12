// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Typography, Stack, Box } from '@mui/material';
// @types
import { TeamMemberProps } from '../../../@types/team';
// components
import { Image, SocialsButton, BgOverlay } from '../../../components';

// ----------------------------------------------------------------------

type Props = {
  member: TeamMemberProps;
};

export default function TeamCareerMember({ member }: Props) {
  const theme = useTheme();
  const { name, role, photo, socialLinks } = member;

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <BgOverlay
          startColor={alpha(theme.palette.grey[900], 0.88)}
          endColor={alpha(theme.palette.grey[900], 0.88)}
          sx={{
            opacity: 0,
            display: 'flex',
            alignItems: 'center',
            transition: (theme) =>
              theme.transitions.create('opacity', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.short,
              }),
            '&:hover': { opacity: 1 },
          }}
        >
          <Stack
            spacing={1}
            alignItems="center"
            sx={{
              width: 1,
              zIndex: 9,
              position: 'absolute',
              color: 'common.white',
            }}
          >
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body3" sx={{ opacity: 0.72, pb: 1 }}>
              {role}
            </Typography>

            <SocialsButton color="primary" links={socialLinks} />
          </Stack>
        </BgOverlay>

        <Image src={photo} alt={name} ratio="4/3" />
      </Box>
    </>
  );
}
