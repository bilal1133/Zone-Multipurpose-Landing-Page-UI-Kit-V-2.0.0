// ----------------------------------------------------------------------

export type PricingHomeProps = {
  license: string;
  price: string;
  icons: string[];
  commons: string[];
  options: {
    title: string;
    disabled: boolean;
  }[];
};

export type PricingMarketingProps = {
  license: string;
  price: string;
  caption: string;
  icon: string;
  options: string[];
};

export type Pricing01Props = {
  license: string;
  price: string;
  icon: string;
  options: {
    title: string;
    disabled: boolean;
  }[];
};

export type Pricing02Props = {
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
