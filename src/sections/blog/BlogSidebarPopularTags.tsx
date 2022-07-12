// next
import { useRouter } from 'next/router';
// @mui
import { Typography, Chip, Box } from '@mui/material';

// ----------------------------------------------------------------------

const TAGS = [
  { label: 'Marketing', path: '#' },
  { label: 'Development', path: '#' },
  { label: 'Banking', path: '#' },
  { label: 'HR & Recruting', path: '#' },
  { label: 'Design', path: '#' },
  { label: 'Management', path: '#' },
  { label: 'Business', path: '#' },
  { label: 'Community', path: '#' },
  { label: 'Tutorials', path: '#' },
];

// ----------------------------------------------------------------------

export default function BlogSidebarPopularTags() {
  const router = useRouter();

  const onClick = (href: string) => {
    router.push(href);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Popular Tags
      </Typography>

      {TAGS.map((tag) => (
        <Chip key={tag.label} label={tag.label} sx={{ m: 0.5 }} onClick={() => onClick(tag.path)} />
      ))}
    </Box>
  );
}
