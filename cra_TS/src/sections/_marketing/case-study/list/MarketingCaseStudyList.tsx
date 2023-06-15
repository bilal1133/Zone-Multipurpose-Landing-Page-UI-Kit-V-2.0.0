import { useState } from 'react';
// @mui
import { Pagination, Tabs, Tab, Box } from '@mui/material';
// types
import { ICaseStudyProps } from 'src/types/case-study';
//
import MarketingCaseStudyItem from '../item';

// ----------------------------------------------------------------------

type Props = {
  caseStudies: ICaseStudyProps[];
};

export default function MarketingCaseStudyList({ caseStudies }: Props) {
  const [tab, setTab] = useState('All');

  const getCategories = caseStudies.map((project) => project.category);

  const categories = ['All', ...Array.from(new Set(getCategories))];

  const filtered = applyFilter(caseStudies, tab);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <>
      <Tabs
        value={tab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleChangeTab}
      >
        {categories.map((category) => (
          <Tab key={category} value={category} label={category} />
        ))}
      </Tabs>

      <Box
        sx={{
          pt: 5,
          pb: 10,
          gap: 4,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {filtered.map((project) => (
          <MarketingCaseStudyItem key={project.id} project={project} />
        ))}
      </Box>

      <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          pb: 10,
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter(arr: ICaseStudyProps[], category: string) {
  if (category !== 'All') {
    arr = arr.filter((project) => project.category === category);
  }
  return arr;
}
