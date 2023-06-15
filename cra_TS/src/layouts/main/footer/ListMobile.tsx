import { useState } from 'react';
// @mui
import { Stack, Collapse, Typography } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
//
import { NavListProps } from '../nav';
import { StyledLink } from './styles';

// ----------------------------------------------------------------------

export default function ListMobile({ list }: { list: NavListProps }) {
  const { subheader, items } = list;

  const [expand, setExpand] = useState(false);

  const onExpand = () => {
    setExpand(!expand);
  };

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography
        variant="subtitle2"
        onClick={onExpand}
        sx={{
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        {subheader}
        <Iconify
          width={16}
          icon={expand ? 'carbon:chevron-down' : 'carbon:chevron-right'}
          sx={{ ml: 0.5 }}
        />
      </Typography>

      <Collapse in={expand} unmountOnExit sx={{ width: 1 }}>
        <Stack spacing={1.5} alignItems="flex-start">
          {items?.map((link) => (
            <StyledLink key={link.title} to={link.path}>
              {link.title}
            </StyledLink>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}
