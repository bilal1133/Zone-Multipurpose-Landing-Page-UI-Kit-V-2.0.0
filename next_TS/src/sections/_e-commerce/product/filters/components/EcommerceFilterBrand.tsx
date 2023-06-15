// @mui
import { Checkbox, Stack, FormControlLabel, StackProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  options: string[];
  filterBrand: string[];
  onChangeBrand: (name: string) => void;
}

export default function EcommerceFilterBrand({
  options,
  filterBrand,
  onChangeBrand,
  ...other
}: Props) {
  return (
    <Stack {...other}>
      {options.map((option) => (
        <FormControlLabel
          key={option}
          control={
            <Checkbox
              size="small"
              value={option}
              checked={filterBrand.includes(option)}
              onChange={() => onChangeBrand(option)}
            />
          }
          label={option}
        />
      ))}
    </Stack>
  );
}
