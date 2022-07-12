// ----------------------------------------------------------------------

export const _paymentMethods = [
  {
    value: 'paypal',
    label: 'Pay with Paypal',
    caption: 'You will be redirected to PayPal website to complete your purchase securely.',
    icons: ['https://zone-assets-api.vercel.app/assets/icons/payment/ic_paypal.svg'],
  },
  {
    value: 'credit_card',
    label: 'Credit / Debit Card',
    caption: 'We support Mastercard, Visa, Discover and Stripe.',
    icons: [
      'https://zone-assets-api.vercel.app/assets/icons/payment/ic_mastercard.svg',
      'https://zone-assets-api.vercel.app/assets/icons/payment/ic_visa.svg',
    ],
  },
];
