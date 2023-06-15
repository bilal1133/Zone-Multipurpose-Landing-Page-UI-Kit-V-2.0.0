import { Suspense, lazy, ElementType } from 'react';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

// MARKETING
export const MarketingAboutPage = Loadable(
  lazy(() => import('../pages/marketing/MarketingAboutPage'))
);
export const MarketingBlogPage = Loadable(
  lazy(() => import('../pages/marketing/MarketingBlogPage'))
);
export const MarketingCaseStudiesPage = Loadable(
  lazy(() => import('../pages/marketing/MarketingCaseStudiesPage'))
);
export const MarketingCaseStudyPage = Loadable(
  lazy(() => import('../pages/marketing/MarketingCaseStudyPage'))
);
export const MarketingContactPage = Loadable(
  lazy(() => import('../pages/marketing/MarketingContactPage'))
);
export const MarketingLandingPage = Loadable(
  lazy(() => import('../pages/marketing/MarketingLandingPage'))
);
export const MarketingPostPage = Loadable(
  lazy(() => import('../pages/marketing/MarketingPostPage'))
);
export const MarketingServicesPage = Loadable(
  lazy(() => import('../pages/marketing/MarketingServicesPage'))
);

// TRAVEL
export const TravelAboutPage = Loadable(lazy(() => import('../pages/travel/TravelAboutPage')));
export const TravelBlogPage = Loadable(lazy(() => import('../pages/travel/TravelBlogPage')));
export const TravelCheckoutPage = Loadable(
  lazy(() => import('../pages/travel/TravelCheckoutPage'))
);
export const TravelContactPage = Loadable(lazy(() => import('../pages/travel/TravelContactPage')));
export const TravelLandingPage = Loadable(lazy(() => import('../pages/travel/TravelLandingPage')));
export const TravelOrderCompletedPage = Loadable(
  lazy(() => import('../pages/travel/TravelOrderCompletedPage'))
);
export const TravelPostPage = Loadable(lazy(() => import('../pages/travel/TravelPostPage')));
export const TravelTourPage = Loadable(lazy(() => import('../pages/travel/TravelTourPage')));
export const TravelToursPage = Loadable(lazy(() => import('../pages/travel/TravelToursPage')));

// CAREER
export const CareerAboutPage = Loadable(lazy(() => import('../pages/career/CareerAboutPage')));
export const CareerBlogPage = Loadable(lazy(() => import('../pages/career/CareerBlogPage')));
export const CareerContactPage = Loadable(lazy(() => import('../pages/career/CareerContactPage')));
export const CareerJobPage = Loadable(lazy(() => import('../pages/career/CareerJobPage')));
export const CareerJobsPage = Loadable(lazy(() => import('../pages/career/CareerJobsPage')));
export const CareerLandingPage = Loadable(lazy(() => import('../pages/career/CareerLandingPage')));
export const CareerPostPage = Loadable(lazy(() => import('../pages/career/CareerPostPage')));

// E-LEARNING
export const ElearningAboutPage = Loadable(
  lazy(() => import('../pages/e-learning/ElearningAboutPage'))
);
export const ElearningBlogPage = Loadable(
  lazy(() => import('../pages/e-learning/ElearningBlogPage'))
);
export const ElearningContactPage = Loadable(
  lazy(() => import('../pages/e-learning/ElearningContactPage'))
);
export const ElearningCoursePage = Loadable(
  lazy(() => import('../pages/e-learning/ElearningCoursePage'))
);
export const ElearningCoursesPage = Loadable(
  lazy(() => import('../pages/e-learning/ElearningCoursesPage'))
);
export const ElearningLandingPage = Loadable(
  lazy(() => import('../pages/e-learning/ElearningLandingPage'))
);
export const ElearningPostPage = Loadable(
  lazy(() => import('../pages/e-learning/ElearningPostPage'))
);

