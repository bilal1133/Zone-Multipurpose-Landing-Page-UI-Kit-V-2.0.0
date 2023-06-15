// @mui
import { ToggleButton, Typography } from '@mui/material';
//
import Iconify from '../../../iconify';
import { useSettingsContext } from '../../SettingsContext';

// ----------------------------------------------------------------------

export default function DirectionOptions() {
  const { themeDirection, onToggleDirection } = useSettingsContext();

  const isRTL = themeDirection === 'rtl';

  return (
    <ToggleButton
      fullWidth
      color={!isRTL ? 'standard' : 'primary'}
      value={themeDirection}
      selected={isRTL}
      onChange={onToggleDirection}
      sx={{
        p: 3,
        border: 0,
        borderRadius: 0,
        justifyContent: 'space-between',
        '&.Mui-selected': {
          boxShadow: 'none',
          bgcolor: 'transparent',
          ...(isRTL && {
            '&:hover': {
              bgcolor: 'action.hover',
            },
          }),
        },
      }}
    >
      <Typography variant="subtitle2">Direction</Typography>
      <Iconify
        width={28}
        icon={isRTL ? 'carbon:align-horizontal-right' : 'carbon:align-horizontal-left'}
      />
    </ToggleButton>
  );
}
