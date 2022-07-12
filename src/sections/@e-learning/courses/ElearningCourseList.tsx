// @mui
import { Pagination, Stack } from '@mui/material';
// @types
import { CourseProps } from '../../../@types/e-learning';
// components
import { CourseItemSkeleton } from '../../../components/skeleton';
//
import ElearningCourseItem from './ElearningCourseItem';

// ----------------------------------------------------------------------

type Props = {
  courses: CourseProps[];
  loading?: boolean;
};

export default function ElearningCourseList({ courses, loading }: Props) {
  return (
    <>
      <Stack spacing={4}>
        {(loading ? [...Array(6)] : courses).map((course, index) => (
          <div key={course?.id || index}>
            {course ? <ElearningCourseItem course={course} /> : <CourseItemSkeleton />}
          </div>
        ))}
      </Stack>

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
