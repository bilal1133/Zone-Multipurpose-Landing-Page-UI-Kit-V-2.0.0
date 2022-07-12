import { m } from 'framer-motion';
// @mui
import { Typography, Box } from '@mui/material';
// @types
import { TeamMemberProps } from '../../../@types/team';
// components
import { Image, SocialsButton, BgOverlay } from '../../../components';
import { varHover, varTranHover } from '../../../components/animate';

// ----------------------------------------------------------------------

type TeamMarketingMemberProps = {
  member: TeamMemberProps;
};

export default function TeamMarketingMember({ member }: TeamMarketingMemberProps) {
  const { name, role, photo, socialLinks } = member;

  return (
    <div>
      <Box
        component={m.div}
        whileHover="hover"
        variants={varHover(0.95)}
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

        <m.div variants={varHover(1.15)} transition={varTranHover()}>
          <Image src={photo} alt={name} ratio="3/4" />
        </m.div>
      </Box>

      <Typography variant="h6" sx={{ mt: 2.5, mb: 0.5, textAlign: 'center' }}>
        {name}
      </Typography>
      <Typography variant="body3" sx={{ color: 'text.disabled', textAlign: 'center' }}>
        {role}
      </Typography>
    </div>
  );
}