// E-COMMERCE
export const EcommerceCartPage = Loadable(
  lazy(() => import('../pages/e-commerce/EcommerceCartPage'))
);
export const EcommerceCheckoutPage = Loadable(
  lazy(() => import('../pages/e-commerce/EcommerceCheckoutPage'))
);
export const EcommerceComparePage = Loadable(
  lazy(() => import('../pages/e-commerce/EcommerceComparePage'))
);
export const EcommerceLandingPage = Loadable(
  lazy(() => import('../pages/e-commerce/EcommerceLandingPage'))
);
export const EcommerceOrderCompletedPage = Loadable(
  lazy(() => import('../pages/e-commerce/EcommerceOrderCompletedPage'))
);
export const EcommerceProductPage = Loadable(
  lazy(() => import('../pages/e-commerce/EcommerceProductPage'))
);
export const EcommerceProductsPage = Loadable(
  lazy(() => import('../pages/e-commerce/EcommerceProductsPage'))
);
export const EcommerceWishlistPage = Loadable(
  lazy(() => import('../pages/e-commerce/EcommerceWishlistPage'))
);
export const EcommerceAccountOrdersPage = Loadable(
  lazy(() => import('../pages/e-commerce/account/EcommerceAccountOrdersPage'))
);
export const EcommerceAccountPaymentPage = Loadable(
  lazy(() => import('../pages/e-commerce/account/EcommerceAccountPaymentPage'))
);
export const EcommerceAccountPersonalPage = Loadable(
  lazy(() => import('../pages/e-commerce/account/EcommerceAccountPersonalPage'))
);
export const EcommerceAccountVouchersPage = Loadable(
  lazy(() => import('../pages/e-commerce/account/EcommerceAccountVouchersPage'))
);
export const EcommerceAccountWishlistPage = Loadable(
  lazy(() => import('../pages/e-commerce/account/EcommerceAccountWishlistPage'))
);

// AUTH
export const LoginBackgroundPage = Loadable(
  lazy(() => import('../pages/auth/LoginBackgroundPage'))
);
export const LoginCoverPage = Loadable(lazy(() => import('../pages/auth/LoginCoverPage')));
export const LoginIllustrationPage = Loadable(
  lazy(() => import('../pages/auth/LoginIllustrationPage'))
);
export const RegisterBackgroundPage = Loadable(
  lazy(() => import('../pages/auth/RegisterBackgroundPage'))
);
export const RegisterCoverPage = Loadable(lazy(() => import('../pages/auth/RegisterCoverPage')));
export const RegisterIllustrationPage = Loadable(
  lazy(() => import('../pages/auth/RegisterIllustrationPage'))
);
export const ResetPasswordPage = Loadable(lazy(() => import('../pages/auth/ResetPasswordPage')));
export const VerifyCodePage = Loadable(lazy(() => import('../pages/auth/VerifyCodePage')));

// COMMON
export const ComingSoonPage = Loadable(lazy(() => import('../pages/ComingSoonPage')));
export const HomePage = Loadable(lazy(() => import('../pages/HomePage')));
export const MaintenancePage = Loadable(lazy(() => import('../pages/MaintenancePage')));
export const Page404 = Loadable(lazy(() => import('../pages/Page404')));
export const Page500 = Loadable(lazy(() => import('../pages/Page500')));
export const PaymentPage = Loadable(lazy(() => import('../pages/PaymentPage')));
export const Pricing01Page = Loadable(lazy(() => import('../pages/Pricing01Page')));
export const Pricing02Page = Loadable(lazy(() => import('../pages/Pricing02Page')));
export const SupportPage = Loadable(lazy(() => import('../pages/SupportPage')));

// COMPONENTS
export const ComponentsPage = Loadable(lazy(() => import('../pages/components/ComponentsPage')));
export const DemoAnimatePage = Loadable(lazy(() => import('../pages/components/DemoAnimatePage')));
export const DemoCarouselsPage = Loadable(
  lazy(() => import('../pages/components/DemoCarouselsPage'))
);
export const DemoCountUpPage = Loadable(lazy(() => import('../pages/components/DemoCountUpPage')));
export const DemoFormValidationPage = Loadable(
  lazy(() => import('../pages/components/DemoFormValidationPage'))
);
export const DemoIconsPage = Loadable(lazy(() => import('../pages/components/DemoIconsPage')));
export const DemoImagePage = Loadable(lazy(() => import('../pages/components/DemoImagePage')));
export const DemoLabelPage = Loadable(lazy(() => import('../pages/components/DemoLabelPage')));
export const DemoLightboxPage = Loadable(
  lazy(() => import('../pages/components/DemoLightboxPage'))
);
export const DemoMarkdownPage = Loadable(
  lazy(() => import('../pages/components/DemoMarkdownPage'))
);
export const DemoMegaMenuPage = Loadable(
  lazy(() => import('../pages/components/DemoMegaMenuPage'))
);
export const DemoNavigationBarPage = Loadable(
  lazy(() => import('../pages/components/DemoNavigationBarPage'))
);
export const DemoPlayerPage = Loadable(lazy(() => import('../pages/components/DemoPlayerPage')));
export const DemoScrollbarPage = Loadable(
  lazy(() => import('../pages/components/DemoScrollbarPage'))
);
export const DemoTextMaxLinePage = Loadable(
  lazy(() => import('../pages/components/DemoTextMaxLinePage'))
);
