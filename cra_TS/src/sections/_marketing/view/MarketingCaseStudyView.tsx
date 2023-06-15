// @mui
import { Container, Unstable_Grid2 as Grid } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// _mock
import { _caseStudies, _testimonials } from 'src/_mock';
// components
import Image from 'src/components/image';
import Markdown from 'src/components/markdown';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import NewsletterMarketing from '../../newsletter/marketing';
import TestimonialMarketing from '../../testimonial/marketing';
import { MarketingLandingFreeSEO } from '../landing';
import { MarketingCaseStudyListSimilar } from '../case-study/list';
import {
  MarketingCaseStudyDetailsSummary,
  MarketingCaseStudyDetailsGallery,
} from '../case-study/details';

// ----------------------------------------------------------------------

const _mockCaseStudy = _caseStudies[0];

export default function MarketingCaseStudyView() {
  return (
    <>
      <Container
        sx={{
          overflow: 'hidden',
          pt: 5,
          pb: { xs: 10, md: 15 },
        }}
      >
        <Image alt="hero" src={_mockCaseStudy.heroImg} ratio="16/9" sx={{ borderRadius: 2 }} />

        <CustomBreadcrumbs
          sx={{ my: 5 }}
          links={[
            { name: 'Home', href: '/' },
            { name: 'Case Studies', href: paths.marketing.caseStudies },
            { name: _mockCaseStudy.title },
          ]}
        />

        <Grid container spacing={{ xs: 5, md: 8 }} direction={{ md: 'row-reverse' }}>
          <Grid xs={12} md={4}>
            <MarketingCaseStudyDetailsSummary caseStudy={_caseStudies[0]} />
          </Grid>

          <Grid xs={12} md={8}>
            <Markdown content={_mockCaseStudy.content} />
            <MarketingCaseStudyDetailsGallery images={_mockCaseStudy.galleryImgs} />
          </Grid>
        </Grid>
      </Container>

      <TestimonialMarketing testimonials={_testimonials} />

      <MarketingCaseStudyListSimilar caseStudies={_caseStudies.slice(0, 3)} />

      <MarketingLandingFreeSEO />

      <NewsletterMarketing />
    </>
  );
}
