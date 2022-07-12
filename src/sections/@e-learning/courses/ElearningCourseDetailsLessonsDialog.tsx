// icons
import closeIcon from '@iconify/icons-carbon/close';
// @mui
import { Box, Stack, Dialog, Typography, ListItemButton } from '@mui/material';
// @types
import { CourseLessonProp } from '../../../@types/e-learning';
// components
import { Iconify, Player, Scrollbar } from '../../../components';
import { IconButtonAnimate } from '../../../components/animate';

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  isPlay: boolean;
  onClose: VoidFunction;
  onVideoEnded: VoidFunction;
  lessons: CourseLessonProp[];
  selectLesson: CourseLessonProp | null;
  onSelectVideo: (lesson: CourseLessonProp) => void;
};

export default function ElearningCourseDetailsLessonsDialog({
  isPlay,
  open,
  lessons,
  selectLesson,
  onClose,
  onVideoEnded,
  onSelectVideo,
}: Props) {
  return (
    <Dialog fullWidth maxWidth="md" open={open} onClose={onClose}>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box
          sx={{
            position: 'relative',
            bgcolor: 'background.neutral',
            width: { xs: 1, md: 480 },
            height: { xs: 240, md: 480 },
          }}
        >
          <IconButtonAnimate
            onClick={onClose}
            sxWrap={{ top: 16, left: 16, zIndex: 9, position: 'absolute' }}
          >
            <Iconify icon={closeIcon} />
          </IconButtonAnimate>

          <Player controls url={selectLesson?.videoPath} playing={isPlay} onEnded={onVideoEnded} />
        </Box>

        <Scrollbar sx={{ flexGrow: 1, p: 1, maxHeight: 480 }}>
          {lessons?.map((lesson) => (
            <LessonItem
              key={lesson.id}
              lesson={lesson}
              selected={selectLesson?.id === lesson.id}
              onSelectVideo={() => onSelectVideo(lesson)}
            />
          ))}
        </Scrollbar>
      </Stack>
    </Dialog>
  );
}

// ----------------------------------------------------------------------

type LessonItemProps = {
  selected: boolean;
  lesson: CourseLessonProp;
  onSelectVideo: VoidFunction;
};

function LessonItem({ lesson, selected, onSelectVideo }: LessonItemProps) {
  const { title, description, isUnLock } = lesson;

  return (
    <ListItemButton
      selected={selected}
      disabled={isUnLock}
      onClick={onSelectVideo}
      sx={{ borderRadius: 1, flexDirection: 'column', alignItems: 'flex-start' }}
    >
      <Typography
        noWrap
        variant="subtitle2"
        sx={{
          ...(selected && {
            color: 'primary.main',
          }),
        }}
      >
        {title}
      </Typography>

      <Typography noWrap variant="caption" sx={{ maxWidth: 0.98 }}>
        {description}
      </Typography>
    </ListItemButton>
  );
}
