// ----------------------------------------------------------------------

export type IPricingHomeProps = {
  license: string;
  price: string;
  icons: string[];
  commons: string[];
  options: {
    title: string;
    disabled: boolean;
  }[];
};

export type IPricingMarketingProps = {
  license: string;
  price: string;
  caption: string;
  icon: string;
  options: string[];
};

export type IPricing01Props = {
  license: string;
  price: string;
  icon: string;
  options: {
    title: string;
    disabled: boolean;
  }[];
};

export type IPricing02Props = {
  license: string;
  price: string;
  caption?: string;
  icon: string;
  options: {
    title: string;
    disabled: boolean;
    tootip: string;
  }[];
};
