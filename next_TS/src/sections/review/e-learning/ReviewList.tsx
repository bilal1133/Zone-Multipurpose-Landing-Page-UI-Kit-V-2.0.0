// @mui
import { Box, Pagination } from '@mui/material';
// types
import { IReviewItemProp } from 'src/types/review';
//
import ReviewItem from './ReviewItem';

// ----------------------------------------------------------------------

type Props = {
  reviews: IReviewItemProp[];
};

export default function Reviews({ reviews }: Props) {
  return (
    <>
      {reviews.map((review) => {
        const { id, name, rating, helpful, message, postedAt, avatarUrl, replyComment, users } =
          review;

        const hasReply = !!replyComment.length;

        return (
          <Box key={id}>
            <ReviewItem
              name={name}
              avatarUrl={avatarUrl}
              postedAt={postedAt}
              message={message}
              rating={rating}
              helpful={helpful}
            />
            {hasReply &&
              replyComment.map((reply) => {
                const userReply = users.filter((user) => user.id === reply.userId)[0];

                return (
                  <ReviewItem
                    key={reply.id}
                    tagUser={reply.tagUser}
                    postedAt={reply.postedAt}
                    message={reply.message}
                    name={userReply.name}
                    avatarUrl={userReply.avatarUrl}
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
          mt: 5,
          mb: 10,
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}
