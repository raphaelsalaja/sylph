import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Link } from "next-view-transitions";

export const Return = () => (
  <aside className="aside">
    <Link href="/" className="return">
      <ArrowLeftIcon /> Home
    </Link>
  </aside>
);
