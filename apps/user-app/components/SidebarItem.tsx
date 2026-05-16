"use client"




import { SidebarMenuButton } from "@workspace/ui/components/sidebar"
import { usePathname, useRouter } from "next/navigation"

export const SidebarItem = ({
  href,
  title,
  icon,
}: {
  href: string
  title: string
  icon: React.ReactNode
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const selected = pathname === href

  return (
    <SidebarMenuButton
      isActive={selected}
      onClick={() => router.push(href)}
    //   tooltip={title}
    >
      {icon}
      <span>{title}</span>
    </SidebarMenuButton>
  );
};




// "use client";
// import { usePathname, useRouter } from "next/navigation";
// import React from "react";

// export const SidebarItem = ({
//   href,
//   title,
//   icon,
// }: {
//   href: string;
//   title: string;
//   icon: React.ReactNode;
// }) => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const selected = pathname === href;

//   return (
//     <div
//       className={`flex items-center gap-2 cursor-pointer p-2 pl-8 font-bold transition-colors ${
//         selected ? "text-[#6a51a6]" : "text-slate-500 hover:text-[#6a51a6]"
//       }`}
//       onClick={() => router.push(href)}
//     >
//       {icon}
//       {title}
//     </div>
//   );
// };


// "use client"
// import { usePathname, useRouter } from "next/navigation"
// import React from "react"

// export const SidebarItem = ({
//   href,
//   title,
//   icon,
// }: {
//   href: string;
//   title: string;
//   icon: React.ReactNode;
// }) => {
//   const router = useRouter()
//   const pathname = usePathname()
//   const selected = pathname === href

//   return (
//     <div
//       onClick={() => router.push(href)}
//       className={`flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
//         selected
//           ? "bg-blue-600 text-white"
//           : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"
//       }`}
//     >
//       <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
//       {title}
//     </div>
//   );
// };

// "use client";
// import { usePathname, useRouter } from "next/navigation";
// import React from "react";

// export const SidebarItem = ({
//   href,
//   title,
//   icon,
// }: {
//   href: string;
//   title: string;
//   icon: React.ReactNode;
// }) => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const selected = pathname === href;

//   return (
//     <div
//       onClick={() => router.push(href)}
//       className={`flex items-center gap-3 cursor-pointer rounded-lg mx-2 px-3 py-2 text-sm font-medium transition-colors ${
//         selected
//           ? "bg-blue-600 text-white"
//           : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"
//       }`}
//     >
//       <span className="w-4 h-4 flex items-center justify-center">{icon}</span>
//       {title}
//     </div>
//   );
// };