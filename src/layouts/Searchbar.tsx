import { useState } from 'react';
//icon
import searchIcon from '@iconify/icons-carbon/search';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Input, Slide, Button, InputAdornment, ClickAwayListener, SxProps } from '@mui/material';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../config';
// components
import { Iconify } from '../components';
import { IconButtonAnimate } from '../components/animate';

// ----------------------------------------------------------------------

const SearchbarStyle = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: HEADER_MOBILE_HEIGHT,
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  padding: theme.spacing(0, 3),
  boxShadow: theme.customShadows.z8,
  backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
  [theme.breakpoints.up('md')]: {
    height: HEADER_DESKTOP_HEIGHT,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

type SearchbarProps = {
  sx?: SxProps;
};

export default function Searchbar({ sx }: SearchbarProps) {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <IconButtonAnimate color="inherit" onClick={handleOpen} sx={sx}>
          <Iconify icon={searchIcon} sx={{ width: 20, height: 20 }} />
        </IconButtonAnimate>

        <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
          <SearchbarStyle>
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              startAdornment={
                <InputAdornment position="start">
                  <Iconify
                    icon={searchIcon}
                    sx={{ color: 'text.disabled', width: 20, height: 20 }}
                  />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
            />
            <Button variant="contained" onClick={handleClose}>
              Search
            </Button>
          </SearchbarStyle>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}
