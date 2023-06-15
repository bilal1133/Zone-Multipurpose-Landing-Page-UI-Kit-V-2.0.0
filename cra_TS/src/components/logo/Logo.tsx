import { memo } from 'react';

import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps, Link } from '@mui/material';

// ----------------------------------------------------------------------

interface LogoProps extends BoxProps {
  single?: boolean;
}

function Logo({ single = false, sx }: LogoProps) {
  const theme = useTheme();

  const PRIMARY_MAIN = theme.palette.primary.main;

  const singleLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 512 512"
    >
      <ellipse cx="405.143" cy="338.571" fill={PRIMARY_MAIN} rx="82.857" ry="82.857" />
      <path
        fill="currentColor"
        d="M114.742 355.332H256v66.097H24v-61.376l140.323-203.956H24V90h232v61.376L114.742 355.332z"
      />
    </svg>
  );

  const fullLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg "
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 1080 288"
    >
      <ellipse cx="996" cy="204" fill={PRIMARY_MAIN} rx="60" ry="60" />
      <path
        fill="currentColor"
        d="M712 264h-58.815l-98.37-148.034V264H496V24h58.815l98.37 148.718V24H712v240zM801.265 70.838v48.547H880v45.128h-78.735v52.649H888V264H744V24h144v46.838h-86.735zM344.333 264c-22 0-42.222-5.118-60.666-15.355-18.223-10.236-32.778-24.478-43.667-42.726-10.667-18.47-16-39.165-16-62.086s5.333-43.505 16-61.752c10.889-18.248 25.444-32.49 43.667-42.726C302.111 29.118 322.333 24 344.333 24s42.111 5.118 60.334 15.355C423.111 49.59 437.556 63.833 448 82.08c10.667 18.247 16 38.831 16 61.752s-5.333 43.616-16 62.086c-10.667 18.248-25.111 32.49-43.333 42.726C386.444 258.882 366.333 264 344.333 264zm0-52.072c18.667 0 33.556-6.231 44.667-18.693 11.333-12.462 17-28.929 17-49.402 0-20.695-5.667-37.163-17-49.402-11.111-12.462-26-18.692-44.667-18.692-18.889 0-34 6.12-45.333 18.358-11.111 12.24-16.667 28.818-16.667 49.736 0 20.696 5.556 37.274 16.667 49.736 11.333 12.239 26.444 18.359 45.333 18.359zM89.71 216.137H192V264H24v-44.444L125.613 71.863H24V24h168v44.444L89.71 216.137z"
      />
    </svg>
  );

  return (
    <Link
      component={RouterLink}
      to="/"
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          width: single ? 64 : 75,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {single ? singleLogo : fullLogo}
      </Box>
    </Link>
  );
}

export default memo(Logo);
