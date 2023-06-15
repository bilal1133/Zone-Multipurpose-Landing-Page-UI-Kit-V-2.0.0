// @mui
import { Stack } from '@mui/material';
//
import { NavProps } from '../types';
import NavList from './NavList';

// ----------------------------------------------------------------------

export default function NavDesktop({ data, sx }: NavProps) {
  return (
    <Stack
      component="nav"
      direction="row"
      spacing={6}
      sx={{
        ml: 6,
        height: 1,
        ...sx,
      }}
    >
      {data.map((link) => (
        <NavList key={link.title} item={link} />
      ))}
    </Stack>
  );
}
