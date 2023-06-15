// @mui
import { Stack, Typography } from '@mui/material';
//
import { NavListProps } from '../nav';
import { StyledLink } from './styles';

// ----------------------------------------------------------------------

export default function ListDesktop({ list }: { list: NavListProps }) {
  const { subheader, items } = list;

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography variant="subtitle2">{subheader}</Typography>

      {items?.map((link) => (
        <StyledLink key={link.title} to={link.path}>
          {link.title}
        </StyledLink>
      ))}
    </Stack>
  );
}
