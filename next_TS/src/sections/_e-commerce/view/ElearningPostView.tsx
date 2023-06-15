import { useState } from 'react';
// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Fab,
  Stack,
  Avatar,
  Divider,
  Popover,
  Checkbox,
  MenuItem,
  Container,
  Typography,
  IconButton,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// utils
import { fDate } from 'src/utils/formatTime';
import { bgGradient } from 'src/utils/cssStyles';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// _mock
import { _socials, _blogCoursePosts } from 'src/_mock';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import Markdown from 'src/components/markdown';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import NewsletterElearning from '../../newsletter/e-learning';
import { BlogElearningLatestPosts } from '../../blog/e-learning';
import { PostTags, PostAuthor, PostSocialsShare, PostPrevAndNext } from '../../blog/components';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------

export default function ElearningPostView() {
  const isMdUp = useResponsive('up', 'md');

  const { title, description, duration, createdAt, author, favorited, heroImg, tags, content } =
    _blogCoursePosts[0];

  const [favorite, setFavorite] = useState(favorited);

  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleChangeFavorite = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  };

  return (
    <>
      <Divider />

      <Container sx={{ overflow: 'hidden' }}>
        <CustomBreadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: paths.eLearning.posts },
            { name: title },
          ]}
          sx={{ my: 5 }}
        />

        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
        >
          <Fab
            color="primary"
            sx={{
              zIndex: 9,
              position: 'absolute',
            }}
          >
            <Iconify icon="carbon:play" width={24} />
          </Fab>

          <StyledOverlay />

          <Image alt="hero" src={heroImg} ratio={isMdUp ? '21/9' : '16/9'} />
        </Stack>

        <Grid container spacing={3} justifyContent={{ md: 'center' }}>
          <Grid xs={12} md={8}>
            <Stack
              spacing={3}
              sx={{
                pb: 6,
                textAlign: 'center',
                pt: { xs: 6, md: 10 },
              }}
            >
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                {duration}
              </Typography>

              <Typography variant="h2" component="h1">
                {title}
              </Typography>

              <Typography variant="h5">{description}</Typography>
            </Stack>

            <Divider />

            <Stack direction="row" justifyContent="space-between" spacing={1.5} sx={{ py: 3 }}>
              <Avatar src={author.picture} sx={{ width: 48, height: 48 }} />

              <Stack spacing={0.5} flexGrow={1}>
                <Typography variant="subtitle2">{author.name}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {fDate(createdAt, 'dd/MM/yyyy p')}
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center">
                <IconButton onClick={handleOpen} color={open ? 'primary' : 'default'}>
                  <Iconify icon="carbon:share" />
                </IconButton>

                <Checkbox
                  color="error"
                  checked={favorite}
                  onChange={handleChangeFavorite}
                  icon={<Iconify icon="carbon:favorite" />}
                  checkedIcon={<Iconify icon="carbon:favorite-filled" />}
                />
              </Stack>
            </Stack>

            <Divider sx={{ mb: 6 }} />

            <Markdown content={content} firstLetter />

            <PostTags tags={tags} />

            <PostSocialsShare />

            <Divider sx={{ mt: 8 }} />

            <PostAuthor author={author} />

            <Divider />

            <PostPrevAndNext prevPost={_blogCoursePosts[1]} nextPost={_blogCoursePosts[2]} />
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <BlogElearningLatestPosts posts={_blogCoursePosts.slice(0, 3)} />

      <NewsletterElearning />

      <Popover
        open={!!open}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        PaperProps={{
          sx: { width: 220, p: 1 },
        }}
      >
        {_socials.map((social) => (
          <MenuItem key={social.value} onClick={handleClose} sx={{ typography: 'body2' }}>
            <Iconify icon={social.icon} width={24} sx={{ mr: 1, color: social.color }} />
            Share via {social.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
