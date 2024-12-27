import { generatePath as generateRoutePath } from 'react-router-dom';

interface GeneratePathParams {
  route: string;
  param: Record<string, string>;
}

export const generatePath = ({ route, param }: GeneratePathParams) => {
  return generateRoutePath(route, param);
};
