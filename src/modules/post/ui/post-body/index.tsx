interface PostBodyProps {
  children: React.ReactNode;
}

export function PostBody({ children }: PostBodyProps) {
  return <p>{children}</p>;
}
