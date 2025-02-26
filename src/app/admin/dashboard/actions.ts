"use server";

import { storage } from "@/firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

export const getAllFolders = async () => {
  const listRef = ref(storage, "/");
  const list = await listAll(listRef);
  return list.prefixes.map(({ fullPath }) => fullPath);
};

export const uploadFile = async (folder: string, file: File) => {
  const fileRef = ref(storage, `/${folder}/${file.name}`);

  await uploadBytes(fileRef, file);
  return true;
};

export const getAllItemsInFolder = async (folder: string) => {
  const listRef = ref(storage, folder);
  const list = await listAll(listRef);
  return await Promise.all(
    list.items.map(async (file) => await getDownloadURL(file))
  );
};
