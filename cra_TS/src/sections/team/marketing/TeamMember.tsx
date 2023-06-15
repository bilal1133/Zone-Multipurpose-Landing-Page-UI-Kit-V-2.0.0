import { m } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Typography, Box, Stack, IconButton, StackProps } from '@mui/material';
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

interface TeamMarketingMemberProps extends StackProps {
  member: ITeamMemberProps;
}

export default function TeamMember({ member, ...other }: TeamMarketingMemberProps) {
  const { name, role, photo } = member;

  return (
    <Stack {...other}>
      <Box
        component={m.div}
        whileHover="hover"
        variants={varHover(0.95)}
        transition={varTranHover()}
        sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
      >
        <StyledOverlay>
          <Stack
            direction="row"
            justifyContent="center"
            sx={{ width: 1, zIndex: 9, bottom: 24, position: 'absolute' }}
          >
            {_socials.map((social) => (
              <IconButton key={social.value} color="primary">
                <Iconify icon={social.icon} />
              </IconButton>
            ))}
          </Stack>
        </StyledOverlay>

        <m.div variants={varHover(1.15)} transition={varTranHover()}>
          <Image src={photo} alt={name} ratio="3/4" />
        </m.div>
      </Box>

      <Stack spacing={0.5} sx={{ mt: 2.5, textAlign: 'center' }}>
        <Typography variant="h6">{name}</Typography>

        <Typography variant="body2" sx={{ color: 'text.disabled' }}>
          {role}
        </Typography>
      </Stack>
    </Stack>
  );
}
