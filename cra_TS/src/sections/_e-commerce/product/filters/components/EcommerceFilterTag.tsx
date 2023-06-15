// @mui
import { Stack, StackProps, Chip } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  options: string[];
  filterTag: string[];
  onChangeTag: (name: string) => void;
}

export default function EcommerceFilterTag({ options, filterTag, onChangeTag, ...other }: Props) {
  return (
    <Stack direction="row" flexWrap="wrap" {...other}>
      {options.map((option) => {
        const selected = filterTag.includes(option);

        return (
          <Chip
            key={option}
            size="small"
            label={option}
            variant="outlined"
            onClick={() => onChangeTag(option)}
            sx={{
              m: 0.5,
              ...(selected && {
                bgcolor: 'action.selected',
                fontWeight: 'fontWeightBold',
              }),
            }}
          />
        );
      })}
    </Stack>
  );
}
