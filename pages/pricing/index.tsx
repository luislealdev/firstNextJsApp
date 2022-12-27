import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { DarkLayout } from "../../components/layout/DarkLayout";
import { MainLayout } from "../../components/layout/MainLayout";

export default function index() {
  return (
    <h1>
      Go to <Link href="/"> Home </Link>
    </h1>
  );
}

index.getLayout = function getLayout(page: any) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
