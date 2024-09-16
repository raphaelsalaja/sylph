export const Footer = () => {
  return (
    <div className="flex w-full justify-between border-t border-t-gray-4 pt-2">
      <sub>
        Built with <NewTabLink href="https://nextjs.org/" text="Next.js" />
      </sub>
      <sub>Powered by Vercel</sub>
    </div>
  );
};

interface NewTabLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  text?: string;
}

const NewTabLink = ({ text, href, children }: NewTabLinkProps) => {
  return (
    <a target="_blank" rel="noopener noreferrer nofollow" href={href}>
      {text || children}
    </a>
  );
};
