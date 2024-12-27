import { generatePath } from '@/shared/lib/generate-path';
import { ROUTES } from '@/shared/constants/routes';

import { PostTitle } from '../post-title';
import type { Post } from '../../model/post';

import styles from './posts-list.module.css';

export function PostsList({ posts }: { posts: Post[] | null }) {
  if (!posts) return <div>No posts were found</div>;

  const renderPosts = () => {
    return posts.map((post) => {
      const path = generatePath({
        route: ROUTES.POST,
        param: { id: String(post.id) }
      });

      return (
        <PostTitle key={post.id} path={path}>
          {post.title}
        </PostTitle>
      );
    });
  };

  return <div className={styles.container}>{renderPosts()}</div>;
}
