"use client";

import { FileUpload } from "@/app/components/file-upload";
import { typography } from "@/ui/variants";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllItemsInFolder, uploadFile } from "../actions";

const SimpleComponent: NextPage = () => {
  const { folderName } = useParams();
  const [files, setFiles] = useState<File[]>([]);

  const [images, setImages] = useState<string[]>([]);

  const handleOnChange = (files: File[]) => {
    setFiles(files);

    const upload = [...files].map(async (file) => {
      await uploadFile(folderName as string, file);
      setFiles((files) => files.filter((f) => f.name !== file.name));
      return file;
    });

    Promise.all(upload).then(() => {
      getAllItemsInFolder(folderName as string).then(setImages);
    });
  };

  useEffect(() => {
    getAllItemsInFolder(folderName as string).then(setImages);
  }, []);

  return (
    <div className="page w-full">
      <h1 className={typography({ semantic: "title", color: "black" })}>
        Folder<span className={typography()}>({folderName})</span>
      </h1>

      <div className="flex flex-wrap gap-5 items-center justify-center">
        {images.map((url) => (
          <div key={url} className="inline-block">
            <img src={url} width={200} height={200} />
          </div>
        ))}
      </div>

      <div className="m-auto mt-10 max-w-prose">
        <FileUpload onChange={handleOnChange} files={files} />
      </div>
    </div>
  );
};

export default SimpleComponent;
