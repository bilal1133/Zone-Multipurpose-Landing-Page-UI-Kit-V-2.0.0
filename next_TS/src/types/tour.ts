import { IAuthorProps } from './author';
import { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type ITourProps = {
  id: string;
  slug: string;
  price: number;
  heroImg: string;
  ratings: number;
  reviews: number;
  coverImg: string;
  location: string;
  duration: string;
  continent: string;
  priceSale: number;
  gallery: string[];
  favorited: boolean;
  description: string;
  languages: string[];
  highlights: string[];
  tourGuide: IAuthorProps;
  shareLinks: ISocialLinks;
  createdAt: Date | string | number;
  availableEnd: Date | string | number;
  availableStart: Date | string | number;
  program: {
    label: string;
    text: string;
  }[];
  includes: {
    label: string;
    enabled: boolean;
  }[];
};

export type ITourCheckoutProps = {
  billingAddress: {
    firstName: string;
    lastName: string;
    fullAddress: string;
    fullAddress2: string;
  };
  shippingAddress: {
    firstName: string;
    lastName: string;
    fullAddress: string;
    fullAddress2: string;
  };
  paymentMethods: {
    methods: string;
    card: {
      cardNumber: string;
      cardHolder: string;
      expirationDate: string;
      ccv: string;
    };
  };
};
