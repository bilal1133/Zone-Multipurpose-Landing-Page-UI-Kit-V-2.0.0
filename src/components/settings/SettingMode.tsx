// icons
import asleepIcon from '@iconify/icons-carbon/asleep';
import asleepFilled from '@iconify/icons-carbon/asleep-filled';
// @mui
import { styled } from '@mui/material/styles';
import { ToggleButton, Typography } from '@mui/material';
// hooks
import { useSettings } from '../../hooks';
//
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(ToggleButton)(({ theme }) => ({
  border: 0,
  width: '100%',
  borderRadius: 0,
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  '& svg': {
    width: 28,
    height: 28,
    transition: theme.transitions.create('all'),
  },
  '&.Mui-selected': {
    backgroundColor: 'transparent',
  },
}));

// ----------------------------------------------------------------------

export default function SettingMode() {
  const { themeMode, onToggleMode } = useSettings();

  const isLight = themeMode === 'light';

  return (
    <RootStyle value="check" selected={!isLight} onChange={onToggleMode}>
      <Typography variant="subtitle2">Mode</Typography>
      <Iconify icon={isLight ? asleepIcon : asleepFilled} />
    </RootStyle>
  );
}
