// @mui
import { Pagination, Box } from '@mui/material';
// types
import { IJobProps } from 'src/types/job';
//
import { CareerJobItem, CareerJobItemSkeleton } from '../item';

// ----------------------------------------------------------------------

type Props = {
  jobs: IJobProps[];
  loading?: boolean;
};

export default function CareerJobList({ jobs, loading }: Props) {
  return (
    <>
      <Box
        sx={{
          columnGap: 4,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {(loading ? [...Array(9)] : jobs).map((job, index) =>
          job ? <CareerJobItem key={job.id} job={job} /> : <CareerJobItemSkeleton key={index} />
        )}
      </Box>

      <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          my: 10,
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}
