import { m } from 'framer-motion';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
// components
import { varPath } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function Logo() {
  const theme = useTheme();

  const PRIMARY_MAIN = theme.palette.primary.main;

  return (
    <Box
      component={m.svg}
      viewBox="0 0 512 512"
      sx={{
        width: 240,
        height: 240,
        strokeWidth: 4,
        stroke: PRIMARY_MAIN,
      }}
    >
      <m.ellipse
        {...varPath}
        cx="405.143"
        cy="338.571"
        fill={PRIMARY_MAIN}
        rx="82.857"
        ry="82.857"
      />
      <m.path
        {...varPath}
        fill="currentColor"
        d="M114.742 355.332H256v66.097H24v-61.376l140.323-203.956H24V90h232v61.376L114.742 355.332z"
      />
    </Box>
  );
}
