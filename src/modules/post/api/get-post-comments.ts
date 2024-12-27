import { useFetch } from '@/shared/hooks/use-fetch';

import type { Comment } from '../model/comment';

export const getPostComments = ({ id }: { id: string }) => {
  return useFetch<Comment[]>({ endpoint: `/posts/${id}/comments` });
};
