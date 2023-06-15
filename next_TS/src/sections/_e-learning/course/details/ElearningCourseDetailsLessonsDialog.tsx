// @mui
import { Box, Stack, Dialog, Typography, ListItemButton, IconButton } from '@mui/material';
// types
import { ICourseLessonProp } from 'src/types/course';
// components
import Player from 'src/components/player';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  selected: boolean;
  onClose: VoidFunction;
  onVideoEnded: VoidFunction;
  lessons: ICourseLessonProp[];
  selectLesson: ICourseLessonProp | null;
  onSelectVideo: (lesson: ICourseLessonProp) => void;
};

export default function ElearningCourseDetailsLessonsDialog({
  open,
  selected,
  lessons,
  onClose,
  selectLesson,
  onVideoEnded,
  onSelectVideo,
}: Props) {
  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { overflow: 'hidden' } }}
    >
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box
          sx={{
            position: 'relative',
            width: { xs: 1, md: 0.5 },
            height: { xs: 320, md: 640 },
          }}
        >
          <IconButton onClick={onClose} sx={{ top: 16, left: 16, zIndex: 9, position: 'absolute' }}>
            <Iconify icon="carbon:close" />
          </IconButton>

          <Player
            controls
            url={selectLesson?.videoPath}
            playing={selected}
            onEnded={onVideoEnded}
          />
        </Box>

        <Scrollbar sx={{ p: 1, maxHeight: 640 }}>
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
  lesson: ICourseLessonProp;
  onSelectVideo: VoidFunction;
};

function LessonItem({ lesson, selected, onSelectVideo }: LessonItemProps) {
  const { title, description, isUnLock } = lesson;

  const playIcon = selected ? 'carbon:pause-outline' : 'carbon:play';

  return (
    <ListItemButton
      selected={selected}
      disabled={isUnLock}
      onClick={onSelectVideo}
      sx={{ borderRadius: 1 }}
    >
      <Iconify
        width={24}
        icon={isUnLock ? 'carbon:locked' : playIcon}
        sx={{
          mr: 2,
          ...(selected && {
            color: 'primary.main',
          }),
          ...(isUnLock && {
            color: 'text.disabled',
          }),
        }}
      />

      <div>
        <Typography
          noWrap
          variant="subtitle1"
          sx={{
            ...(selected && {
              color: 'primary.main',
            }),
          }}
        >
          {title}
        </Typography>

        <Typography noWrap variant="body2" sx={{ maxWidth: 0.98 }}>
          {description}
        </Typography>
      </div>
    </ListItemButton>
  );
}
