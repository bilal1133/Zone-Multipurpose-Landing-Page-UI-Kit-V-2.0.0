import { useState } from 'react';
// @mui
import { styled, alpha, Theme } from '@mui/material/styles';
import {
  Input,
  Slide,
  Button,
  SxProps,
  IconButton,
  InputAdornment,
  ClickAwayListener,
} from '@mui/material';
// config
import { HEADER } from 'src/config-global';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledSearchbar = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: HEADER.H_MOBILE,
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  padding: theme.spacing(0, 3),
  boxShadow: theme.customShadows.z8,
  backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
  [theme.breakpoints.up('md')]: {
    height: HEADER.H_MAIN_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

type SearchbarProps = {
  sx?: SxProps<Theme>;
};

export default function Searchbar({ sx }: SearchbarProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <IconButton color="inherit" aria-label="search" onClick={handleOpen} sx={sx}>
          <Iconify icon="carbon:search" />
        </IconButton>

        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <StyledSearchbar>
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              startAdornment={
                <InputAdornment position="start">
                  <Iconify icon="carbon:search" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
            />
            <Button variant="contained" onClick={handleClose}>
              Search
            </Button>
          </StyledSearchbar>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}
