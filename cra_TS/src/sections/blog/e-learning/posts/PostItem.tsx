import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Stack, Avatar, Typography, Paper, Divider, Link } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// utils
import { fDate } from 'src/utils/formatTime';
// types
import { IBlogPostProps } from 'src/types/blog';
// components
import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
};

export default function PostItem({ post }: Props) {
  const { title, duration, coverImg, description, author, createdAt } = post;

  return (
    <Paper variant="outlined" sx={{ borderRadius: 2, overflow: 'hidden' }}>
      <Image src={coverImg} alt={title} ratio="1/1" />

      <Stack direction="row" spacing={3} sx={{ p: 3 }}>
        <Stack sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle2">{fDate(createdAt, 'MMM')}</Typography>

          <Divider sx={{ mt: 1, mb: 0.5 }} />

          <Typography variant="h3">{fDate(createdAt, 'dd')}</Typography>
        </Stack>

        <Stack spacing={1}>
          <Link component={RouterLink} to={paths.eLearning.post} color="inherit">
            <TextMaxLine variant="h6" persistent>
              {title}
            </TextMaxLine>
          </Link>

          <TextMaxLine variant="body2" persistent color="text.secondary">
            {description}
          </TextMaxLine>

          <Stack spacing={1.5} direction="row" alignItems="center" sx={{ pt: 1.5 }}>
            <Avatar src={author.picture} sx={{ width: 40, height: 40 }} />
            <Stack>
              <Typography variant="body2">{author.name}</Typography>
              <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                {duration}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
