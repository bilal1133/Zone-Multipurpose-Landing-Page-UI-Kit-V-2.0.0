import { Theme } from '@mui/material/styles';
import { ListItemButtonProps, SxProps } from '@mui/material';

// ----------------------------------------------------------------------

export type NavItemBaseProps = {
  title: string;
  path: string;
  icon?: React.ReactElement;
  children?: NavListProps[];
};

export type NavListProps = {
  subheader: string;
  isNew?: boolean;
  cover?: string;
  items: { title: string; path: string }[];
};

export type NavItemProps = ListItemButtonProps & {
  item: NavItemBaseProps;
  active?: boolean;
  open?: boolean;
  subItem?: boolean;
  isExternalLink?: boolean;
};

export type NavProps = {
  data: NavItemBaseProps[];
  sx?: SxProps<Theme>;
};
