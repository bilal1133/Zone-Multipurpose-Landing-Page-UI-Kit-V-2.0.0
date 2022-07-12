// @mui
import { Box, Pagination } from '@mui/material';
// @types
import { ReviewProp } from '../../../@types/review';
//
import ReviewTravelTourItem from './ReviewElearningCourseItem';

// ----------------------------------------------------------------------

type Props = {
  reviews: ReviewProp[];
};

export default function ReviewElearningCourseList({ reviews }: Props) {
  return (
    <>
      {reviews.map((review) => {
        const hasReply = review.replies.length > 0;

        return (
          <Box key={review.id}>
            <ReviewTravelTourItem
              name={review.name}
              avatarUrl={review.avatarUrl}
              postedAt={review.postedAt}
              message={review.message}
              rating={review.rating}
              helpful={review.helpful}
            />
            {hasReply &&
              review.replies.map((reply) => {
                const user = review.participants.find(
                  (participant) => participant.id === reply.userId
                );

                return (
                  <ReviewTravelTourItem
                    key={reply.id}
                    tagUser={reply.tagUser}
                    postedAt={reply.postedAt}
                    message={reply.message}
                    name={user?.name || ''}
                    avatarUrl={user?.avatarUrl}
                    hasReply
                  />
                );
              })}
          </Box>
        );
      })}

      <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          pt: 5,
          pb: { xs: 10, md: 15 },
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}
