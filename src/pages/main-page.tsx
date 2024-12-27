import { postApi, Post } from '@/modules/post';
import { Loader } from '@/shared/ui/loader';

export function MainPage() {
  const { data, isLoading, error } = postApi.getPosts();

  if (!!error) return <div>{error}</div>;

  return <>{isLoading ? <Loader /> : <Post.List posts={data} />}</>;
}
