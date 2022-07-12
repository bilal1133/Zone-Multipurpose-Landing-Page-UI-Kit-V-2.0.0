// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Typography, Stack, Container, Box, Paper, Button } from '@mui/material';
// utils
import cssStyles from '../../../utils/cssStyles';
// @types
import { JobByCategoryProps } from '../../../@types/career';
// components
import { Iconify, TextMaxLine, SvgIconStyle } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  ...cssStyles(theme).bgGradient({
    direction: 'top',
    startColor: alpha(theme.palette.grey[500], 0),
    endColor: alpha(theme.palette.grey[500], 0.12),
  }),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  categories: JobByCategoryProps[];
};

export default function CareerLandingHotCategories({ categories }: Props) {
  return (
    <RootStyle>
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Hot Categories
        </Typography>

        <Box
          sx={{
            my: { xs: 8, md: 10 },
            display: 'grid',
            gap: 4,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </Box>

        <Stack alignItems="center">
          <Button
            color="inherit"
            size="large"
            variant="outlined"
            endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
          >
            View All Categories
          </Button>
        </Stack>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type CategoryItemProps = {
  category: JobByCategoryProps;
};

function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        pt: '100%',
        borderRadius: 2,
        cursor: 'pointer',
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'transparent',
        transition: (theme) => theme.transitions.create('all'),
        '&:hover': {
          bgcolor: 'background.paper',
          boxShadow: (theme) => theme.customShadows.z24,
          '& .icon': {
            bgcolor: 'primary.main',
            transition: (theme) => theme.transitions.create('all'),
            '& > span': {
              color: 'common.white',
            },
          },
        },
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 1,
          height: 1,
          top: 0,
          position: 'absolute',
        }}
      >
        <Box
          className="icon"
          sx={{
            mb: 2.5,
            width: 72,
            height: 72,
            mx: 'auto',
            display: 'flex',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SvgIconStyle src={category.icon} sx={{ width: 48, height: 48 }} />
        </Box>

        <TextMaxLine variant="h6" line={1}>
          {category.name}
        </TextMaxLine>

        <Typography variant="body2" sx={{ color: 'text.disabled', mt: 0.5 }}>
          {category.totalJobs} jobs
        </Typography>
      </Stack>
    </Paper>
  );
}
