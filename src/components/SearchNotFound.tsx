import { Paper, PaperProps, Typography } from '@mui/material';

// ----------------------------------------------------------------------

interface SearchNotFoundProps extends PaperProps {
  keyword: string | null | undefined;
}

export default function SearchNotFound({ keyword = '', ...other }: SearchNotFoundProps) {
  return (
    <Paper {...other}>
      <Typography gutterBottom align="center" variant="subtitle1">
        Not Found
      </Typography>
      <Typography variant="body2" align="center">
        No results found for
        <strong>{` ${keyword} `}</strong>.<br /> Try checking for typos or using complete words.
      </Typography>
    </Paper>
  );
}
