import { useState } from 'react';
// @mui
import { Stack, Drawer, Box, Typography } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
// config
import { DRAWER_WIDTH, HEADER_DESKTOP_HEIGHT } from '../../../config';
// @type
import { CountriesProps } from '../../../@types/map';
import { CourseFiltersProps } from '../../../@types/e-learning';
//
import { SearchInput } from '../../../components';
import ElearningCourseFeeFilter from './ElearningCourseFeeFilter';
import ElearningCourseLevelFilter from './ElearningCourseLevelFilter';
import ElearningCourseRatingFilter from './ElearningCourseRatingFilter';
import ElearningCourseLanguageFilter from './ElearningCourseLanguageFilter';
import ElearningCourseDurationFilter from './ElearningCourseDurationFilter';
import ElearningCourseCategoriesFilter from './ElearningCourseCategoriesFilter';

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

export default function ElearningCourseBarFilters({ mobileOpen, onMobileClose }: Props) {
  const [filters, setFilters] = useState<CourseFiltersProps>(defaultValues);

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

  const handleChangeLanguage = (keyword: CountriesProps[]) => {
    setFilters({
      ...filters,
      filterLanguage: keyword,
    });
  };

  const renderFilters = (
    <Stack spacing={2.5}>
      <SearchInput />

      <section>
        <Typography variant="overline" sx={{ mb: 2, color: 'text.secondary', display: 'block' }}>
          Ratings
        </Typography>
        <ElearningCourseRatingFilter
          filterRating={filters.filterRating}
          onChangeRating={handleChangeRating}
        />
      </section>

      <section>
        <Typography variant="overline" sx={{ mb: 1.5, color: 'text.secondary', display: 'block' }}>
          Duration
        </Typography>
        <ElearningCourseDurationFilter
          filterDuration={filters.filterDuration}
          onChangeDuration={handleChangeDuration}
        />
      </section>

      <section>
        <Typography variant="overline" sx={{ mb: 1.5, color: 'text.secondary', display: 'block' }}>
          Category
        </Typography>
        <ElearningCourseCategoriesFilter
          filterCategories={filters.filterCategories}
          onChangeCategory={handleChangeCategory}
        />
      </section>

      <section>
        <Typography variant="overline" sx={{ mb: 1.5, color: 'text.secondary', display: 'block' }}>
          Level
        </Typography>
        <ElearningCourseLevelFilter
          filterLevel={filters.filterLevel}
          onChangeLevel={handleChangeLevel}
        />
      </section>

      <section>
        <Typography variant="overline" sx={{ mb: 1.5, color: 'text.secondary', display: 'block' }}>
          Fee
        </Typography>

        <ElearningCourseFeeFilter filterFee={filters.filterFee} onChangeFee={handleChangeFee} />
      </section>

      <section>
        <Typography variant="overline" sx={{ mb: 1.5, color: 'text.secondary', display: 'block' }}>
          Language
        </Typography>
        <ElearningCourseLanguageFilter
          filterLanguage={filters.filterLanguage}
          onChangeLanguage={handleChangeLanguage}
        />
      </section>
    </Stack>
  );

  return (
    <>
      {/* -- Desktop -- */}
      <Box
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          display: {
            xs: 'none',
            md: 'block',
          },
          top: { md: HEADER_DESKTOP_HEIGHT },
          position: { md: 'sticky' },
        }}
      >
        {renderFilters}
      </Box>

      {/* -- Mobile -- */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={onMobileClose}
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
