import { useState } from 'react';
// @mui
import { Typography } from '@mui/material';
// types
import { ICourseLessonProp } from 'src/types/course';
//
import ElearningCourseDetailsLessonItem from './ElearningCourseDetailsLessonItem';
import ElearningCourseDetailsLessonsDialog from './ElearningCourseDetailsLessonsDialog';

// ----------------------------------------------------------------------

type Props = {
  lessons: ICourseLessonProp[];
};

export default function ElearningCourseDetailsLessonList({ lessons }: Props) {
  const [selectLesson, setSelectLesson] = useState<ICourseLessonProp | null>(null);

  const [open, setOpen] = useState(false);

  const [play, setPlay] = useState(false);

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleSelectVideo = (lesson: ICourseLessonProp) => {
    setSelectLesson(lesson);
    setPlay(true);
  };

  const handleOpen = (lesson: ICourseLessonProp) => {
    setOpen(true);
    if (lesson) {
      handleSelectVideo(lesson);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setPlay(false);
    setSelectLesson(null);
  };

  const handleVideoEnded = () => {
    setPlay(false);
  };

  const handleExpanded = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Lessons
      </Typography>

      {lessons?.map((lesson) => (
        <ElearningCourseDetailsLessonItem
          key={lesson.id}
          lesson={lesson}
          selected={play && selectLesson?.id === lesson.id}
          expanded={expanded === lesson.id}
          onExpanded={handleExpanded(lesson.id)}
          onOpen={() => handleOpen(lesson)}
        />
      ))}

      <ElearningCourseDetailsLessonsDialog
        selected={play}
        open={open}
        lessons={lessons}
        onClose={handleClose}
        selectLesson={selectLesson}
        onVideoEnded={handleVideoEnded}
        onSelectVideo={(lesson) => setSelectLesson(lesson)}
      />
    </div>
  );
}
