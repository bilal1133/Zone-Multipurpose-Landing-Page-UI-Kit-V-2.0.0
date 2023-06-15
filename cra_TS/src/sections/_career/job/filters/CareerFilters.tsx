import { useState } from 'react';
// @mui
import { Stack, Button, Drawer, Box } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
// config
import { NAV } from 'src/config-global';
// types
import { ICountriesProps } from 'src/types/contact';
import { IJobFiltersProps } from 'src/types/job';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import Iconify from 'src/components/iconify';
//
import {
  CareerFilterType,
  CareerFilterLevel,
  CareerFilterSalary,
  CareerFilterKeyword,
  CareerFilterBenefits,
  CareerFilterLocations,
  CareerFilterCategories,
} from './components';

// ----------------------------------------------------------------------

const defaultValues = {
  filterKeyword: null,
  filterCategories: null,
  filterLocation: null,
  filterType: [],
  filterLevel: [],
  filterBenefits: [],
  filterSalary: [0, 20000],
};

export default function CareerFilters() {
  const isMdUp = useResponsive('up', 'md');

  const [mobileOpen, setMobileOpen] = useState(false);

  const [filters, setFilters] = useState<IJobFiltersProps>(defaultValues);

  const handleMobileOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  const handleChangeKeyword = (keyword: string | null) => {
    setFilters({
      ...filters,
      filterKeyword: keyword,
    });
  };

  const handleChangeCategory = (keyword: string | null) => {
    setFilters({
      ...filters,
      filterCategories: keyword,
    });
  };

  const handleChangeLocation = (keyword: ICountriesProps | null) => {
    setFilters({
      ...filters,
      filterLocation: keyword,
    });
  };

  const handleChangeJobType = (event: SelectChangeEvent<typeof filters.filterType>) => {
    const {
      target: { value },
    } = event;
    setFilters({
      ...filters,
      filterType: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleChangeJobLevel = (event: SelectChangeEvent<typeof filters.filterLevel>) => {
    const {
      target: { value },
    } = event;
    setFilters({
      ...filters,
      filterLevel: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleChangeJobBenefits = (event: SelectChangeEvent<typeof filters.filterBenefits>) => {
    const {
      target: { value },
    } = event;
    setFilters({
      ...filters,
      filterBenefits: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleChangeSalary = (event: Event, newValue: number | number[]) => {
    setFilters({
      ...filters,
      filterSalary: newValue as number[],
    });
  };

  const onReset = () => {
    setFilters(defaultValues);
  };

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(filters, null, 2));
    onReset();
  };

  const renderFilters = (
    <>
      <Stack spacing={2.5} direction={{ xs: 'column', md: 'row' }} alignItems="center">
        <CareerFilterKeyword
          filterKeyword={filters.filterKeyword}
          onChangeKeyword={handleChangeKeyword}
        />

        <CareerFilterCategories
          filterCategories={filters.filterCategories}
          onChangeCategory={handleChangeCategory}
        />

        <CareerFilterLocations
          filterLocation={filters.filterLocation}
          onChangeLocation={handleChangeLocation}
        />

        {isMdUp && (
          <Button
            size="large"
            variant="contained"
            color="inherit"
            onClick={onSubmit}
            sx={{ px: 0, minWidth: { md: 48 } }}
          >
            <Iconify icon="carbon:search" width={24} />
          </Button>
        )}
      </Stack>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2.5, md: 1 }} sx={{ mt: 2.5 }}>
        <CareerFilterType filterType={filters.filterType} onChangeJobType={handleChangeJobType} />

        <CareerFilterLevel
          filterLevel={filters.filterLevel}
          onChangeJobType={handleChangeJobLevel}
        />

        <CareerFilterSalary
          filterSalary={filters.filterSalary}
          onChangeSalary={handleChangeSalary}
        />

        <CareerFilterBenefits
          filterBenefits={filters.filterBenefits}
          onChangeJobBenefits={handleChangeJobBenefits}
        />
      </Stack>

      {!isMdUp && (
        <Button
          size="large"
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="carbon:search" />}
          sx={{ mt: 2.5 }}
        >
          Search
        </Button>
      )}
    </>
  );

  if (isMdUp) {
    return <Box sx={{ py: 5 }}>{renderFilters}</Box>;
  }

  return (
    <>
      <Stack alignItems="flex-end" sx={{ py: 3 }}>
        <Button
          color="inherit"
          variant="contained"
          startIcon={<Iconify icon="carbon:filter" width={18} />}
          onClick={handleMobileOpen}
        >
          Filters
        </Button>
      </Stack>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleMobileClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: { pt: 5, px: 3, width: NAV.W_DRAWER },
        }}
      >
        {renderFilters}
      </Drawer>
    </>
  );
}
