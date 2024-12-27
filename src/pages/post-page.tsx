import { useParams } from 'react-router-dom';

import { postApi, Post } from '@/modules/post';
import { Loader } from '@/shared/ui/loader';

export function PostPage() {
  const { id } = useParams<{ id: string }>();

  const {
    data: post,
    isLoading: postLoading,
    error: postError
  } = postApi.getPostById({
    id: id ?? ''
  });

  const {
    data: comments,
    isLoading: commentsLoading,
    error: commentsError
  } = postApi.getPostComments({ id: id ?? '' });

  const isLoading = postLoading || commentsLoading;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Post.Title>{post?.title}</Post.Title>
          <Post.Body>{post?.body}</Post.Body>
          {!!postError && <div>{postError}</div>}

          <Post.CommentsList comments={comments} />
          {!!commentsError && <div>{commentsError}</div>}
        </>
      )}
    </>
  );
}
