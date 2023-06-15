import { useState } from 'react';
// @mui
import { Stack, Drawer, Typography, TextField, InputAdornment } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// config
import { NAV } from 'src/config-global';
// types
import { ICountriesProps } from 'src/types/contact';
import { ICourseFiltersProps } from 'src/types/course';
// components
import Iconify from 'src/components/iconify';
//
import {
  ElearningFilterFee,
  ElearningFilterLevel,
  ElearningFilterRating,
  ElearningFilterLanguage,
  ElearningFilterDuration,
  ElearningFilterCategories,
} from './components';

// ----------------------------------------------------------------------

const defaultValues = {
  filterDuration: [],
  filterCategories: [],
  filterRating: null,
  filterFee: [],
  filterLevel: [],
  filterLanguage: [],
};

type Props = {
  mobileOpen: boolean;
  onMobileClose: VoidFunction;
};

export default function ElearningFilters({ mobileOpen, onMobileClose }: Props) {
  const isMdUp = useResponsive('up', 'md');

  const [filters, setFilters] = useState<ICourseFiltersProps>(defaultValues);

  const handleChangeRating = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      filterRating: (event.target as HTMLInputElement).value,
    });
  };

  const handleChangeCategory = (keyword: string[]) => {
    setFilters({
      ...filters,
      filterCategories: keyword,
    });
  };

  const handleChangeLevel = (event: SelectChangeEvent<typeof filters.filterLevel>) => {
    const {
      target: { value },
    } = event;
    setFilters({
      ...filters,
      filterLevel: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleChangeFee = (event: SelectChangeEvent<typeof filters.filterFee>) => {
    const {
      target: { value },
    } = event;
    setFilters({
      ...filters,
      filterFee: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleChangeDuration = (event: SelectChangeEvent<typeof filters.filterDuration>) => {
    const {
      target: { value },
    } = event;
    setFilters({
      ...filters,
      filterDuration: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleChangeLanguage = (keyword: ICountriesProps[]) => {
    setFilters({
      ...filters,
      filterLanguage: keyword,
    });
  };

  const renderContent = (
    <Stack
      spacing={2.5}
      sx={{
        flexShrink: 0,
        width: { xs: 1, md: NAV.W_DRAWER },
      }}
    >
      <TextField
        fullWidth
        hiddenLabel
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon="carbon:search" width={24} sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          ),
        }}
      />

      <Block title="Ratings">
        <ElearningFilterRating
          filterRating={filters.filterRating}
          onChangeRating={handleChangeRating}
        />
      </Block>

      <Block title="Duration">
        <ElearningFilterDuration
          filterDuration={filters.filterDuration}
          onChangeDuration={handleChangeDuration}
        />
      </Block>

      <Block title="Category">
        <ElearningFilterCategories
          filterCategories={filters.filterCategories}
          onChangeCategory={handleChangeCategory}
        />
      </Block>

      <Block title="Level">
        <ElearningFilterLevel filterLevel={filters.filterLevel} onChangeLevel={handleChangeLevel} />
      </Block>

      <Block title="Fee">
        <ElearningFilterFee filterFee={filters.filterFee} onChangeFee={handleChangeFee} />
      </Block>

      <Block title="Language">
        <ElearningFilterLanguage
          filterLanguage={filters.filterLanguage}
          onChangeLanguage={handleChangeLanguage}
        />
      </Block>
    </Stack>
  );

  return (
    <>
      {isMdUp ? (
        renderContent
      ) : (
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={onMobileClose}
          ModalProps={{ keepMounted: true }}
          PaperProps={{
            sx: {
              pt: 5,
              px: 3,
              width: NAV.W_DRAWER,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

type BlockProps = {
  title: string;
  children: React.ReactNode;
};

function Block({ title, children }: BlockProps) {
  return (
    <Stack spacing={1.5}>
      <Typography variant="overline" sx={{ color: 'text.disabled' }}>
        {title}
      </Typography>

      {children}
    </Stack>
  );
}
