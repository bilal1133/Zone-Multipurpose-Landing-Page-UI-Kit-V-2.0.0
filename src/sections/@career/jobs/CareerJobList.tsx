// @mui
import { Pagination, Box } from '@mui/material';
// @types
import { JobProps } from '../../../@types/career';
// components
import { JobItemSkeleton } from '../../../components/skeleton';
//
import CareerJobItem from './CareerJobItem';

// ----------------------------------------------------------------------

type Props = {
  jobs: JobProps[];
  loading?: boolean;
};

export default function CareerJobList({ jobs, loading }: Props) {
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          columnGap: 4,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {(loading ? [...Array(6)] : jobs).map((job, index) =>
          job ? <CareerJobItem key={job.id} job={job} /> : <JobItemSkeleton key={index} />
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
