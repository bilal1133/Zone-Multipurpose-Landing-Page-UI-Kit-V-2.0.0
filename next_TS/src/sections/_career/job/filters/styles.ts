// ----------------------------------------------------------------------

const ITEM_HEIGHT = 40;

export const inputStyle = {
  maxWidth: { md: 180 },
  '& .MuiSelect-select': {
    py: {
      xs: 1.75,
      md: 0.75,
    },
  },
};

export const menuItemStyle = {
  p: 0,
};

export const MenuProps = {
  PaperProps: {
    sx: {
      px: 1,
      maxHeight: ITEM_HEIGHT * 5,
    },
  },
};
