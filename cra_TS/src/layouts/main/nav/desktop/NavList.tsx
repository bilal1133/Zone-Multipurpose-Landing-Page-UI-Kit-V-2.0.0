import { useState, useEffect } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
// @mui
import { Fade, Portal, Stack, Box, Link, Unstable_Grid2 as Grid } from '@mui/material';
// hooks
import useActiveLink from 'src/hooks/useActiveLink';
// components
import Image from 'src/components/image';
import Label from 'src/components/label';
//
import { NavItemBaseProps, NavListProps } from '../types';
import { StyledMenu, StyledSubheader } from './styles';
import { NavItem } from './NavItem';

// ----------------------------------------------------------------------

export default function NavList({ item }: { item: NavItemBaseProps }) {
  const { pathname } = useLocation();

  const [openMenu, setOpenMenu] = useState(false);

  const { path, children } = item;

  const { active, isExternalLink } = useActiveLink(path, false);

  const mainList = children ? children.filter((list) => list.subheader !== 'Common') : [];

  const commonList = children ? children.find((list) => list.subheader === 'Common') : null;

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = () => {
    if (children) {
      setOpenMenu(true);
    }
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <NavItem
        item={item}
        active={active}
        open={openMenu}
        isExternalLink={isExternalLink}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={handleCloseMenu}
      />

      {!!children && openMenu && (
        <Portal>
          <Fade in={openMenu}>
            <StyledMenu onMouseEnter={handleOpenMenu} onMouseLeave={handleCloseMenu}>
              <Grid container columns={15}>
                <Grid xs={12}>
                  <Box
                    gap={5}
                    display="grid"
                    gridTemplateColumns="repeat(5, 1fr)"
                    sx={{
                      p: 5,
                      height: 1,
                      position: 'relative',
                      bgcolor: 'background.neutral',
                    }}
                  >
                    {mainList.map((list) => (
                      <NavSubList
                        key={list.subheader}
                        subheader={list.subheader}
                        cover={list.cover}
                        items={list.items}
                        isNew={list.isNew}
                      />
                    ))}
                  </Box>
                </Grid>

                {commonList && (
                  <Grid xs={3}>
                    <Box sx={{ bgcolor: 'background.default', p: 5 }}>
                      <NavSubList subheader={commonList.subheader} items={commonList.items} />
                    </Box>
                  </Grid>
                )}
              </Grid>
            </StyledMenu>
          </Fade>
        </Portal>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

function NavSubList({ subheader, isNew, cover, items }: NavListProps) {
  const { pathname } = useLocation();

  const coverPath = items.length ? items[0].path : '';

  const commonList = subheader === 'Common';

  return (
    <Stack spacing={2}>
      <StyledSubheader>
        {subheader}
        {isNew && (
          <Label color="info" sx={{ ml: 1 }}>
            NEW
          </Label>
        )}
      </StyledSubheader>

      {!commonList && (
        <Link component={RouterLink} to={coverPath}>
          <Image
            disabledEffect
            alt={cover}
            src={cover || '/assets/placeholder.svg'}
            ratio="16/9"
            sx={{
              borderRadius: 1,
              cursor: 'pointer',
              boxShadow: (theme) => theme.customShadows.z8,
              transition: (theme) => theme.transitions.create('all'),
              '&:hover': {
                opacity: 0.8,
                boxShadow: (theme) => theme.customShadows.z24,
              },
            }}
          />
        </Link>
      )}

      <Stack spacing={1.5} alignItems="flex-start">
        {items.map((item) => (
          <NavItem key={item.title} item={item} active={item.path === pathname} subItem />
        ))}
      </Stack>
    </Stack>
  );
}
