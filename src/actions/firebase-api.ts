"use server";

import { storage } from "@/firebase";
import { listAll, ref } from "firebase/storage";

export const getAllGalleryFolders = async () => {
  const listRef = ref(storage);
  const list = await listAll(listRef);
  return list;
};
