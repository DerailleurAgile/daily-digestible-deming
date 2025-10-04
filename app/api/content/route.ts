import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const filePathParam = url.searchParams.get("path");
  if (!filePathParam) {
    return NextResponse.json({ error: "path query param required" }, { status: 400 });
  }

  // Decode any %2F or %20 in the path
  const decodedPath = decodeURIComponent(filePathParam);

  // Prevent directory traversal
  const normalized = path.normalize(decodedPath).replace(/^(\.\.(\/|\\|$))+/g, "");
  const contentRoot = path.join(process.cwd(), "content");
  const fullPath = path.join(contentRoot, normalized);

  if (!fullPath.startsWith(contentRoot)) {
    return NextResponse.json({ error: "invalid path" }, { status: 400 });
  }

  try {
    const data = await fs.readFile(fullPath);
    const ext = path.extname(fullPath).toLowerCase();
    const mime =
      ext === ".png"
        ? "image/png"
        : ext === ".jpg" || ext === ".jpeg"
        ? "image/jpeg"
        : ext === ".svg"
        ? "image/svg+xml"
        : ext === ".gif"
        ? "image/gif"
        : "application/octet-stream";

    return new Response(data, {
      headers: {
        "Content-Type": mime,
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Length": data.length.toString(),
      },
    });
  } catch {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
}
