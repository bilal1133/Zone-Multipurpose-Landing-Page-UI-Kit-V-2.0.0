// ----------------------------------------------------------------------

export type IProductItemHeroProps = {
  title: string;
  caption: string;
  coverImg: string;
  label: string;
};

export type IProductItemCompareProps = {
  id: string;
  name: string;
  price: number;
  coverImg: string;
  rating: number;
  details: string[];
};

export type IProductItemProps = {
  id: string;
  name: string;
  label: string;
  caption: string;
  description: string;
  coverImg: string;
  category: string;
  sold: number;
  price: number;
  rating: number;
  priceSale: number;
  inStock: number;
  review: number;
  images: string[];
};

export type IProductFiltersProps = {
  filterTag: string[];
  filterStock: boolean;
  filterBrand: string[];
  filterShipping: string[];
  filterCategories: string;
  filterRating: string | null;
  filterPrice: {
    start: number;
    end: number;
  };
};

export type IProductOrderProps = {
  id: string;
  item: string;
  price: number;
  status: string;
  orderId: string;
  deliveryDate: Date | string | number;
};
