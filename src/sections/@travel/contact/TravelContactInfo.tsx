import { m } from 'framer-motion';
// icons
import locationIcon from '@iconify/icons-carbon/location';
import mobileIcon from '@iconify/icons-carbon/mobile';
import emailIcon from '@iconify/icons-carbon/email';
import launchIcon from '@iconify/icons-carbon/launch';
// @mui
import { Box, Typography, Stack, Paper, Container, Link } from '@mui/material';
// _data
import { _offices } from '../../../../_data/mock';
// @types
import { OfficeMapProps } from '../../../@types/map';
// components
import { Image, Iconify, TextIconLabel } from '../../../components';
import { varHover, varTranHover } from '../../../components/animate';

// ----------------------------------------------------------------------

export default function TravelContactInfo() {
  return (
    <>
      <Container>
        <Stack
          spacing={3}
          sx={{
            py: { xs: 8, md: 10 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">
            We Work <br />
            Worldwide.
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {`We'd love to talk about how we can help you.`}
          </Typography>
        </Stack>
      </Container>

      <Box
        sx={{
          py: { xs: 10, md: 15 },
          bgcolor: 'background.neutral',
        }}
      >
        <Container>
          <Box
            sx={{
              display: 'grid',
              gap: 4,
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
            }}
          >
            {_offices.map((office) => (
              <OfficeCard key={office.id} office={office} />
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}

// ----------------------------------------------------------------------

type OfficeCardProps = {
  office: OfficeMapProps;
};

function OfficeCard({ office }: OfficeCardProps) {
  const { country, address, photo, email, phoneNumber } = office;

  return (
    <Paper
      component={m.div}
      whileHover="hover"
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >
      <Box sx={{ overflow: 'hidden' }}>
        <m.div variants={varHover()} transition={varTranHover()}>
          <Image src={photo} alt={country} ratio="4/3" />
        </m.div>
      </Box>

      <Stack spacing={1.5} sx={{ p: 3 }} component={m.div} variants={{ hover: { opacity: 0.8 } }}>
        <Typography variant="h5" sx={{ mb: 0.5 }}>
          {country}
        </Typography>

        <Stack spacing={0.5}>
          <TextIconLabel
            icon={<Iconify icon={locationIcon} sx={{ mr: 1, width: 24, height: 24 }} />}
            value={
              <>
                Address
                <Link sx={{ lineHeight: 0 }}>
                  <Iconify icon={launchIcon} sx={{ ml: 1, width: 18, height: 18 }} />
                </Link>
              </>
            }
            sx={{ typography: 'subtitle2', mb: 0.5 }}
          />
          <Typography variant="body2">{address}</Typography>
        </Stack>

        <Stack spacing={0.5}>
          <TextIconLabel
            icon={<Iconify icon={mobileIcon} sx={{ mr: 1, width: 24, height: 24 }} />}
            value="Phone"
            sx={{ typography: 'subtitle2', mb: 0.5 }}
          />
          <Typography variant="body2">{phoneNumber}</Typography>
        </Stack>

        <Stack spacing={0.5}>
          <TextIconLabel
            icon={<Iconify icon={emailIcon} sx={{ mr: 1, width: 24, height: 24 }} />}
            value="Email"
            sx={{ typography: 'subtitle2', mb: 0.5 }}
          />
          <Typography variant="body2">{email}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}
