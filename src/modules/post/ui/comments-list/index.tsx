import { CommentItem } from '../comment-item';
import type { Comment } from '../../model/comment';

import styles from './comments-list.module.css';

export function CommentsList({ comments }: { comments: Comment[] | null }) {
  if (!comments) return <div>No comments were found</div>;

  return (
    <div className={styles.container}>
      {comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </div>
  );
}
