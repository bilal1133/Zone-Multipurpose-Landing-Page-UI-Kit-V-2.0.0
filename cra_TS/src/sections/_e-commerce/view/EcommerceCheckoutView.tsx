import { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
// @mui
import {
  Box,
  Stack,
  Button,
  Divider,
  Collapse,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// _mock
import { _products } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
import FormProvider from 'src/components/hook-form';
//
import { EcommerceHeader } from '../layout';
import {
  EcommerceCheckoutNewCardForm,
  EcommerceCheckoutOrderSummary,
  EcommerceCheckoutPaymentMethod,
  EcommerceCheckoutShippingMethod,
  EcommerceCheckoutPersonalDetails,
  EcommerceCheckoutShippingDetails,
} from '../checkout';

// ----------------------------------------------------------------------

const SHIPPING_OPTIONS = [
  {
    label: 'Free',
    value: 'free',
    description: '5-7 Days delivery',
    price: 0,
  },
  {
    label: 'Standard',
    value: 'standard',
    description: '3-5 Days delivery',
    price: 10,
  },
  {
    label: 'Express',
    value: 'express',
    description: '2-3 Days delivery',
    price: 20,
  },
];

const PAYMENT_OPTIONS = [
  {
    label: 'Paypal',
    value: 'paypal',
    description: '**** **** **** 1234',
  },
  {
    label: 'MasterCard',
    value: 'mastercard',
    description: '**** **** **** 3456',
  },
  {
    label: 'Visa',
    value: 'visa',
    description: '**** **** **** 6789',
  },
];

// ----------------------------------------------------------------------

export default function EcommerceCheckoutView() {
  const navigate = useNavigate();

  const [openNewForm, setOpenNewForm] = useState(false);

  const EcommerceCheckoutSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    emailAddress: Yup.string().required('Email address is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    streetAddress: Yup.string().required('Street address is required'),
    city: Yup.string().required('City is required'),
    zipCode: Yup.string().required('Zip code is required'),
  });

  const defaultValues = {
    firstName: 'Jayvion',
    lastName: 'Simon',
    emailAddress: 'nannie_abernathy70@yahoo.com',
    phoneNumber: '365-374-4961',
    password: '',
    confirmPassword: '',
    streetAddress: '',
    city: '',
    country: 'United States',
    zipCode: '',
    shipping: 'free',
    paymentMethods: 'mastercard',
    newCard: {
      cardNumber: '',
      cardHolder: '',
      expirationDate: '',
      ccv: '',
    },
  };

  const methods = useForm<typeof defaultValues>({
    resolver: yupResolver(EcommerceCheckoutSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: typeof defaultValues) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      navigate(paths.eCommerce.orderCompleted);
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <EcommerceHeader />

      <Container
        sx={{
          overflow: 'hidden',
          pt: 5,
          pb: { xs: 5, md: 10 },
        }}
      >
        <Typography variant="h3" sx={{ mb: 5 }}>
          Checkout
        </Typography>

        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={{ xs: 5, md: 8 }}>
            <Grid xs={12} md={8}>
              <Stack spacing={5} divider={<Divider sx={{ borderStyle: 'dashed' }} />}>
                <div>
                  <StepLabel title="Personal Details" step="1" />
                  <EcommerceCheckoutPersonalDetails />
                </div>

                <div>
                  <StepLabel title="Shipping Details" step="2" />
                  <EcommerceCheckoutShippingDetails />
                </div>

                <div>
                  <StepLabel title="Shipping Method" step="3" />
                  <EcommerceCheckoutShippingMethod options={SHIPPING_OPTIONS} />
                </div>

                <div>
                  <StepLabel title="Payment Method" step="4" />

                  <EcommerceCheckoutPaymentMethod options={PAYMENT_OPTIONS} />

                  <Divider sx={{ my: 3 }} />

                  <Stack alignItems="flex-end">
                    <Button
                      color={openNewForm ? 'error' : 'inherit'}
                      startIcon={
                        <Iconify icon={openNewForm ? 'carbon:close' : 'carbon:add'} width={24} />
                      }
                      onClick={() => setOpenNewForm(!openNewForm)}
                    >
                      {openNewForm ? 'Cancel' : 'Add New Card'}
                    </Button>
                  </Stack>

                  <Collapse in={openNewForm} unmountOnExit>
                    <EcommerceCheckoutNewCardForm />
                  </Collapse>
                </div>
              </Stack>
            </Grid>

            <Grid xs={12} md={4}>
              <EcommerceCheckoutOrderSummary
                tax={7}
                total={357.09}
                subtotal={89.09}
                shipping={55.47}
                discount={16.17}
                products={_products.slice(0, 3)}
                loading={isSubmitting}
              />
            </Grid>
          </Grid>
        </FormProvider>
      </Container>
    </>
  );
}

// ----------------------------------------------------------------------

type StepLabelProps = {
  step: string;
  title: string;
};

function StepLabel({ step, title }: StepLabelProps) {
  return (
    <Stack direction="row" alignItems="center" sx={{ mb: 3, typography: 'h6' }}>
      <Box
        sx={{
          mr: 1.5,
          width: 28,
          height: 28,
          flexShrink: 0,
          display: 'flex',
          typography: 'h6',
          borderRadius: '50%',
          alignItems: 'center',
          bgcolor: 'primary.main',
          justifyContent: 'center',
          color: 'primary.contrastText',
        }}
      >
        {step}
      </Box>
      {title}
    </Stack>
  );
}
