"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Menu() {
  const pathname = usePathname();
  return (
    <div className="flex justify-center items-center">
      <Link
        href="/"
        className={`text-gray-400 px-4 py-2 transition-all duration-300 ${
          pathname === "/"
            ? "text-white font-bold pointer-events-none"
            : "hover:bg-gray-200 hover:text-black cursor-pointer"
        }`}
      >
        Home
      </Link>
      <Link
        href="/billing"
        className={`text-gray-400 px-4 py-2 transition-all duration-300 ${
          pathname === "/billing"
            ? "text-white font-bold pointer-events-none"
            : "hover:bg-gray-200 hover:text-black cursor-pointer"
        }`}
      >
        Billing
      </Link>
      <Link
        href="/transaction"
        className={`text-gray-400 px-4 py-2 transition-all duration-300 ${
          pathname === "/transaction"
            ? "text-white font-bold pointer-events-none"
            : "hover:bg-gray-200 hover:text-black cursor-pointer"
        }`}
      >
        Transaksi
      </Link>
    </div>
  );
}
