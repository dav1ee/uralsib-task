import { useFetch } from '@/shared/hooks/use-fetch';

import type { Post } from '../model/post';

export const getPostById = ({ id }: { id: string }) => {
  return useFetch<Post>({ endpoint: `/posts/${id}` });
};
