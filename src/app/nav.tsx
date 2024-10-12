import Link from "next/link";
import { NaturaLogo } from "@public/natura-logo";
import { twJoin } from "tailwind-merge";
const links = ["Home", "About", "Services", "Contact"];

export default function Nav() {
  return (
    <nav className="px-10 flex gap-2 justify-between items-center shadow-sm fixed w-screen z-50 bg-white/25 backdrop-blur-sm">
      <NaturaLogo width={40} height={40} />
      <div className="h-full mt-5 pb-5">
        {links.map((label, i) => (
          <Link
            className={twJoin(
              "ml-2 h-full font-semibold pb-5",
              i === 0 && "text-primary border-b-primary h-full border-b-2"
            )}
            href="#"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
