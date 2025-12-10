import React from "react";
import TabNavigation from "@/components/layout/TabNavigation";

type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div>{children}</div>
      <TabNavigation />
    </div>
  );
}
