import ReactPlayer, { ReactPlayerProps } from 'react-player';
// @mui
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const ReactPlayerStyle = styled(ReactPlayer)(() => ({
  width: '100% !important',
  height: '100% !important',
  '& video': {
    objectFit: 'cover',
  },
}));

// ----------------------------------------------------------------------

// https://github.com/CookPete/react-player

export default function Player({ ...other }: ReactPlayerProps) {
  return <ReactPlayerStyle {...other} />;
}
