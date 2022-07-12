// ----------------------------------------------------------------------

type ReviewUsers = {
  id: string;
  name: string;
  avatarUrl: string;
};

type ReviewReplyComment = {
  id: string;
  userId: string;
  message: string;
  postedAt: Date | string | number;
  tagUser?: string;
};

export type ReviewProp = {
  id: string;
  name: string;
  avatarUrl: string;
  message: string;
  postedAt: Date | string | number;
  participants: ReviewUsers[];
  rating: number;
  helpful: number;
  replies: ReviewReplyComment[];
};
