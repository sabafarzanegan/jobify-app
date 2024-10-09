type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return <div className="container px-4 mx-auto">{children}</div>;
}

export default Container;
