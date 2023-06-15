// @mui
import { Pagination, Stack } from '@mui/material';
// types
import { ICourseProps } from 'src/types/course';
//
import { ElearningCourseItem, ElearningCourseItemSkeleton } from '../item';

// ----------------------------------------------------------------------

type Props = {
  courses: ICourseProps[];
  loading?: boolean;
};

export default function ElearningCourseList({ courses, loading }: Props) {
  return (
    <>
      <Stack spacing={4}>
        {(loading ? [...Array(9)] : courses).map((course, index) =>
          course ? (
            <ElearningCourseItem key={course.id} course={course} />
          ) : (
            <ElearningCourseItemSkeleton key={index} />
          )
        )}
      </Stack>

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
