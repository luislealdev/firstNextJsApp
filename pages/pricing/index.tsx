import { NextPage } from "next";
import Link from "next/link";
import { FC, JSXElementConstructor, PropsWithChildren, ReactElement, ReactFragment, ReactPortal } from "react";
import { DarkLayout } from "../../components/layout/DarkLayout";
import { MainLayout } from "../../components/layout/MainLayout";

export default function index() {
  return (
    <h1>
      Go to <Link href="/"> Home </Link>
    </h1>
  );
}

index.getLayout = function getLayout(page: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
