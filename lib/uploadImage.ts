import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "6481445e9c08d69355f4",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
