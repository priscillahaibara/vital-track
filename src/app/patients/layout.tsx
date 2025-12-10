import TabNavigation from "@/components/layout/TabNavigation";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div>{children}</div>
      <TabNavigation />
    </div>
  );
}
