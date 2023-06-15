// @mui
import { Typography, Divider, Stack, IconButton, Link } from '@mui/material';
// utils
import { fDate } from 'src/utils/formatTime';
// types
import { ICaseStudyProps } from 'src/types/case-study';
// _mock
import { _socials } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  caseStudy: ICaseStudyProps;
};

export default function MarketingCaseStudyDetailsSummary({ caseStudy }: Props) {
  const { title, description, category, website, createdAt } = caseStudy;

  return (
    <Stack spacing={3} sx={{ p: 5, borderRadius: 2, bgcolor: 'background.neutral' }}>
      <Stack spacing={2}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          summary
        </Typography>

        <Typography variant="h6">{title}</Typography>

        <Typography variant="body2">{description}</Typography>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack spacing={1}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Website
        </Typography>

        <Link variant="body2" color="inherit">
          {website}
        </Link>

        <Typography variant="overline" sx={{ color: 'text.disabled', pt: 1 }}>
          Category
        </Typography>

        <Typography variant="body2" sx={{ pb: 1 }}>
          {category}
        </Typography>

        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Date
        </Typography>

        <Typography variant="body2">{fDate(createdAt)}</Typography>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack direction="row" alignItems="center" spacing={0.5}>
        <Typography variant="subtitle2">Share:</Typography>

        <Stack direction="row">
          {_socials.map((social) => (
            <IconButton key={social.value}>
              <Iconify icon={social.icon} sx={{ color: social.color }} />
            </IconButton>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
