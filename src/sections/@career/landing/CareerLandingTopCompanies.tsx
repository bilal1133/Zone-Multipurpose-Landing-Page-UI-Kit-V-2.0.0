import { useRef } from 'react';
import Slider from 'react-slick';
// next
import NextLink from 'next/link';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Typography, Stack, Container, Box } from '@mui/material';
// routes
import Routes from '../../../routes';
// @types
import { JobByCompanyProps } from '../../../@types/career';
// components
import { Image, TextMaxLine, CarouselArrows } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  overflow: 'hidden',
  paddingTop: theme.spacing(8),
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(15),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  companies: JobByCompanyProps[];
};

export default function CareerLandingTopCompanies({ companies }: Props) {
  const theme = useTheme();

  const carouselRef = useRef<Slider | null>(null);

  const handlePrevious = () => {
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
    <RootStyle>
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Top Companies
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <CarouselArrows
            onNext={handleNext}
            onPrevious={handlePrevious}
            sx={{
              '& .arrow.left': { left: { lg: -40 } },
              '& .arrow.right': { right: { lg: -40 } },
            }}
          >
            <Slider ref={carouselRef} {...carouselSettings}>
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
            </Slider>
          </CarouselArrows>
        </Box>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type CompanyItemProps = {
  company: JobByCompanyProps;
};

function CompanyItem({ company }: CompanyItemProps) {
  return (
    <NextLink href={Routes.career.jobs} passHref>
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
        <Typography variant="body3" sx={{ color: 'text.disabled', mt: 2.5, mb: 0.5 }}>
          {company.totalJobs} jobs
        </Typography>
        <TextMaxLine variant="subtitle2" persistent>
          {company.companyName}
        </TextMaxLine>
      </Box>
    </NextLink>
  );
}
