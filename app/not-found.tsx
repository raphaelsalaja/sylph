import { DeployButton } from "@/components/deploy";
import { Footer } from "@/components/footer";
import Link from "@/components/link";
import * as FadeIn from "@/components/motion/staggers/fade";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function NotFound() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>404</h1>
            <h2>This page does not exist</h2>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <p>
          The page you're looking for doesn't exist. Click here to go back{" "}
          <Link href="/" text="home" underline />
        </p>
      </FadeIn.Item>

      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
      <DeployButton />
    </FadeIn.Container>
  );
}
