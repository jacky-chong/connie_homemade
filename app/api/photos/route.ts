// app/api/photos/route.ts

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  const photosDirectory = path.join(process.cwd(), "public", "photos");

  try {
    const files = await fs.promises.readdir(photosDirectory);
    const imageFiles = files.filter((file) =>
      /\.(jpe?g|png|gif|bmp|webp)$/i.test(file)
    );

    return NextResponse.json({ photos: imageFiles });
  } catch (err) {
    console.error("Error reading photos directory:", err);
    return NextResponse.json(
      { error: "Failed to read photos directory" },
      { status: 500 }
    );
  }
}
