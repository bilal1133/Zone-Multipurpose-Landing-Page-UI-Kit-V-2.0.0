import { useState } from 'react';
// @mui
import { Container, SelectChangeEvent, Unstable_Grid2 as Grid } from '@mui/material';
// _mock
import { _reviews, _tours } from 'src/_mock';
//
import { ReviewNewForm } from '../components';
import ReviewList from './ReviewList';
import ReviewToolbar from './ReviewToolbar';
import ReviewTourGuideInfo from './ReviewTourGuideInfo';

// ----------------------------------------------------------------------

const _mockTour = _tours[0];

export default function ReviewTravel() {
  const [sort, setSort] = useState('latest');

  const [openForm, setOpenForm] = useState(false);

  const handleChangeSort = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  return (
    <>
      <Container sx={{ overflow: 'hidden' }}>
        <Grid container spacing={8}>
          <Grid xs={12} md={5} lg={4}>
            <ReviewTourGuideInfo tourGuide={_mockTour.tourGuide} />
          </Grid>

          <Grid xs={12} md={7} lg={8}>
            <ReviewToolbar
              sort={sort}
              totalReview={_reviews.length}
              onChangeSort={handleChangeSort}
              onOpenReview={() => setOpenForm(!openForm)}
            />

            <ReviewList reviews={_reviews} />
          </Grid>
        </Grid>
      </Container>

      <ReviewNewForm open={openForm} onClose={() => setOpenForm(false)} />
    </>
  );
}
