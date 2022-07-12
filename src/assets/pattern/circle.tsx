import { ReactNode, memo } from 'react';
// @mui
import { Box, BoxProps, SxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  sx?: SxProps;
  hide?: boolean;
  children?: ReactNode;
}

function Circle({ children, hide = false, sx, ...other }: Props) {
  return (
    <Box sx={{ width: 460, height: 460, position: 'absolute', ...sx }} {...other}>
      {!hide && (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 520 520">
          <g
            fill="none"
            fillRule="evenodd"
            stroke="none"
            strokeDasharray="3"
            strokeWidth="1"
            opacity="0.24"
          >
            <g stroke="#919EAB" strokeWidth="2" transform="translate(-757 1.852)">
              <path d="M1017 518c143.042 0 259-115.958 259-259S1160.042 0 1017 0 758 115.958 758 259s115.958 259 259 259z" />
            </g>
          </g>
        </svg>
      )}

      {children}
    </Box>
  );
}

export default memo(Circle);
