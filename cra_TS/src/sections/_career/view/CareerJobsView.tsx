import { useState, useEffect } from 'react';
// @mui
import { Container } from '@mui/material';
// _mock
import { _jobs } from 'src/_mock';
//
import NewsletterCareer from '../../newsletter/career';
import { CareerJobList } from '../job/list';
import CareerFilters from '../job/filters';

// ----------------------------------------------------------------------

export default function CareerJobsView() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    fakeLoading();
  }, []);

  return (
    <>
      <Container>
        <CareerFilters />

        <CareerJobList jobs={_jobs} loading={loading} />
      </Container>

      <NewsletterCareer />
    </>
  );
}
