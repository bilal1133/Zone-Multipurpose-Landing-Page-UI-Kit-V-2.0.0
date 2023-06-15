// @mui
import { Container, Typography, Stack } from '@mui/material';
// _mock
import { _caseStudies, _blogMarketingPosts, _testimonials } from 'src/_mock';
//
import NewsletterMarketing from '../../newsletter/marketing';
import { BlogMarketingLatestPosts } from '../../blog/marketing';
import TestimonialMarketing from '../../testimonial/marketing';
import { MarketingLandingFreeSEO } from '../landing';
import { MarketingCaseStudyList } from '../case-study/list';

// ----------------------------------------------------------------------

export default function MarketingCaseStudiesView() {
  return (
    <>
      <Container>
        <Stack
          spacing={3}
          sx={{
            py: 5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">Our Case Studies</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Nullam tincidunt adipiscing enim.
            <br /> Mauris sollicitudin fermentum libero.
          </Typography>
        </Stack>

        <MarketingCaseStudyList caseStudies={_caseStudies} />
      </Container>

      <TestimonialMarketing testimonials={_testimonials} />

      <BlogMarketingLatestPosts posts={_blogMarketingPosts.slice(0, 4)} />

      <MarketingLandingFreeSEO />

      <NewsletterMarketing />
    </>
  );
}
