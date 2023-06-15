// @mui
import { Pagination, Box } from '@mui/material';
// types
import { IReviewItemProp } from 'src/types/review';
//
import ReviewItem from './ReviewItem';

// ----------------------------------------------------------------------

type Props = {
  reviews: IReviewItemProp[];
};

export default function ReviewList({ reviews }: Props) {
  return (
    <Box sx={{ pt: 5 }}>
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          name={review.name}
          avatarUrl={review.avatarUrl}
          postedAt={review.postedAt}
          message={review.message}
          rating={review.rating}
          helpful={review.helpful}
        />
      ))}

      <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          mt: 5,
          mb: 10,
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </Box>
  );
}
