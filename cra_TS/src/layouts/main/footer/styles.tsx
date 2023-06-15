import { Link as RouterLink, LinkProps } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Link, LinkProps as MUILinkProps } from '@mui/material';

// ----------------------------------------------------------------------

export const StyledLink = styled((props: LinkProps & MUILinkProps) => (
  <Link component={RouterLink} {...props} />
))(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));
