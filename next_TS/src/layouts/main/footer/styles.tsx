// next
import NextLink, { LinkProps } from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Link, LinkProps as MUILinkProps } from '@mui/material';

// ----------------------------------------------------------------------

export const StyledLink = styled((props: LinkProps & MUILinkProps) => (
  <Link component={NextLink} {...props} />
))(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));
