"use client";

import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { button } from "@/ui/variants";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "authenticated") router.push("/admin/dashboard");
  }, [status]);

  return (
    <div className="h-full flex flex-col justify-center">
      <form
        className="card w-[400px] bg-white self-start m-auto space-y-5 h-[400px] flex flex-col items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          signIn("google", {
            callbackUrl: "/admin/dashboard",
          });
        }}
      >
        <button
          className={twMerge(
            button({ sematic: "secondary" }),
            "w-fit flex items-center"
          )}
        >
          Login with Google{" "}
          <Image
            alt="google brand icon"
            src="/google.svg"
            width={20}
            height={20}
          />
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
