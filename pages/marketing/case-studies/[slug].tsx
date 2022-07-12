import { ReactElement } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Grid, Box } from '@mui/material';
// routes
import Routes from '../../../src/routes';
// utils
import {
  getCaseStudyData,
  getAllCaseStudies,
  getCaseStudiesSlugs,
} from '../../../src/utils/get-mardown/marketing/case-studies';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../src/config';
// @types
import { CaseStudyProps } from '../../../src/@types/marketing';
// _data
import { _testimonials } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, Image, Markdown, Breadcrumbs } from '../../../src/components';
// sections
import { NewsletterMarketing } from '../../../src/sections/newsletter';
import { TestimonialsMarketing } from '../../../src/sections/testimonials';
import {
  MarketingFreeSEO,
  MarketingCaseStudySummary,
  MarketingCaseStudyGallery,
  MarketingCaseStudiesSimilar,
} from '../../../src/sections/@marketing';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

type Props = {
  caseStudy: CaseStudyProps;
  caseStudies: CaseStudyProps[];
};

export default function MarketingCaseStudyPage({ caseStudies, caseStudy }: Props) {
  const { frontmatter, content } = caseStudy;

  const { title, coverImg, heroImg, galleryImgs } = frontmatter;

  return (
    <Page
      title={`${title} - Case Study`}
      meta={
        <>
          <meta property="og:image" content={coverImg} />
        </>
      }
    >
      <RootStyle>
        <Container>
          <Box
            sx={{
              pt: { xs: 5, md: 10 },
            }}
          >
            <Image alt="hero" src={heroImg} ratio="16/9" sx={{ borderRadius: 2 }} />
          </Box>

          <Breadcrumbs
            sx={{ my: { xs: 5, md: 10 } }}
            links={[
              { name: 'Home', href: '/' },
              { name: 'Case Studies', href: Routes.marketing.caseStudies },
              { name: title },
            ]}
          />

          <Grid
            container
            spacing={{ md: 8 }}
            direction={{ md: 'row-reverse' }}
            sx={{
              pb: { xs: 10, md: 15 },
            }}
          >
            <Grid item xs={12} md={4}>
              <MarketingCaseStudySummary frontmatter={frontmatter} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Markdown content={content} />
              <MarketingCaseStudyGallery images={galleryImgs} />
            </Grid>
          </Grid>
        </Container>

        <TestimonialsMarketing testimonials={_testimonials} />

        <MarketingCaseStudiesSimilar caseStudies={caseStudies.slice(0, 3)} />

        <MarketingFreeSEO />

        <NewsletterMarketing />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

MarketingCaseStudyPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const caseStudy = getCaseStudyData(params.slug);

  return {
    props: {
      caseStudies: getAllCaseStudies(),
      caseStudy: {
        ...caseStudy,
        content: await serialize(caseStudy.content),
      },
    },
  };
}

export async function getStaticPaths() {
  const files = getCaseStudiesSlugs();

  return {
    paths: files,
    fallback: false,
  };
}
