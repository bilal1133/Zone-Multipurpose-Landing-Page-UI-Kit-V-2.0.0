import { useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Typography, Container, Box, Link } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// types
import { IJobByCompanyProps } from 'src/types/job';
// components
import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
import Carousel, { CarouselArrows } from 'src/components/carousel';

// ----------------------------------------------------------------------

type Props = {
  companies: IJobByCompanyProps[];
};

export default function CareerLandingTopCompanies({ companies }: Props) {
  const theme = useTheme();

  const carouselRef = useRef<Carousel | null>(null);

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  const carouselSettings = {
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box
      sx={{
        pt: { xs: 10, md: 15 },
        overflow: 'hidden',
        bgcolor: 'background.neutral',
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Top Companies
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <CarouselArrows
            onNext={handleNext}
            onPrev={handlePrev}
            leftButtonProps={{ sx: { left: { xs: 0, md: -40 } } }}
            rightButtonProps={{ sx: { right: { xs: 0, md: -40 } } }}
          >
            <Carousel ref={carouselRef} {...carouselSettings}>
              {companies.map((company) => (
                <Box
                  key={company.id}
                  sx={{
                    px: 2,
                    py: { xs: 8, md: 10 },
                  }}
                >
                  <CompanyItem company={company} />
                </Box>
              ))}
            </Carousel>
          </CarouselArrows>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type CompanyItemProps = {
  company: IJobByCompanyProps;
};

function CompanyItem({ company }: CompanyItemProps) {
  return (
    <Link component={RouterLink} to={paths.career.jobs} color="inherit" underline="none">
      <Box
        sx={{
          py: 5,
          px: 3,
          borderRadius: 2,
          cursor: 'pointer',
          textAlign: 'center',
          position: 'relative',
          transition: (theme) =>
            theme.transitions.create('all', {
              duration: theme.transitions.duration.enteringScreen,
            }),
          '&:hover': {
            bgcolor: 'background.paper',
            boxShadow: (theme) => theme.customShadows.z24,
          },
        }}
      >
        <Image
          alt={company.companyName}
          src={company.companyLogo}
          sx={{
            mx: 'auto',
            width: 56,
            height: 56,
            borderRadius: 1,
          }}
        />
        <Typography variant="body2" sx={{ color: 'text.disabled', mt: 2.5, mb: 0.5 }}>
          {company.totalJobs} jobs
        </Typography>

        <TextMaxLine variant="subtitle2" persistent>
          {company.companyName}
        </TextMaxLine>
      </Box>
    </Link>
  );
}
