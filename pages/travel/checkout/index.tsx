import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useState, ReactElement } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
// next
import { useRouter } from 'next/router';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Stack, Divider, Container, Typography, TypographyProps } from '@mui/material';
// hooks
import { useRequest } from '../../../src/hooks';
// routes
import Routes from '../../../src/routes';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../src/config';
// @types
import { CheckoutFormValuesProps } from '../../../src/@types/travel';
// _data
import { _tours } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen } from '../../../src/components';
//
import {
  TravelCheckOutSummary,
  TravelCheckOutPaymentForm,
  TravelCheckOutShippingForm,
} from '../../../src/sections/@travel';

// ----------------------------------------------------------------------

interface LabelStepStyleProps extends TypographyProps {
  step: string;
}

const LabelStepStyle = styled((props: LabelStepStyleProps) => (
  <Typography
    variant="h4"
    {...props}
    sx={{
      mb: 3,
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Box
      sx={{
        mr: 1.5,
        width: 28,
        height: 28,
        display: 'flex',
        typography: 'h6',
        borderRadius: '50%',
        alignItems: 'center',
        bgcolor: 'primary.main',
        justifyContent: 'center',
        color: 'primary.contrastText',
      }}
    >
      {props.step}
    </Box>
    {props.title}
  </Typography>
))({});

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

const FormSchema = Yup.object().shape({
  billingAddress: Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    fullAddress: Yup.string().required('Full address is required'),
  }),
  paymentMethods: Yup.object().shape({
    card: Yup.object().when('methods', {
      is: 'credit_card',
      then: Yup.object({
        cardNumber: Yup.string().required('Card number is required'),
        cardHolder: Yup.string().required('Card holder is required'),
        expirationDate: Yup.string().required('Expiration date is required'),
        ccv: Yup.string().required('CCV is required'),
      }),
    }),
  }),
});

export default function TravelCheckoutPage() {
  const router = useRouter();

  const [sameBilling, setSameBilling] = useState(false);

  const [departureDay, setDepartureDay] = useState<Date | null>(new Date());

  const [guests, setGuests] = useState({
    adults: 2,
    children: 1,
  });

  const handleChangeSameBilling = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSameBilling(event.target.checked);
  };

  const { data: tour, error } = useRequest(`/api/travel/tours/${_tours[0].id}`);

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CheckoutFormValuesProps>({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      billingAddress: {
        firstName: '',
        lastName: '',
        fullAddress: '',
        fullAddress2: '',
      },
      shippingAddress: {
        firstName: '',
        lastName: '',
        fullAddress: '',
        fullAddress2: '',
      },
      paymentMethods: {
        methods: 'paypal',
        card: {
          cardNumber: '',
          cardHolder: '',
          expirationDate: '',
          ccv: '',
        },
      },
    },
  });

  const onSubmit = async (data: CheckoutFormValuesProps) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
    reset();
    router.replace(Routes.travel.checkoutComplete);
  };

  if (error) {
    return <ErrorScreen />;
  }

  if (!tour) {
    return null;
  }

  return (
    <Page title="Checkout - Travel">
      <RootStyle>
        <Container
          sx={{
            mt: { xs: 8, md: 10 },
            mb: { xs: 8, md: 15 },
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={8}>
              <Grid item xs={12} md={7}>
                <Stack spacing={5}>
                  <Typography variant="h2">Confirm and Pay</Typography>

                  <Divider />

                  <section>
                    <LabelStepStyle title="Shipping Information" step="1" />
                    <TravelCheckOutShippingForm
                      control={control}
                      sameBilling={sameBilling}
                      onChangeSameBilling={handleChangeSameBilling}
                    />
                  </section>
                  <Divider />

                  <section>
                    <LabelStepStyle title="Payment Methods" step="2" />
                    <TravelCheckOutPaymentForm control={control} />
                  </section>
                </Stack>
              </Grid>

              <Grid item xs={12} md={5}>
                <TravelCheckOutSummary
                  tour={tour}
                  guests={guests}
                  setGuests={setGuests}
                  departureDay={departureDay}
                  setDepartureDay={setDepartureDay}
                  isSubmitting={isSubmitting}
                />
              </Grid>
            </Grid>
          </form>
        </Container>
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

TravelCheckoutPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
