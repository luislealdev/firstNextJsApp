import Link from "next/link";
import { DarkLayout } from "../components/layout/DarkLayout";
import { MainLayout } from "../components/layout/MainLayout";

export default function HomePage() {
  return (
    <h1>
      Go to <Link href="/about"> about </Link>
    </h1>
  );
}

HomePage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
