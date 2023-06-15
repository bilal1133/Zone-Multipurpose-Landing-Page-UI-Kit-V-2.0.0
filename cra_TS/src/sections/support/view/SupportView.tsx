import { useState, useEffect } from 'react';
// @mui
import { Container, Stack, Typography, IconButton } from '@mui/material';
// _mock
import { _faqsSupport } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
//
import { SupportHero, SupportNav, SupportContent } from '../components';

// ----------------------------------------------------------------------

const TOPICS = [
  {
    title: 'Account',
    icon: '/assets/icons/faq/ic_faq_account.svg',
    content: <SupportContent contents={_faqsSupport} />,
  },
  {
    title: 'Payment',
    icon: '/assets/icons/faq/ic_faq_payment.svg',
    content: <SupportContent contents={_faqsSupport} />,
  },
  {
    title: 'Delivery',
    icon: '/assets/icons/faq/ic_faq_delivery.svg',
    content: <SupportContent contents={_faqsSupport} />,
  },
  {
    title: 'Product',
    icon: '/assets/icons/faq/ic_faq_package.svg',
    content: <SupportContent contents={_faqsSupport} />,
  },
  {
    title: 'Return & Refund',
    icon: '/assets/icons/faq/ic_faq_refund.svg',
    content: <SupportContent contents={_faqsSupport} />,
  },
  {
    title: 'Assurances',
    icon: '/assets/icons/faq/ic_faq_assurances.svg',
    content: <SupportContent contents={_faqsSupport} />,
  },
];

// ----------------------------------------------------------------------

export default function SupportView() {
  const [topic, setTopic] = useState('Payment');

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleChangeTopic = (event: React.SyntheticEvent, newValue: string) => {
    setTopic(newValue);
  };

  useEffect(() => {
    if (mobileOpen) {
      setMobileOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic]);

  return (
    <>
      <SupportHero />

      <Stack
        alignItems="flex-end"
        sx={{
          py: 1.5,
          px: 2.5,
          display: { md: 'none' },
          borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      >
        <IconButton onClick={() => setMobileOpen(true)}>
          <Iconify icon="carbon:menu" />
        </IconButton>
      </Stack>

      <Container>
        <Typography variant="h3" sx={{ py: { xs: 3, md: 10 } }}>
          Frequently Asked Questions
        </Typography>

        <Stack direction="row" sx={{ pb: { xs: 10, md: 15 } }}>
          <SupportNav
            sidebarConfig={TOPICS}
            topic={topic}
            isOpenSidebar={mobileOpen}
            onChangeTopic={handleChangeTopic}
            onCloseSidebar={() => setMobileOpen(false)}
          />

          {TOPICS.map((item) => item.title === topic && <div key={item.title}>{item.content}</div>)}
        </Stack>
      </Container>
    </>
  );
}
