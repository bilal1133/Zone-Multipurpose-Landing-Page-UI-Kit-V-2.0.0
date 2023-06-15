import { m } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Typography, Box, Stack, IconButton } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// types
import { ITeamMemberProps } from 'src/types/team';
// _mock
import { _socials } from 'src/_mock';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { varHover, varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
  opacity: 0,
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
    <Box
      component={m.div}
      whileHover="hover"
      variants={varHover(1.05)}
      transition={varTranHover()}
      sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
    >
      <StyledOverlay>
        <Stack
          spacing={1}
          alignItems="center"
          sx={{
            width: 1,
            zIndex: 9,
            bottom: 24,
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

      <m.div variants={varHover()} transition={varTranHover()}>
        <Image src={photo} alt={name} ratio="3/4" />
      </m.div>
    </Box>
  );
}
