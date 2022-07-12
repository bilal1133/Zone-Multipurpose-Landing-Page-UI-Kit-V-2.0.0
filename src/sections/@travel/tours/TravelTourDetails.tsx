import { ReactElement } from 'react';
// icons
import checkmarkIcon from '@iconify/icons-carbon/checkmark';
import locationIcon from '@iconify/icons-carbon/location';
import mobileIcon from '@iconify/icons-carbon/mobile';
import calendarIcon from '@iconify/icons-carbon/calendar';
import translateIcon from '@iconify/icons-carbon/translate';
import userIcon from '@iconify/icons-carbon/user';
import timeIcon from '@iconify/icons-carbon/time';
// @mui
import { Typography, Stack, Box, Divider } from '@mui/material';
// utils
import { fDate } from '../../../utils/formatTime';
// @types
import { TourProps } from '../../../@types/travel';
// utils
import { TextIconLabel, Iconify } from '../../../components';

// ----------------------------------------------------------------------

type Props = {
  tour: TourProps;
};

export default function TravelTourDetails({ tour }: Props) {
  const {
    program,
    includes,
    location,
    duration,
    tourGuide,
    languages,
    highlights,
    description,
    availableEnd,
    availableStart,
  } = tour;

  return (
    <Stack spacing={5}>
      {/* -- Tour Overview -- */}
      <section>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Tour Overview
        </Typography>
        <Box
          sx={{
            display: 'grid',
            rowGap: 2.5,
            columnGap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            },
          }}
        >
          <OverviewItem
            icon={<Iconify icon={calendarIcon} />}
            label="Available"
            text={`${fDate(availableStart, 'dd/MM/yyyy')} - ${fDate(availableEnd, 'dd/MM/yyyy')}`}
          />
          <OverviewItem
            icon={<Iconify icon={userIcon} />}
            label="Contact name"
            text={tourGuide?.name}
          />
          <OverviewItem icon={<Iconify icon={locationIcon} />} label="Location" text={location} />
          <OverviewItem
            icon={<Iconify icon={mobileIcon} />}
            label="Contact phone"
            text={tourGuide?.phoneNumber}
          />
          <OverviewItem icon={<Iconify icon={timeIcon} />} label="Durations" text={duration} />
          <OverviewItem
            icon={<Iconify icon={translateIcon} />}
            label="Languages"
            text={languages.join(', ')}
          />
        </Box>
      </section>

      <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

      {/* -- Tour Description -- */}
      <section>
        <Typography variant="h4" paragraph>
          Tour Description
        </Typography>
        <Typography>{description}</Typography>
      </section>

      {/* -- Tour Highlights -- */}
      <section>
        <Typography variant="h4" paragraph>
          Tour Highlights
        </Typography>
        <Box component="ul">
          {highlights.map((highlight) => (
            <Box key={highlight} component="li">
              {highlight}
            </Box>
          ))}
        </Box>
      </section>

      {/* -- Tour Includes -- */}
      <section>
        <Typography variant="h4" paragraph>
          Tour Includes
        </Typography>

        <Box
          sx={{
            display: 'grid',
            rowGap: 2,
            columnGap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            },
          }}
        >
          {includes.map((option) => (
            <TextIconLabel
              key={option.label}
              icon={
                <Iconify
                  icon={checkmarkIcon}
                  sx={{
                    mr: 2,
                    width: 20,
                    height: 20,
                    color: 'primary.main',
                    ...(!option.enabled && { color: 'currentColor' }),
                  }}
                />
              }
              value={option.label}
              sx={{
                ...(!option.enabled && { color: 'text.disabled' }),
              }}
            />
          ))}
        </Box>
      </section>

      {/* -- Tour Program -- */}
      <Stack spacing={2}>
        <Typography variant="h4">Tour Program</Typography>
        {program.map((content) => (
          <HighlightItem key={content.label} label={content.label} text={content.text} />
        ))}
      </Stack>
    </Stack>
  );
}

// ----------------------------------------------------------------------

type OverviewItemProp = {
  icon: ReactElement;
  label: string;
  text: string;
};

function OverviewItem({ icon, label, text = '-' }: OverviewItemProp) {
  return (
    <TextIconLabel
      spacing={1.5}
      alignItems="flex-start"
      icon={icon}
      value={
        <Stack spacing={0.5}>
          <Typography variant="body2">{label}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{text}</Typography>
        </Stack>
      }
      sx={{ '& svg': { width: 24, height: 24 } }}
    />
  );
}

// ----------------------------------------------------------------------

type HighlightItemProps = {
  label: string;
  text: string;
};

function HighlightItem({ label, text }: HighlightItemProps) {
  return (
    <Stack spacing={1}>
      <Typography
        variant="h6"
        sx={{ color: 'primary.main', display: 'flex', alignItems: 'center' }}
      >
        <Box
          component="span"
          sx={{ width: 12, height: 2, borderRadius: 1, bgcolor: 'currentColor', mr: 1.5 }}
        />
        {label}
      </Typography>
      <Typography>{text}</Typography>
    </Stack>
  );
}
