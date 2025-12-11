import React from "react";
import Header from "@/components/layout/Header";
import TabNavigation from "@/components/layout/TabNavigation";

type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main className="px-6 py-4">{children}</main>
      <TabNavigation />
    </div>
  );
}
