import Link from "next/link";
import { MainLayout } from "../components/layout/MainLayout";

export default function HomePage() {
  return (
    <MainLayout> 
        <h1>
            Go to <Link href="/about"> about </Link>
          </h1>
    </MainLayout>
  );
}
