// @mui
import { Checkbox, Stack, FormControlLabel, StackProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  options: string[];
  filterShipping: string[];
  onChangeShipping: (name: string) => void;
}

export default function EcommerceFilterShipping({
  options,
  filterShipping,
  onChangeShipping,
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
              checked={filterShipping.includes(option)}
              onChange={() => onChangeShipping(option)}
            />
          }
          label={option}
        />
      ))}
    </Stack>
  );
}
