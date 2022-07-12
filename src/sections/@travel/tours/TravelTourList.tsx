// @mui
import { Pagination, Box } from '@mui/material';
// @types
import { TourProps } from '../../../@types/travel';
// components
import { TourItemSkeleton } from '../../../components/skeleton';
//
import TravelTourItem from './TravelTourItem';

// ----------------------------------------------------------------------

type Props = {
  tours: TourProps[];
  loading?: boolean;
};

export default function TravelTourList({ tours, loading }: Props) {
 
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          columnGap: 3,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {(loading ? [...Array(8)] : tours).map((tour, index) =>
          tour ? <TravelTourItem key={tour.id} tour={tour} /> : <TourItemSkeleton key={index} />
        )}
      </Box>

      <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          pt: 10,
          pb: { xs: 10, md: 15 },
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}
