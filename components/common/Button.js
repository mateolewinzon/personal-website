import Link from "next/link";
import { Button as BootstrapButton} from "react-bootstrap";

function Button({ children, href, passHref = true, ...props }) {
  return (
    <Link href={href} passHref={passHref}>
      <BootstrapButton className="w-auto" {...props}>{children}</BootstrapButton>
    </Link>
  );
}

export default Button;
