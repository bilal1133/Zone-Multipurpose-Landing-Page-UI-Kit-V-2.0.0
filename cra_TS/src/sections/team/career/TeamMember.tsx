// @mui
import { alpha, styled } from '@mui/material/styles';
import { Typography, Stack, Box, IconButton } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// types
import { ITeamMemberProps } from 'src/types/team';
// _mock
import { _socials } from 'src/_mock';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: alpha(theme.palette.grey[900], 0.88),
    endColor: alpha(theme.palette.grey[900], 0.88),
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  opacity: 0,
  width: '100%',
  height: '100%',
  position: 'absolute',
  transition: theme.transitions.create('opacity', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  }),
  '&:hover': { opacity: 1 },
}));

// ----------------------------------------------------------------------

type Props = {
  member: ITeamMemberProps;
};

export default function TeamMember({ member }: Props) {
  const { name, role, photo } = member;

  return (
    <Box sx={{ position: 'relative' }}>
      <StyledOverlay>
        <Stack
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{
            top: 0,
            width: 1,
            bottom: 0,
            zIndex: 9,
            m: 'auto',
            position: 'absolute',
            color: 'common.white',
          }}
        >
          <Typography variant="h6">{name}</Typography>

          <Typography variant="body2" sx={{ opacity: 0.72, pb: 1 }}>
            {role}
          </Typography>

          <Stack direction="row">
            {_socials.map((social) => (
              <IconButton key={social.value} color="primary">
                <Iconify icon={social.icon} />
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </StyledOverlay>

      <Image src={photo} alt={name} ratio="1/1" />
    </Box>
  );
}
