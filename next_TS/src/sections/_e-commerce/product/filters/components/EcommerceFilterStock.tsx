// @mui
import { Switch, FormControlLabel, StackProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  filterStock: boolean;
  onChangeStock: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EcommerceFilterStock({ filterStock, onChangeStock }: Props) {
  return (
    <FormControlLabel
      control={<Switch color="success" checked={filterStock} onChange={onChangeStock} />}
      labelPlacement="start"
      label="Only in Stock"
      sx={{
        m: 0,
        '& .MuiFormControlLabel-label': { typography: 'h6' },
      }}
    />
  );
}
