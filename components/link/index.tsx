interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  text?: string;
}

const Link = ({ text, href, children }: LinkProps) => {
  return (
    <a target="_blank" rel="noopener noreferrer nofollow" className="underline decoration-2 decoration-gray-a4 underline-offset-2" href={href}>
      {text || children}
    </a>
  );
};

export default Link;
