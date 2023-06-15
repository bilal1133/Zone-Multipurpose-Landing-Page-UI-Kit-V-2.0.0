// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Box,
  Paper,
  Radio,
  RadioGroup,
  Typography,
  CardActionArea,
  FormControlLabel,
} from '@mui/material';
//
import { useSettingsContext } from '../../SettingsContext';

// ----------------------------------------------------------------------

const BOX_BORDER_RADIUS = 1.5;

const StyledBoxWrap = styled('div')(() => ({
  height: 104,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledBoxPrimary = styled('div')(() => ({
  width: 64,
  height: 64,
  overflow: 'hidden',
  borderRadius: '50%',
  position: 'relative',
}));

const StyledBoxSecondary = styled('div')(({ theme }) => ({
  top: 0,
  bottom: 0,
  right: 0,
  margin: 'auto',
  width: '50%',
  height: '120%',
  position: 'absolute',
  borderRadius: '50%',
  [theme.breakpoints.up('md')]: {
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.sharp,
    }),
  },
}));

// ----------------------------------------------------------------------

export default function ColorPresetsOptions() {
  const { themeColorPresets, onChangeColorPresets, presetsOption } = useSettingsContext();

  return (
    <Box sx={{ px: 3 }}>
      <Typography variant="subtitle2" sx={{ py: 3 }}>
        Presets
      </Typography>

      <RadioGroup
        dir="ltr"
        value={themeColorPresets}
        onChange={onChangeColorPresets}
        sx={{ gap: 3, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}
      >
        {presetsOption.map((color) => (
          <PresetsOptions
            key={color.name}
            colorName={color.name}
            primaryColor={color.primary}
            secondaryColor={color.secondary}
            selected={color.name === themeColorPresets}
          />
        ))}
      </RadioGroup>
    </Box>
  );
}

// ----------------------------------------------------------------------

type PresetsOptionsProps = {
  colorName: string;
  selected: boolean;
  primaryColor: string;
  secondaryColor: string;
};

function PresetsOptions({
  colorName,
  selected,
  primaryColor,
  secondaryColor,
}: PresetsOptionsProps) {
  return (
    <Paper
      variant={selected ? 'elevation' : 'outlined'}
      sx={{
        borderRadius: BOX_BORDER_RADIUS,
        ...(selected && {
          bgcolor: alpha(primaryColor, 0.08),
          border: `solid 1px ${primaryColor}`,
          boxShadow: `inset 0 4px 12px 0 ${alpha(primaryColor, 0.32)}`,
        }),
      }}
    >
      <CardActionArea sx={{ borderRadius: BOX_BORDER_RADIUS, color: primaryColor }}>
        <StyledBoxWrap>
          <StyledBoxPrimary sx={{ bgcolor: primaryColor }}>
            <StyledBoxSecondary
              sx={{
                bgcolor: secondaryColor,
                ...(selected && {
                  transformOrigin: 'left',
                  transform: 'rotate(25deg)',
                }),
              }}
            />
          </StyledBoxPrimary>
        </StyledBoxWrap>

        <FormControlLabel
          label=""
          value={colorName}
          control={<Radio sx={{ display: 'none' }} />}
          sx={{
            top: 0,
            margin: 0,
            width: 1,
            height: 1,
            position: 'absolute',
          }}
        />
      </CardActionArea>
    </Paper>
  );
}
