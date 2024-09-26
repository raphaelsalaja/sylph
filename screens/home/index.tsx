import { Link as LabeledLink } from "@/components/link";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import * as Theme from "@/components/theme";
import AboutMe from "@/screens/home/markdown/about-me.mdx";
import Header from "@/screens/home/markdown/header.mdx";

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <Header />
      </FadeIn.Item>
      <FadeIn.Item>
        <AboutMe />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="guides" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="experiments" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="thoughts" />
      </FadeIn.Item>
      <FadeIn.Item>
        <div className="flex w-full items-center justify-between border-border border-t pt-2">
          <div className="px-[2px] text-muted text-xs tracking-[0.01px]">
            Built with <LabeledLink href="https://nextjs.org/" text="Next.js" underline />
          </div>
          <div className="text-muted text-xs tracking-[0.01px]">
            <Theme.Switch />
          </div>
        </div>
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
