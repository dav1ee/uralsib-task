import { useFetch } from '@/shared/hooks/use-fetch';

import type { Post } from '../model/post';

export const getPosts = () => {
  return useFetch<Post[]>({ endpoint: `/posts` });
};
