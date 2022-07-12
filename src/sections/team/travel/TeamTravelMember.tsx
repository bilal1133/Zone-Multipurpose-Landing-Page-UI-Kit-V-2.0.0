import { m } from 'framer-motion';
// @mui
import { Typography, Box, Stack } from '@mui/material';
// @types
import { TeamMemberProps } from '../../../@types/team';
// components
import { Image, SocialsButton, BgOverlay } from '../../../components';
import { varHover, varTranHover } from '../../../components/animate';

// ----------------------------------------------------------------------

type Props = {
  member: TeamMemberProps;
};

export default function TeamTravelMember({ member }: Props) {
  const { name, role, photo, socialLinks } = member;

  return (
    <>
      <Box
        component={m.div}
        whileHover="hover"
        variants={varHover(1.05)}
        transition={varTranHover()}
        sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
      >
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
            <Typography variant="body3" sx={{ opacity: 0.72, pb: 1 }}>
              {role}
            </Typography>

            <SocialsButton color="primary" links={socialLinks} />
          </Stack>
        </BgOverlay>

        <m.div variants={varHover()} transition={varTranHover()}>
          <Image src={photo} alt={name} ratio="3/4" />
        </m.div>
      </Box>
    </>
  );
}
