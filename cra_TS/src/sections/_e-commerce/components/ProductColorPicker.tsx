// @mui
import { Stack, Radio, StackProps, RadioGroup, FormControlLabel } from '@mui/material';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: {
    label: string;
    value: string;
  }[];
}

export default function ProductColorPicker({ value, options, onChange, sx }: Props) {
  return (
    <RadioGroup row value={value} onChange={onChange}>
      {options.map((option) => (
        <Stack
          key={option.value}
          alignItems="center"
          justifyContent="center"
          sx={{
            m: 1,
            width: 32,
            height: 32,
            borderRadius: 1,
            position: 'relative',
            bgcolor: option.label,
            color: 'common.white',
            ...sx,
          }}
        >
          {value === option.value && <Iconify icon="carbon:checkmark" />}

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
