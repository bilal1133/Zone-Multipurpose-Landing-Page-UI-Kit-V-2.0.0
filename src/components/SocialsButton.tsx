// icons
import logoLinkedin from '@iconify/icons-carbon/logo-linkedin';
import logoFacebook from '@iconify/icons-carbon/logo-facebook';
import logoTwitter from '@iconify/icons-carbon/logo-twitter';
import logoInstagram from '@iconify/icons-carbon/logo-instagram';
// @mui
import { alpha } from '@mui/material/styles';
import { Stack, IconButton, Button, IconButtonProps, ButtonProps, Link } from '@mui/material';
// @types
import { SocialLinks } from '../@types/socials';
//
import Iconify from './Iconify';

// ----------------------------------------------------------------------

type Props = IconButtonProps & ButtonProps;

interface SocialsButtonProps extends Props {
  simple?: boolean;
  initialColor?: boolean;
  links?: SocialLinks;
}

export default function SocialsButton({
  initialColor = false,
  simple = true,
  links = {},
  sx,
  ...other
}: SocialsButtonProps) {
  const SOCIALS = [
    {
      name: 'FaceBook',
      icon: logoFacebook,
      socialColor: '#1877F2',
      path: links.facebook || '#facebook-link',
    },
    {
      name: 'Instagram',
      icon: logoInstagram,
      socialColor: '#E02D69',
      path: links.instagram || '#instagram-link',
    },
    {
      name: 'Linkedin',
      icon: logoLinkedin,
      socialColor: '#007EBB',
      path: links.linkedin || '#linkedin-link',
    },
    {
      name: 'Twitter',
      icon: logoTwitter,
      socialColor: '#00AAEC',
      path: links.twitter || '#twitter-link',
    },
  ];

  return (
    <Stack direction="row" flexWrap="wrap" alignItems="center">
      {SOCIALS.map((social) => {
        const { name, icon, path, socialColor } = social;
        return simple ? (
          <Link key={name} href={path}>
            <IconButton
              color="inherit"
              sx={{
                ...(initialColor && {
                  color: socialColor,
                  '&:hover': {
                    bgcolor: alpha(socialColor, 0.08),
                  },
                }),
                ...sx,
              }}
              {...other}
            >
              <Iconify icon={icon} sx={{ width: 20, height: 20 }} />
            </IconButton>
          </Link>
        ) : (
          <Button
            key={name}
            href={path}
            color="inherit"
            variant="outlined"
            size="small"
            startIcon={<Iconify icon={icon} />}
            sx={{
              m: 0.5,
              flexShrink: 0,
              ...(initialColor && {
                color: socialColor,
                borderColor: socialColor,
                '&:hover': {
                  borderColor: socialColor,
                  bgcolor: alpha(socialColor, 0.08),
                },
              }),
              ...sx,
            }}
            {...other}
          >
            {name}
          </Button>
        );
      })}
    </Stack>
  );
}
