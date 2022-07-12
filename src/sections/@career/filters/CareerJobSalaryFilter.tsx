import { useState } from 'react';
// @mui
import { Slider as MUISlider, FormControl, Typography, Popover, Box, Select } from '@mui/material';
import { fCurrency } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const inputStyle = {
  width: { xs: 1, md: 160 },
  '& .MuiFilledInput-input': { py: { xs: '15px', md: 0.5 } },
  '& .MuiSvgIcon-root': { color: 'text.disabled', width: 18, height: 18 },
};

const placeholder = (
  <Typography variant="body2" sx={{ color: 'text.disabled' }}>
    All salary ranges
  </Typography>
);

// ----------------------------------------------------------------------

type Props = {
  filterSalary: number[];
  onChangeSalary: (event: Event, newValue: number | number[]) => void;
};

export default function CareerJobSalaryFilter({ filterSalary, onChangeSalary }: Props) {
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
      <Box onClick={handleOpen}>
        <FormControl variant="filled" sx={{ ...inputStyle }}>
          <Select
            open={false}
            displayEmpty
            value=""
            renderValue={() => {
              if (minSalary === 0 && maxSalary === 20000) {
                return placeholder;
              }
              return (
                <Typography variant="subtitle2" component="span">{`${fCurrency(
                  minSalary
                )} - ${fCurrency(maxSalary)}`}</Typography>
              );
            }}
          />
        </FormControl>
      </Box>

      <Popover
        open={Boolean(open)}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
        transformOrigin={{ vertical: 'center', horizontal: 'center' }}
        PaperProps={{
          sx: {
            pt: 3,
            pb: 1,
            px: 4,
            width: 1,
            maxWidth: 360,
          },
        }}
      >
        <Typography variant="overline" sx={{ mb: 8, display: 'block', color: 'text.disabled' }}>
          Value based on 1 month
        </Typography>
        <MUISlider
          size="medium"
          marks
          step={1000}
          min={0}
          max={20000}
          valueLabelDisplay="on"
          valueLabelFormat={(value) => `${fCurrency(value)}`}
          value={filterSalary}
          onChange={onChangeSalary}
        />
      </Popover>
    </>
  );
}
