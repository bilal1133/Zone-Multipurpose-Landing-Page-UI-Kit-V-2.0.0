import { useState } from 'react';
// icons
import searchIcon from '@iconify/icons-carbon/search';
import filterIcon from '@iconify/icons-carbon/filter';
// @mui
import { Stack, Button, Drawer, Box } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
// config
import { DRAWER_WIDTH } from '../../../config';
// @type
import { CountriesProps } from '../../../@types/map';
import { JobFiltersProps } from '../../../@types/career';
// components
import { Iconify } from '../../../components';
//
import CareerJobTypeFilter from './CareerJobTypeFilter';
import CareerJobLevelFilter from './CareerJobLevelFilter';
import CareerJobSalaryFilter from './CareerJobSalaryFilter';
import CareerJobKeywordFilter from './CareerJobKeywordFilter';
import CareerJobBenefitsFilter from './CareerJobBenefitsFilter';
import CareerJobLocationsFilter from './CareerJobLocationsFilter';
import CareerJobCategoriesFilter from './CareerJobCategoriesFilter';

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

export default function CareerJobBarFilters() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [filters, setFilters] = useState<JobFiltersProps>(defaultValues);

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

  const handleChangeLocation = (keyword: CountriesProps | null) => {
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
        <CareerJobKeywordFilter
          filterKeyword={filters.filterKeyword}
          onChangeKeyword={handleChangeKeyword}
        />
        <CareerJobCategoriesFilter
          filterCategories={filters.filterCategories}
          onChangeCategory={handleChangeCategory}
        />
        <CareerJobLocationsFilter
          filterLocation={filters.filterLocation}
          onChangeLocation={handleChangeLocation}
        />
        <Button
          size="large"
          variant="contained"
          onClick={onSubmit}
          sx={{
            px: 0,
            minWidth: { md: 48 },
            display: { xs: 'none', md: 'inline-flex' },
          }}
        >
          <Iconify icon={searchIcon} sx={{ width: 24, height: 24 }} />
        </Button>
      </Stack>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2.5, md: 1 }} sx={{ mt: 2.5 }}>
        <CareerJobTypeFilter
          filterType={filters.filterType}
          onChangeJobType={handleChangeJobType}
        />
        <CareerJobLevelFilter
          filterLevel={filters.filterLevel}
          onChangeJobType={handleChangeJobLevel}
        />
        <CareerJobSalaryFilter
          filterSalary={filters.filterSalary}
          onChangeSalary={handleChangeSalary}
        />
        <CareerJobBenefitsFilter
          filterBenefits={filters.filterBenefits}
          onChangeJobBenefits={handleChangeJobBenefits}
        />
      </Stack>

      <Button
        size="large"
        variant="contained"
        startIcon={<Iconify icon={searchIcon} sx={{ width: 20, height: 20 }} />}
        sx={{
          mt: 2.5,
          display: { md: 'none' },
        }}
      >
        Search
      </Button>
    </>
  );

  return (
    <>
      {/* -- Desktop -- */}
      <Box
        sx={{
          pt: 5,
          pb: 8,
          display: {
            xs: 'none',
            md: 'block',
          },
        }}
      >
        {renderFilters}
      </Box>

      {/* -- Mobile -- */}
      <Stack
        alignItems="flex-end"
        sx={{
          py: 2.5,
          display: { md: 'none' },
        }}
      >
        <Button
          color="inherit"
          variant="contained"
          startIcon={<Iconify icon={filterIcon} sx={{ width: 18, height: 18 }} />}
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
          sx: {
            pt: 5,
            px: 3,
            width: DRAWER_WIDTH,
          },
        }}
      >
        {renderFilters}
      </Drawer>
    </>
  );
}
