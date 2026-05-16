


"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const SidebarItem = ({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const selected = pathname === href;

  return (
    <div
      className={`flex items-center gap-2 cursor-pointer p-2 pl-8 font-bold transition-colors ${
        selected ? "text-[#6a51a6]" : "text-slate-500 hover:text-[#6a51a6]"
      }`}
      onClick={() => router.push(href)}
    >
      {icon}
      {title}
    </div>
  );
};