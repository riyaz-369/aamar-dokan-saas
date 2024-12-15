import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import { writeFile } from "fs/promises";
import { existsSync, mkdirSync } from "fs";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const file = data.get("photo") as File;

    if (!file) {
      return NextResponse.json({ success: false, message: "No file uploaded" });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const uploadsFolder = join(process.cwd(), "public", "blog-images");

    // Ensure the folder exists
    if (!existsSync(uploadsFolder)) {
      mkdirSync(uploadsFolder, { recursive: true });
    }

    const filePath = join(uploadsFolder, file.name);

    // Write the file to the public/blog-images folder
    await writeFile(filePath, buffer);

    return NextResponse.json({
      success: true,
      message: "File uploaded successfully",
      fileUrl: `/blog-images/${file.name}`,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({
      success: false,
      message: "Upload failed",
    });
  }
}
