interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  text?: string;
}

const Link = ({ text, href, children }: LinkProps) => {
  return (
    <a target="_blank" rel="noopener noreferrer nofollow" href={href}>
      {text || children}
    </a>
  );
};

export default Link;
