import { m } from 'framer-motion';
import { useState } from 'react';
// icons
import addIcon from '@iconify/icons-carbon/add';
import subtractIcon from '@iconify/icons-carbon/subtract';
// @mui
import { styled } from '@mui/material/styles';
import {
  Box,
  Grid,
  Button,
  Accordion,
  Container,
  Typography,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import { Pattern01 } from '../../assets';
// components
import { Iconify } from '../../components';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const CONTENTS = [
  {
    question: `What's in the product packages?`,
    answer: `Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,`,
  },
  { question: 'How can I upgrade my product plan?', answer: 'title' },
  { question: 'Are design assets (Figma, Sketch, Adobe XD) included?', answer: 'title' },
  { question: 'Does this product support TypeScript?', answer: 'title' },
  { question: 'Can I use this template in commercial projects like a SaaS?', answer: 'title' },
  { question: 'How can I request support?', answer: 'title' },
];

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

export default function HomeFAQs() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeExpanded =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <RootStyle>
      <Container>
        <Grid container spacing={{ md: 3 }} justifyContent="center">
          <Grid item xs={12} md={8}>
            <MotionViewport>
              <m.div variants={varFade().in}>
                <Typography variant="h2" sx={{ textAlign: 'center' }}>
                  Frequently Asked Questions
                </Typography>
              </m.div>

              <Box sx={{ my: { xs: 8, md: 10 } }}>
                {CONTENTS.map((faq) => (
                  <m.div key={faq.question} variants={varFade().in}>
                    <Accordion
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
                  </m.div>
                ))}
              </Box>
            </MotionViewport>

            <Box
              component={MotionViewport}
              sx={{
                borderWidth: 1,
                borderRadius: 3,
                textAlign: 'center',
                borderStyle: 'dashed',
                borderColor: 'grey.50032',
                px: { xs: 3, md: 5 },
                py: { xs: 6, md: 8 },
              }}
            >
              <m.div variants={varFade().inUp}>
                <Typography variant="h3">Still Have Questions?</Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
                  Please describe your case to receive the most accurate advice.
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Button
                  size="large"
                  color="inherit"
                  variant="contained"
                  href="mailto:support@minimals.cc?subject=[Feedback] from Customer"
                >
                  Contact us
                </Button>
              </m.div>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Pattern01
        sx={{
          top: 80,
          left: 0,
          right: 0,
          zIndex: -1,
          maxWidth: 600,
          maxHeight: 600,
          mx: 'auto',
          display: { xs: 'none', sm: 'block' },
        }}
      />
    </RootStyle>
  );
}
