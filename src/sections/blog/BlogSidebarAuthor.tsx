import { Stack, Avatar, Typography } from '@mui/material';
// components
import { SocialsButton } from '../../components';
// @types
import { AuthorProps } from '../../@types/author';

// ----------------------------------------------------------------------

type Props = {
  author: AuthorProps;
};

export default function BlogSidebarAuthor({ author }: Props) {
  const { name, role, picture, socialLinks } = author;

  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        mb: { md: 5 },
      }}
    >
      <Avatar src={picture} sx={{ width: 64, height: 64 }} />
      <Stack>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body3" sx={{ mt: 0.5, mb: 2, color: 'text.secondary' }}>
          {role}
        </Typography>
        <SocialsButton initialColor links={socialLinks} />
      </Stack>
    </Stack>
  );
}
