import { useState } from 'react';
// @mui
import { Slider, FormControl, Typography, Popover, Select } from '@mui/material';
import { fCurrency } from 'src/utils/formatNumber';
//
import { inputStyle } from '../styles';

// ----------------------------------------------------------------------

type Props = {
  filterSalary: number[];
  onChangeSalary: (event: Event, newValue: number | number[]) => void;
};

export default function CareerFilterSalary({ filterSalary, onChangeSalary }: Props) {
  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const minSalary = filterSalary[0];

  const maxSalary = filterSalary[1];

  return (
    <>
      <FormControl fullWidth hiddenLabel variant="filled" onClick={handleOpen} sx={inputStyle}>
        <Select
          open={false}
          displayEmpty
          value=""
          renderValue={() => {
            if (minSalary === 0 && maxSalary === 20000) {
              return (
                <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                  All salary ranges
                </Typography>
              );
            }
            return (
              <Typography variant="subtitle2" component="span">{`${fCurrency(
                minSalary
              )} - ${fCurrency(maxSalary)}`}</Typography>
            );
          }}
        />
      </FormControl>

      <Popover
        open={!!open}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
        transformOrigin={{ vertical: 'center', horizontal: 'center' }}
        PaperProps={{
          sx: {
            pt: 3,
            pb: 1,
            px: 5,
            width: 1,
            maxWidth: 360,
            overflow: 'unset',
          },
        }}
      >
        <Typography variant="overline" sx={{ mb: 8, display: 'block', color: 'text.disabled' }}>
          Value based on 1 month
        </Typography>

        <Slider
          marks
          step={1000}
          min={0}
          max={20000}
          valueLabelDisplay="on"
          valueLabelFormat={(value) => `$${value}`}
          value={filterSalary}
          onChange={onChangeSalary}
        />
      </Popover>
    </>
  );
}
