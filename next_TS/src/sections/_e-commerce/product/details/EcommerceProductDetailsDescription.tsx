// @mui
import { Box, Stack, Typography } from '@mui/material';
// components
import Markdown from 'src/components/markdown';

// ----------------------------------------------------------------------

type Props = {
  description: string;
  specifications: {
    label: string;
    value: string;
  }[];
};

export default function EcommerceProductDetailsDescription({ description, specifications }: Props) {
  return (
    <Stack
      spacing={4}
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h6"> Specifications </Typography>

        {specifications.map((row) => (
          <Stack
            key={row.label}
            spacing={0.5}
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ sm: 'center' }}
            sx={{ typography: 'body2' }}
          >
            <Box component="span" sx={{ width: 160, color: 'text.secondary' }}>
              {row.label}
            </Box>
            <Box component="span">{row.value}</Box>
          </Stack>
        ))}
      </Stack>

      <Stack>
        <Typography variant="h6"> Description </Typography>
        <Markdown content={description} sx={{ '& p, ul': { typography: 'body2' } }} />
      </Stack>
    </Stack>
  );
}
