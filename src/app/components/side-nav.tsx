"use client";
import { navigation } from "@/constants/nav";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function SideNav() {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    setActive(router.asPath);
  }, [router.asPath]);

  return (
    <nav className="flex flex-col gap-2">
      {navigation.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className={twMerge(
            "px-4 py-2 rounded-md transition-colors",
            active === href ? "bg-primary text-white" : "text-gray-900"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
