import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
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
        <Posts category="explorations" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="thoughts" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
