"use client";
import { button, typography } from "@/ui/variants";
import { Download, Upload } from "lucide-react";
import { Ref, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { uploadFile } from "../admin/dashboard/actions";

export const FileUpload: React.FC<{
  onChange?: (files: File[]) => void;
  files?: File[];
}> = ({ onChange, files = [] }) => {
  const [isOver, setIsOver] = useState(false);

  const inputRef = useRef<HTMLInputElement | undefined>(undefined);

  const openDirectory = async () => {
    inputRef.current?.click();
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(Array.from(event.target.files || []));
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(true);
  };

  const onDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(false);
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(false);

    onChange?.(Array.from(event.dataTransfer.files));
  };

  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragEnter={onDragOver}
      onDragLeave={onDragEnd}
      data-dragging={isOver}
      className="flex flex-col items-center gap-2 bg-white rounded-md p-10 data-[dragging=true]:opacity-50"
    >
      <p className={typography({ semantic: "title", color: "primary" })}>
        Drag and drop your files here
      </p>
      <p className={typography({ color: "brand" })}> OR</p>
      <input
        onChange={handleOnChange}
        multiple
        ref={inputRef as Ref<HTMLInputElement>}
        hidden
        type="file"
      />
      <button
        onClick={openDirectory}
        type="button"
        className={twMerge(button(), "cursor-pointer")}
      >
        <Download /> Browse files
      </button>

      <ul className={twMerge(typography(), "*:flex *:gap-2 w-full mt-5")}>
        {files.map((file) => (
          <li key={file.name}>
            <Upload width={16} />
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
