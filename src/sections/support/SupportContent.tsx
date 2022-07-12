import { useState } from 'react';
// icons
import chevronDown from '@iconify/icons-carbon/chevron-down';
import chevronRight from '@iconify/icons-carbon/chevron-right';
// @mui
import { styled } from '@mui/material/styles';
import { Accordion, AccordionSummary, Typography, Stack, AccordionDetails } from '@mui/material';
// components
import { Iconify } from '../../components';

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

type SupportContentProps = {
  contents: {
    id: string;
    question: string;
    answer: string;
  }[];
};

export default function SupportContent({ contents }: SupportContentProps) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeExpanded =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <RootStyle>
      {contents.map((faq) => {
        const { id, question, answer } = faq;

        return (
          <Accordion
            key={id}
            expanded={expanded === question}
            onChange={handleChangeExpanded(question)}
          >
            <AccordionSummary
              sx={{
                '& .MuiAccordionSummary-content': {
                  my: 4,
                  ...(expanded === question && {
                    mb: 2.5,
                  }),
                },
              }}
            >
              <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                {question}
              </Typography>
              <Iconify
                icon={expanded === question ? chevronDown : chevronRight}
                sx={{ width: 20, height: 20 }}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'text.secondary' }}>{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </RootStyle>
  );
}
