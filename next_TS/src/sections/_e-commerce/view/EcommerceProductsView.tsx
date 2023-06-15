import { useState, useEffect } from 'react';
// @mui
import {
  Box,
  Stack,
  Button,
  Select,
  Divider,
  MenuItem,
  Container,
  Typography,
  FormControl,
  ToggleButton,
  SelectChangeEvent,
  ToggleButtonGroup,
} from '@mui/material';
// config
import { NAV } from 'src/config-global';
// _mock
import { _products } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
//
import { EcommerceHeader } from '../layout';
import EcommerceFilters from '../product/filters';
import { EcommerceProductList, EcommerceProductListBestSellers } from '../product/list';

// ----------------------------------------------------------------------

const VIEW_OPTIONS = [
  { value: 'list', icon: <Iconify icon="carbon:list-boxes" /> },
  { value: 'grid', icon: <Iconify icon="carbon:grid" /> },
];

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'popular', label: 'Popular' },
];

// ----------------------------------------------------------------------

export default function EcommerceProductsView() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [sort, setSort] = useState('latest');

  const [loading, setLoading] = useState(true);

  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    fakeLoading();
  }, []);

  const handleChangeViewMode = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setViewMode(newAlignment);
    }
  };

  const handleChangeSort = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  const handleMobileOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <EcommerceHeader />

      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            py: 5,
          }}
        >
          <Typography variant="h3">Catalog</Typography>

          <Button
            color="inherit"
            variant="contained"
            startIcon={<Iconify icon="carbon:filter" width={18} />}
            onClick={handleMobileOpen}
            sx={{
              display: { md: 'none' },
            }}
          >
            Filters
          </Button>
        </Stack>

        <Stack
          direction={{
            xs: 'column-reverse',
            md: 'row',
          }}
          sx={{ mb: { xs: 8, md: 10 } }}
        >
          <Stack spacing={5} divider={<Divider sx={{ borderStyle: 'dashed' }} />}>
            <EcommerceFilters mobileOpen={mobileOpen} onMobileClose={handleMobileClose} />
            <EcommerceProductListBestSellers products={_products.slice(0, 3)} />
          </Stack>

          <Box
            sx={{
              flexGrow: 1,
              pl: { md: 8 },
              width: { md: `calc(100% - ${NAV.W_DRAWER}px)` },
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 5 }}
            >
              <ToggleButtonGroup
                exclusive
                size="small"
                value={viewMode}
                onChange={handleChangeViewMode}
                sx={{ borderColor: 'transparent' }}
              >
                {VIEW_OPTIONS.map((option) => (
                  <ToggleButton key={option.value} value={option.value}>
                    {option.icon}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>

              <FormControl size="small" hiddenLabel variant="filled" sx={{ width: 120 }}>
                <Select
                  value={sort}
                  onChange={handleChangeSort}
                  MenuProps={{
                    PaperProps: {
                      sx: { px: 1 },
                    },
                  }}
                >
                  {SORT_OPTIONS.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>

            <EcommerceProductList
              loading={loading}
              viewMode={viewMode}
              products={_products.slice(0, 16)}
            />
          </Box>
        </Stack>
      </Container>
    </>
  );
}
