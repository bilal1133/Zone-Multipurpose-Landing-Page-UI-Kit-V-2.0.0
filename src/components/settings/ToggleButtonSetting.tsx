// icons
import closeIcon from '@iconify/icons-carbon/close';
import settingsAdjust from '@iconify/icons-carbon/settings-adjust';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Tooltip } from '@mui/material';
//
import Iconify from '../Iconify';
import { IconButtonAnimate } from '../animate';

// ----------------------------------------------------------------------

const zIndex = 1999;

const ToggleButtonStyle = styled('div')(({ theme }) => {
  const isLight = theme.palette.mode === 'light';

  return {
    right: 32,
    bottom: 40,
    position: 'fixed',
    zIndex: zIndex + 1,
    borderRadius: '50%',
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.background.paper,
    boxShadow: `-12px 12px 32px -4px ${alpha(
      isLight ? theme.palette.grey[500] : theme.palette.common.black,
      0.8
    )}`,
  };
});

const BadgeStyle = styled('div')(({ theme }) => ({
  top: 8,
  right: 10,
  width: 8,
  height: 8,
  borderRadius: '50%',
  position: 'absolute',
  backgroundColor: theme.palette.error.main,
}));

// ----------------------------------------------------------------------

type Props = {
  notDefault: boolean;
  isOpen: boolean;
  onToggle: VoidFunction;
};

export default function ToggleButtonSetting({ isOpen, onToggle, notDefault }: Props) {
  return (
    <ToggleButtonStyle>
      {notDefault && !isOpen && <BadgeStyle />}

      <Tooltip title="Settings" placement="left">
        <IconButtonAnimate
          color={isOpen ? 'primary' : 'inherit'}
          onClick={onToggle}
          sx={{
            ...(isOpen && {
              bgcolor: (theme) =>
                alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
            }),
          }}
        >
          <Iconify icon={isOpen ? closeIcon : settingsAdjust} sx={{ width: 22, height: 22 }} />
        </IconButtonAnimate>
      </Tooltip>
    </ToggleButtonStyle>
  );
}
