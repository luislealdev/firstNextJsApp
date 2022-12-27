import Link from "next/link";
import { MainLayout } from "../components/layout/MainLayout";

export default function contact() {
  return (
    <MainLayout>
      <h1>
        Go to <Link href="/home"> Home </Link>
      </h1>
    </MainLayout>
  );
}
