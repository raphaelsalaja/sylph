import Link from "@/components/link";
import * as Theme from "@/components/theme";

export const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between border-t border-t-gray-4 pt-2">
      <div className="px-[2px] text-gray-8 text-xs tracking-[0.01px]">
        Built with <Link href="https://nextjs.org/" text="Next.js" />
      </div>
      <div className="text-gray-8 text-xs tracking-[0.01px]">
        <Theme.Switch />
      </div>
    </div>
  );
};
