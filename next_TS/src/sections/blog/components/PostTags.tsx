// @mui
import { Chip, Stack, Typography } from '@mui/material';
//
import { IBlogTagsProps } from 'src/types/blog';

// ----------------------------------------------------------------------

type Props = {
  tags: IBlogTagsProps[];
};

export default function PostTags({ tags }: Props) {
  return (
    <Stack direction="row" alignItems="center" flexWrap="wrap" sx={{ mt: 5 }}>
      <Typography variant="subtitle2" sx={{ mr: 1 }}>
        Tags:
      </Typography>

      {tags.map((tag) => (
        <Chip key={tag.label} size="small" label={tag.label} sx={{ m: 0.5 }} onClick={() => {}} />
      ))}
    </Stack>
  );
}
