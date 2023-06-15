// @mui
import { Stack, StackProps } from '@mui/material';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  options: string[];
  filterCategories: string;
  onChangeCategories: (name: string) => void;
}

export default function EcommerceFilterCategory({
  options,
  filterCategories,
  onChangeCategories,
  ...other
}: Props) {
  return (
    <Stack spacing={1} alignItems="flex-start" {...other}>
      {options.map((option) => (
        <Stack
          key={option}
          direction="row"
          alignItems="center"
          onClick={() => onChangeCategories(option)}
          sx={{
            typography: 'body2',
            cursor: 'pointer',
            ...(filterCategories === option && {
              fontWeight: 'fontWeightBold',
            }),
          }}
        >
          <Iconify icon="carbon:chevron-right" width={12} sx={{ mr: 1 }} />
          {option}
        </Stack>
      ))}
    </Stack>
  );
}
