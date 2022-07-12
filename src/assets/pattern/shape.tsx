import { memo } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

function Shape({ ...other }: BoxProps) {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;

  const SECONDARY_LIGHT = theme.palette.secondary.light;
  const SECONDARY_MAIN = theme.palette.secondary.main;

  return (
    <Box {...other}>
      <svg xmlns="http://www.w3.org/2000/svg" width="505" height="454" viewBox="0 0 505 454">
        <defs>
          <linearGradient
            id="linearGradient-1"
            x1="-9.342%"
            x2="107.911%"
            y1="42.109%"
            y2="42.109%"
          >
            <stop offset="0%" stopColor={SECONDARY_LIGHT} />
            <stop offset="100%" stopColor={SECONDARY_MAIN} />
          </linearGradient>
          <linearGradient
            id="linearGradient-2"
            x1="-6.944%"
            x2="107.092%"
            y1="23.878%"
            y2="62.216%"
          >
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g fillRule="nonzero" transform="translate(.17 .105)">
            <path
              fill="url(#linearGradient-1)"
              d="M23.436 261.525c-36.2-36.2-29.554-96.617 13.651-124.082L233.654 12.487c28.81-18.314 66.067-16.33 92.768 4.944l147.772 117.732c37.342 29.75 40.48 85.378 6.718 119.138l-175.78 175.782c-31.243 31.242-81.896 31.242-113.138 0L23.436 261.525z"
              opacity="0.2"
            />
            <path
              fill="url(#linearGradient-2)"
              d="M13.105 176.16C-7.718 129.39 20.14 75.37 70.316 65.214l228.291-46.214c33.46-6.773 67.531 8.432 84.835 37.86l95.765 162.87c24.201 41.157 7.195 94.213-36.423 113.632l-227.1 101.112c-40.363 17.97-87.652-.182-105.623-40.545L13.105 176.16z"
              opacity="0.48"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}

export default memo(Shape);
