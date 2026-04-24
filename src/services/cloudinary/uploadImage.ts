// ===============================================
// src/services/cloudinary/uploadImage.ts
// ===============================================

"use client";

export const uploadImageToCloudinary = async (
  file: File
) => {
  const formData = new FormData();

  formData.append("file", file);
  formData.append(
    "upload_preset",
     process.env.NEXT_PUBLIC_CLOUDINARY_PRESET!
  );

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();

  return data.secure_url;
};