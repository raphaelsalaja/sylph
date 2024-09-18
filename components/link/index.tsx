import clsx from "clsx";
interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  text?: string;
  underline?: boolean;
}

const Link = ({ text, href, underline, children }: LinkProps) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={clsx({
        "underline decoration-2 decoration-gray-a4 underline-offset-2": underline,
      })}
      href={href}
    >
      {text || children}
    </a>
  );
};

export default Link;
