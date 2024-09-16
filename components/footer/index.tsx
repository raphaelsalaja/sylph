import Link from "@/components/link";
import * as Theme from "@/components/theme";

export const Footer = () => {
  return (
    <div className="flex w-full justify-between border-t border-t-gray-4 pt-2">
      <sub>
        Built with <Link href="https://nextjs.org/" text="Next.js" />
      </sub>
      <sub>Powered by Vercel ▲</sub>
    </div>
  );
};
