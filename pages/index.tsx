import { ReactElement } from 'react';
// _data
import { _pricingHome } from '../_data/mock';
// layouts
import Layout from '../src/layouts';
// components
import { Page } from '../src/components';
// sections
import { PricingHome } from '../src/sections/pricing';
import {
  HomeHero,
  // HomeFAQs,
  HomeNewStart,
  // HomeDemoPages,
  HomeForDesigner,
  HomeCombination,
  HomeAdvertisement,
  HomeFeatureHighlights,
  HomeFlexibleComponents,
} from '../src/sections/home';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="The starting point for your next project">
      <HomeHero />

      <HomeNewStart />

      <HomeFlexibleComponents />

      <HomeFeatureHighlights />

      <HomeForDesigner />

      <PricingHome plans={_pricingHome} />

      <HomeCombination />

      <HomeAdvertisement />
    </Page>
  );
}

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout simpleFooter>{page}</Layout>;
};
