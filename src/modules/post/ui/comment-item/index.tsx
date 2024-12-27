import type { Comment } from '../../model/comment';

import styles from './comment-item.module.css';

export function CommentItem({ email, body }: Comment) {
  return (
    <div className={styles.root}>
      <span className={styles.author}>{`by ${email}`}</span>
      <p>{body}</p>
    </div>
  );
}
