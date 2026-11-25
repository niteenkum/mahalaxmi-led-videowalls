import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import {
  getActiveTheme,
  isValidThemeId,
  setActiveTheme,
} from "@/lib/themeStore";

export async function GET() {
  const themeId = await getActiveTheme();
  return NextResponse.json(
    { themeId },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}

export async function PUT(request: Request) {
  const authed = await isAdminAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = (await request.json()) as { themeId?: string };
    const themeId = body.themeId?.trim() ?? "";

    if (!isValidThemeId(themeId)) {
      return NextResponse.json({ error: "Invalid themeId" }, { status: 400 });
    }

    const saved = await setActiveTheme(themeId);
    return NextResponse.json({ themeId: saved });
  } catch (err) {
    console.error("PUT /api/theme failed:", err);
    return NextResponse.json(
      { error: "Failed to update theme" },
      { status: 500 }
    );
  }
}
