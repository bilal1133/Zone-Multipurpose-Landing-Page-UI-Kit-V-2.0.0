import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Link, Typography, Box } from '@mui/material';
// types
import { MenuHotProductsProps } from './types';

// ----------------------------------------------------------------------

export default function MenuHotProducts({ tags, ...other }: MenuHotProductsProps) {
  return (
    <Box {...other}>
      <Typography
        variant="caption"
        sx={{
          mr: 0.5,
          fontWeight: 'fontWeightBold',
        }}
      >
        Hot Products:
      </Typography>

      {tags.map((tag, index) => (
        <Link
          key={tag.name}
          component={RouterLink}
          to={tag.path}
          underline="none"
          variant="caption"
          sx={{
            color: 'text.secondary',
            transition: (theme) => theme.transitions.create('all'),
            '&:hover': { color: 'primary.main' },
          }}
        >
          {index === 0 ? tag.name : `, ${tag.name} `}
        </Link>
      ))}
    </Box>
  );
}
