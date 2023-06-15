// ----------------------------------------------------------------------

type IReviewUsers = {
  id: string;
  name: string;
  avatarUrl: string;
};

type IReviewReplyComment = {
  id: string;
  userId: string;
  message: string;
  postedAt: Date | string | number;
  tagUser?: string;
};

export type IReviewItemProp = {
  id: string;
  name: string;
  rating: number;
  postedAt: Date | string | number;
  message: string;
  helpful: number;
  avatarUrl: string;
  users: IReviewUsers[];
  replyComment: IReviewReplyComment[];
};
