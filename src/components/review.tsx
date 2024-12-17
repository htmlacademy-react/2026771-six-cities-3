import { FC } from 'react';
import ReviewsList from './reviews/reviews-list';
import ReviewForm from './reviews/review-form';
import { CommentTypeData } from '../components/type';

type ReviewProps = {
  commentData: CommentTypeData[];
};
const isAuth =true;
export const Reviews: FC<ReviewProps> = ({ commentData  }) => (
  <>
   <ReviewsList commentData={commentData} />
    {isAuth && <ReviewForm />}
    {!isAuth && <p>Чтобы оставить комментарий Вам необходимо авторизоваться</p>}
  </>
);
