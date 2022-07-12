import { useState } from 'react';
// icons
import addIcon from '@iconify/icons-carbon/add';
import subtractIcon from '@iconify/icons-carbon/subtract';
// @mui
import { styled } from '@mui/material/styles';
import {
  Grid,
  Stack,
  Container,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
// _data
import { _faqs } from '../../../_data/mock';
// components
import { Iconify, Image } from '../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0, 15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingFaqs() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeExpanded =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6} lg={6}>
            <Stack spacing={2} sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="overline" color="text.disabled">
                FAQS
              </Typography>
              <Typography variant="h2">Frequently Asked Questions</Typography>
            </Stack>

            {_faqs.map((faq) => (
              <Accordion
                key={faq.id}
                expanded={expanded === faq.question}
                onChange={handleChangeExpanded(faq.question)}
              >
                <AccordionSummary>
                  <Typography variant="h5" sx={{ flexGrow: 1 }}>
                    {faq.question}
                  </Typography>
                  <Iconify
                    icon={expanded === faq.question ? subtractIcon : addIcon}
                    sx={{ width: 24, height: 24 }}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={5}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Image
              alt="faqs"
              src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_faqs.svg"
            />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
