import { useState, useEffect } from 'react';
// icons
import chevronDown from '@iconify/icons-carbon/chevron-down';
import chevronUp from '@iconify/icons-carbon/chevron-up';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Stack, LinkProps } from '@mui/material';
// @types
import { NavProps, NavItemDesktopProps } from '../../@types/layout';
// components
import { Iconify } from '../../components';
//
import NavDesktopMenu from './NavDesktopMenu';

// ----------------------------------------------------------------------

interface RootLinkStyleProps extends LinkProps {
  open?: boolean;
  active?: boolean;
  scrolling?: boolean;
  transparent?: boolean;
}

const RootLinkStyle = styled(Link, {
  shouldForwardProp: (prop) =>
    prop !== 'active' && prop !== 'scrolling' && prop !== 'transparent' && prop !== 'open',
})<RootLinkStyleProps>(({ active, scrolling, transparent, open, theme }) => {
  const dotActiveStyle = {
    '&:before': {
      top: 0,
      width: 6,
      height: 6,
      bottom: 0,
      left: -14,
      content: '""',
      display: 'block',
      margin: 'auto 0',
      borderRadius: '50%',
      position: 'absolute',
      backgroundColor: theme.palette.primary.main,
    },
  };
  return {
    ...theme.typography.subtitle2,
    fontWeight: theme.typography.fontWeightMedium,
    display: 'flex',
    color: 'inherit',
    position: 'relative',
    alignItems: 'center',
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      opacity: 0.72,
      textDecoration: 'none',
    },
    ...(active && {
      ...dotActiveStyle,
      color: theme.palette.text.primary,
      ...(transparent && { color: theme.palette.common.white }),
      ...(scrolling && { color: theme.palette.text.primary }),
    }),
    ...(open && {
      color: theme.palette.primary.main,
    }),
  };
});

// ----------------------------------------------------------------------

export default function NavDesktop({ isScrolling, isTransparent, navConfig }: NavProps) {
  return (
    <Stack
      direction="row"
      spacing={6}
      sx={{
        ml: 6,
        color: 'text.secondary',
        ...(isTransparent && {
          color: 'inherit',
        }),
        ...(isScrolling && {
          color: 'text.secondary',
        }),
      }}
    >
      {navConfig.map((link) => (
        <NavItemDesktop
          key={link.title}
          item={link}
          isScrolling={isScrolling}
          isTransparent={isTransparent}
        />
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

function NavItemDesktop({ item, isScrolling, isTransparent }: NavItemDesktopProps) {
  const { title, path, children } = item;

  const { pathname, asPath } = useRouter();

  const [open, setOpen] = useState(false);

  const isActiveRoot = path === pathname || (path !== '/' && asPath.includes(path));

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (children) {
    return (
      <>
        <RootLinkStyle
          onClick={handleOpen}
          open={open}
          scrolling={isScrolling}
          transparent={isTransparent}
        >
          {title}
          <Iconify
            icon={open ? chevronUp : chevronDown}
            sx={{
              ml: 0.5,
              width: 16,
              height: 16,
            }}
          />
        </RootLinkStyle>

        <NavDesktopMenu
          lists={children}
          isOpen={open}
          onClose={handleClose}
          isScrolling={isScrolling}
        />
      </>
    );
  }

  if (title === 'Documentation') {
    return (
      <RootLinkStyle
        href={path}
        target="_blank"
        rel="noopener"
        scrolling={isScrolling}
        transparent={isTransparent}
      >
        {title}
      </RootLinkStyle>
    );
  }

  return (
    <NextLink key={title} href={path} passHref>
      <RootLinkStyle active={isActiveRoot} scrolling={isScrolling} transparent={isTransparent}>
        {title}
      </RootLinkStyle>
    </NextLink>
  );
}
