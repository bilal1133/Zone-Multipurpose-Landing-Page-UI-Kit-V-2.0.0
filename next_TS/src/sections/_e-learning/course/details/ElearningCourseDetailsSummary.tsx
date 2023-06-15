// @mui
import { alpha } from '@mui/material/styles';
import { Stack, Typography, Chip, Box } from '@mui/material';
// types
import { ICourseProps } from 'src/types/course';
// components
import Iconify from 'src/components/iconify';
//
import ElearningCourseDetailsLessonList from './ElearningCourseDetailsLessonList';

// ----------------------------------------------------------------------

type Props = {
  course: ICourseProps;
};

export default function ElearningCourseDetailsSummary({ course }: Props) {
  const { lessons, skills, learnList } = course;

  return (
    <Stack spacing={5}>
      <ElearningCourseDetailsLessonList lessons={lessons} />

      {/* --  Learn -- */}
      <div>
        <Typography variant="h4" sx={{ mb: 3 }}>
          What You Will Learn
        </Typography>

        <Stack spacing={1}>
          {learnList?.map((learn) => (
            <Stack key={learn} direction="row" alignItems="center">
              <Box
                sx={{
                  mr: 1.5,
                  width: 20,
                  height: 20,
                  display: 'flex',
                  borderRadius: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: (theme) => alpha(theme?.palette?.primary?.main, 0.08),
                }}
              >
                <Iconify
                  icon="carbon:checkmark"
                  sx={{ width: 16, height: 16, color: 'primary.main' }}
                />
              </Box>
              {learn}
            </Stack>
          ))}
        </Stack>
      </div>

      {/* -- Skills -- */}
      <div>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Skills You Will Gain
        </Typography>

        <Stack direction="row" flexWrap="wrap">
          {skills?.map((skill) => (
            <Chip key={skill} label={skill} sx={{ m: 0.5 }} onClick={() => {}} />
          ))}
        </Stack>
      </div>

      {/* -- Overview -- */}
      <div>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Overview
        </Typography>

        <Typography>
          Consentaneum aeternitate dignitati commoventur primisque cupit mea officia peccata parens
          egone dolorem minuis. Secundae neglegi sextilius conantur commodaita siti philosophi ioca
          tenere lorem apparet assentior pudoris sint leves neglegebat unde reliquisti simile.
        </Typography>
      </div>
    </Stack>
  );
}
