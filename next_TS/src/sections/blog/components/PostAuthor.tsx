// @mui
import { Stack, Typography, Avatar, IconButton } from '@mui/material';
// types
import { IAuthorProps } from 'src/types/author';
// _mock
import { _socials } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  author: IAuthorProps;
};

export default function PostAuthor({ author }: Props) {
  const { name, role, about, quotes, picture } = author;

  return (
    <Stack
      direction="row"
      spacing={{ xs: 3, md: 4 }}
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Avatar src={picture} sx={{ width: 96, height: 96 }} />

      <Stack spacing={2}>
        <Stack
          spacing={2}
          alignItems={{ md: 'center' }}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Stack spacing={0.5}>
            <Typography variant="h5">{name}</Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {role}
            </Typography>
          </Stack>

          <Stack direction="row">
            {_socials.map((social) => (
              <IconButton key={social.value}>
                <Iconify icon={social.icon} sx={{ color: social.color }} />
              </IconButton>
            ))}
          </Stack>
        </Stack>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {about}
        </Typography>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {quotes}
        </Typography>
      </Stack>
    </Stack>
  );
}
