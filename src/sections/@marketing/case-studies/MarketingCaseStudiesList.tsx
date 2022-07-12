import { useState } from 'react';
// @mui
import { Pagination, Tabs, Tab, Box } from '@mui/material';
// @types
import { CaseStudyProps } from '../../../@types/marketing';
//
import MarketingCaseStudyItem from './MarketingCaseStudyItem';

// ----------------------------------------------------------------------

type Props = {
  caseStudies: CaseStudyProps[];
};

export default function MarketingCaseStudiesList({ caseStudies }: Props) {
  const [selected, setSelected] = useState('All');

  const getCategories = caseStudies.map((project) => project.frontmatter.category);

  const categories = ['All', ...Array.from(new Set(getCategories))];

  const filtered = applyFilter(caseStudies, selected);

  const handleChangeCategory = (event: React.SyntheticEvent, newValue: string) => {
    setSelected(newValue);
  };

  return (
    <>
      <Box
        sx={{
          pt: 5,
          pb: { xs: 5, md: 10 },
        }}
      >
        <Tabs
          value={selected}
          scrollButtons="auto"
          variant="scrollable"
          allowScrollButtonsMobile
          onChange={handleChangeCategory}
        >
          {categories.map((category) => (
            <Tab key={category} value={category} label={category} />
          ))}
        </Tabs>
      </Box>

      <Box
        sx={{
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          columnGap: 4,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {filtered.map((project) => (
          <MarketingCaseStudyItem key={project.slug} project={project} />
        ))}
      </Box>

      <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          pt: 10,
          pb: { xs: 10, md: 15 },
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter(arr: CaseStudyProps[], category: string) {
  if (category !== 'All') {
    arr = arr.filter((project) => project.frontmatter.category === category);
  }
  return arr;
}
