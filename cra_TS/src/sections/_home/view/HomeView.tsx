// _mock
import { _pricingHome } from 'src/_mock';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import PricingHome from '../../pricing/home';
import {
  HomeHero,
  HomeFAQs,
  HomeNewStart,
  HomeForDesigner,
  HomeCombination,
  HomeAdvertisement,
  HomeFeatureHighlights,
  HomeFlexibleComponents,
} from '../components';

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <>
      <ScrollProgress />

      <HomeHero />

      <HomeNewStart />

      <HomeFlexibleComponents />

      <HomeFeatureHighlights />

      <HomeForDesigner />

      <PricingHome plans={_pricingHome} />

      <HomeFAQs />

      <HomeCombination />

      <HomeAdvertisement />
    </>
  );
}
