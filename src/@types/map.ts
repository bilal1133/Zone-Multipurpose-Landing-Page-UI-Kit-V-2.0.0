// ----------------------------------------------------------------------

export type OfficeMapProps = {
  country: string;
  address: string;
  photo: string;
  email: string;
  phoneNumber: string;
  latlng: number[];
};

export type CountriesProps = {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean | undefined;
};
