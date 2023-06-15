// @mui
import { alpha } from '@mui/material/styles';
import { Stack, Radio, StackProps, RadioGroup, FormControlLabel } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: {
    label: string;
    value: string;
  }[];
}

export default function ProductOptionPicker({ value, options, onChange, sx }: Props) {
  return (
    <RadioGroup row value={value} onChange={onChange}>
      {options.map((option) => (
        <Stack
          key={option.value}
          alignItems="center"
          justifyContent="center"
          sx={{
            m: 1,
            px: 1.5,
            height: 44,
            borderRadius: 1,
            position: 'relative',
            typography: 'subtitle2',
            border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
            ...(value === option.value && {
              boxShadow: (theme) => `0 0 0 2px ${theme.palette.text.primary}`,
            }),
            ...sx,
          }}
        >
          {option.label}

          <FormControlLabel
            value={option.value}
            control={<Radio sx={{ display: 'none' }} />}
            label=""
            sx={{
              m: 0,
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              position: 'absolute',
            }}
          />
        </Stack>
      ))}
    </RadioGroup>
  );
}
