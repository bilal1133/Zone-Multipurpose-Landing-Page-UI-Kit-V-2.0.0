// @mui
import { MobileDatePicker } from '@mui/x-date-pickers';
import { Theme } from '@mui/material/styles';
import { InputAdornment, InputBase, SxProps, TextFieldProps } from '@mui/material';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type CustomInputProps = TextFieldProps & {
  ownerState?: any;
};

type Props = {
  departureDay: Date | null;
  onChangeDepartureDay: (newValue: Date | null) => void;
  sx?: SxProps<Theme>;
};

// ----------------------------------------------------------------------

export default function TravelFilterTime({ departureDay, onChangeDepartureDay, sx }: Props) {
  return (
    <MobileDatePicker
      value={departureDay}
      onChange={onChangeDepartureDay}
      slots={{
        textField: ({
          inputProps,
          InputProps,
          ownerState,
          inputRef,
          error,
          ...inputOther
        }: CustomInputProps) => (
          <InputBase
            fullWidth
            {...InputProps}
            ref={InputProps?.ref}
            inputRef={inputRef}
            inputProps={{
              ...inputProps,
              ...(inputOther as any),
              placeholder: 'Departure day',
            }}
            startAdornment={
              <InputAdornment position="start">
                <Iconify width={24} icon="carbon:calendar" sx={{ color: 'text.disabled', mr: 1 }} />
              </InputAdornment>
            }
            sx={{ height: 44, typography: 'subtitle1', color: 'inherit', ...sx }}
          />
        ),
      }}
      {...sx}
    />
  );
}
