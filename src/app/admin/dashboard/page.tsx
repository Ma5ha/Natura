"use client";

import { button, typography } from "@/ui/variants";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { getAllFolders } from "./actions";
import { Plus } from "lucide-react";
import useToggle from "@/app/hooks/toggle";
import Input from "@/app/components/input";
import Show from "@/app/components/show";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Dashboard() {
  const [folders, setFolders] = useState<string[]>([]);
  const [isOpen, toggle] = useToggle();
  const router = useRouter();

  const outsideRef = useRef(null);
  const handleClickOutside: MouseEventHandler<HTMLDivElement> = ({
    target,
  }) => {
    if (target === outsideRef.current) toggle();
  };

  useEffect(() => {
    getAllFolders().then(setFolders);
  }, []);

  return (
    <div className="py-10 page">
      <ul className="grid grid-cols-2 gap-5">
        {folders.map((name) => (
          <li key={name}>
            <Link
              className="flex gap-3 cursor-pointer"
              href={`dashboard/${name}`}
            >
              <span className="folder"></span>
              <span className={twMerge(typography(), "h-fit w-fit")}>
                {name}
              </span>
            </Link>
          </li>
        ))}

        <li className="flex gap-3 cursor-pointer  ">
          <button
            onClick={toggle}
            className="folder flex items-center justify-center bg-gray-200"
          >
            <Plus className="stroke-primary" />
          </button>
        </li>
      </ul>

      <Show when={isOpen}>
        <dialog open={isOpen}>
          <div
            ref={outsideRef}
            onClickCapture={handleClickOutside}
            className="fixed w-full h-full bg-gray-500/60 top-0 left-0 flex justify-center items-center "
          >
            <div className="w-[400px] h-[400px] bg-white rounded-md shadow-2xl p-5 flex flex-col justify-center">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("tes");

                  const form = new FormData(e.currentTarget);
                  const name = form.get("name") as string;
                  setFolders((prev) => [...prev, name]);
                  toggle();
                  router.push(`dashboard/${name}`);
                }}
              >
                <Input
                  min={3}
                  name="name"
                  className="mb-5"
                  label="Folder name"
                  placeholder="Enter new folder name"
                />
                <button className={twMerge(button(), "ml-auto")}>Submit</button>
              </form>
            </div>
          </div>
        </dialog>
      </Show>
    </div>
  );
}

export default Dashboard;
