import Link from "next/link";
import { useRouter } from "next/router";

const style = {
  color: "rgb(107, 171, 255)",
  textDecoration: "underline",
};
export const ActiveLink = ({ text, href }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href} style={asPath == href ? style : null}>
      {text}
    </Link>
  );
};
