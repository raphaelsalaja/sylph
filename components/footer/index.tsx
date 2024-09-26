import { Link as LabeledLink } from "@/components/link";
import * as Theme from "@/components/theme";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between border-border border-t pt-2">
      <div className="px-[2px] text-muted text-small tracking-[0.01px]">
        Built with <LabeledLink href="https://nextjs.org/" text="Next.js" underline />
      </div>
      <div className="text-muted text-small tracking-[0.01px]">
        <Theme.Switch />
      </div>
    </div>
  );
};

export { Footer };
