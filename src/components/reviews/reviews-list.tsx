import Comment from '../../components/comment';
import { CommentTypeData } from '../../components/type';

type ReviewsListProps = {
  commentData: CommentTypeData[];
};

function ReviewsList({ commentData }: ReviewsListProps): JSX.Element {

  return (
    <ul className="reviews__list">
      {commentData.map((comment) => (
        <Comment
          key={comment.id}
          date={comment.date}
          user={comment.user}
          comment={comment.comment}
          rating={comment.rating}
        />
      ))}
    </ul>
  );
}

export default ReviewsList;
