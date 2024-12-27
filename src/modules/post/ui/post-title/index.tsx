import { Link } from 'react-router-dom';

import styles from './post-title.module.css';

interface PostTitleProps {
  path?: string;
  children: React.ReactNode;
}

export function PostTitle({ path, children }: PostTitleProps) {
  if (!path) {
    return <h1>{children}</h1>;
  }

  return (
    <Link to={path} className={styles.link}>
      {children}
    </Link>
  );
}
