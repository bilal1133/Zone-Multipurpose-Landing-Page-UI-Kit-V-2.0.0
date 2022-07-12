// icons
import alignHorizontalLeft from '@iconify/icons-carbon/align-horizontal-left';
import alignHorizontalRight from '@iconify/icons-carbon/align-horizontal-right';
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

export default function SettingDirection() {
  const { themeDirection, onToggleDirection } = useSettings();

  const isRTL = themeDirection === 'rtl';

  return (
    <RootStyle value="check" selected={isRTL} onChange={onToggleDirection}>
      <Typography variant="subtitle2">Direction</Typography>
      <Iconify icon={isRTL ? alignHorizontalRight : alignHorizontalLeft} />
    </RootStyle>
  );
}
