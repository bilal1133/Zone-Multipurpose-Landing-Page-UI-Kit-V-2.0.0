import { useState } from 'react';
// @mui
import { Container } from '@mui/material';
// _mock
import { _reviews } from 'src/_mock';
//
import ReviewNewForm from '../components/ReviewNewForm';
import ReviewList from './ReviewList';
import ReviewSummary from './ReviewSummary';

// ----------------------------------------------------------------------

export default function ReviewEcommerce() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <ReviewSummary
        ratingsNumber={4.1}
        reviewsNumber={123456}
        onOpenForm={() => setOpenForm(true)}
      />

      <Container>
        <ReviewList reviews={_reviews} />
      </Container>

      <ReviewNewForm open={openForm} onClose={() => setOpenForm(false)} />
    </>
  );
}
