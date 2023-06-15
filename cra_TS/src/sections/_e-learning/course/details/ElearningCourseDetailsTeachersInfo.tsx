// @mui
import { Stack, Avatar, Typography, Paper, Box, Link } from '@mui/material';
import { fShortenNumber } from 'src/utils/formatNumber';
// types
import { ICourseTeacherProp } from 'src/types/course';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  teachers: ICourseTeacherProp[];
};

export default function ElearningCourseDetailsTeachersInfo({ teachers = [] }: Props) {
  return (
    <>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Instructors ({teachers.length})
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 3, md: 4 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            lg: 'repeat(2, 1fr)',
          },
        }}
      >
        {teachers.map((teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </Box>
    </>
  );
}

// ----------------------------------------------------------------------

type TeacherItemProps = {
  teacher: ICourseTeacherProp;
};

function TeacherItem({ teacher }: TeacherItemProps) {
  const { picture, name, role, ratings, reviews, students, courses } = teacher;

  return (
    <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
      <Stack direction="row" spacing={3} flexWrap="wrap">
        <Avatar src={picture} sx={{ width: 72, height: 72 }} />

        <Stack spacing={1} flexGrow={1}>
          <Stack spacing={0.5}>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {role}
            </Typography>
          </Stack>

          <Stack spacing={0.5} direction="row" alignItems="center">
            <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />
            <Box sx={{ typography: 'h6' }}>
              {Number.isInteger(ratings) ? `${ratings}.0` : ratings}
            </Box>

            {reviews && (
              <Link variant="body2" sx={{ color: 'text.secondary' }}>
                ({fShortenNumber(reviews)} reviews)
              </Link>
            )}
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            sx={{ typography: 'body2', color: 'text.disabled' }}
          >
            <Iconify icon="carbon:events" sx={{ mr: 1 }} />
            <Box component="strong" sx={{ mr: 0.25 }}>
              {fShortenNumber(students)}
            </Box>
            Students
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            sx={{ typography: 'body2', color: 'text.disabled' }}
          >
            <Iconify icon="carbon:notebook" sx={{ mr: 1 }} />
            <Box component="strong" sx={{ mr: 0.25 }}>
              {courses}
            </Box>
            Lessons
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
