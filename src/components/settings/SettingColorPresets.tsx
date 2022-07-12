// @mui
import { alpha, styled } from '@mui/material/styles';
import { Grid, Paper, Radio, RadioGroup, CardActionArea, FormControlLabel } from '@mui/material';
// hooks
import { useSettings } from '../../hooks';

// ----------------------------------------------------------------------

const BOX_BORDER_RADIUS = 1.5;

const BoxWrapStyle = styled('div')(() => ({
  height: 104,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const BoxPrimaryStyle = styled('div')(() => ({
  width: 64,
  height: 64,
  overflow: 'hidden',
  borderRadius: '50%',
  position: 'relative',
}));

const BoxSecondaryStyle = styled('div')(({ theme }) => ({
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

export default function SettingColorPresets() {
  const { themeColorPresets, onChangeColorPresets, colorOption } = useSettings();

  return (
    <RadioGroup
      dir="ltr"
      name="themeColorPresets"
      value={themeColorPresets}
      onChange={onChangeColorPresets}
      sx={{ px: 3 }}
    >
      <Grid container spacing={2.5}>
        {colorOption.map((color) => {
          const colorName = color.name;
          const primaryColor = color.primary;
          const secondaryColor = color.secondary;
          const isSelected = themeColorPresets === colorName;

          return (
            <Grid key={colorName} item xs={6}>
              <Paper
                variant={isSelected ? 'elevation' : 'outlined'}
                sx={{
                  borderRadius: BOX_BORDER_RADIUS,
                  ...(isSelected && {
                    bgcolor: alpha(primaryColor, 0.08),
                    border: `solid 1px ${primaryColor}`,
                    boxShadow: `inset 0 4px 12px 0 ${alpha(primaryColor, 0.32)}`,
                  }),
                }}
              >
                <CardActionArea sx={{ borderRadius: BOX_BORDER_RADIUS, color: primaryColor }}>
                  <BoxWrapStyle>
                    <BoxPrimaryStyle sx={{ bgcolor: primaryColor }}>
                      <BoxSecondaryStyle
                        sx={{
                          bgcolor: secondaryColor,
                          ...(isSelected && {
                            transformOrigin: 'left',
                            transform: 'rotate(25deg)',
                          }),
                        }}
                      />
                    </BoxPrimaryStyle>
                  </BoxWrapStyle>

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
            </Grid>
          );
        })}
      </Grid>
    </RadioGroup>
  );
}
