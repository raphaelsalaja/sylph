import Link from "@/components/link";
import * as Theme from "@/components/theme";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between border-border border-t pt-2">
      <div className="px-[2px] text-muted text-small">
        Built with <Link href="https://nextjs.org/" text="Next.js" underline />
      </div>
      <div className="text-muted text-small">
        <Theme.Switch />
      </div>
    </div>
  );
};

export { Footer };
