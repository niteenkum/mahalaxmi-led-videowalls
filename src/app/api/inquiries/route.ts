import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { createInquiry, listInquiries } from "@/lib/inquiriesStore";

export async function GET() {
  const authed = await isAdminAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const inquiries = await listInquiries();
    return NextResponse.json({ inquiries });
  } catch (err) {
    console.error("GET /api/inquiries failed:", err);
    return NextResponse.json(
      { error: "Failed to load inquiries" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      phone?: string;
      email?: string;
      category?: string;
      message?: string;
    };

    if (!body.name?.trim() || !body.phone?.trim()) {
      return NextResponse.json(
        { error: "Name and phone number are required" },
        { status: 400 }
      );
    }

    const inquiry = await createInquiry({
      name: body.name,
      phone: body.phone,
      email: body.email,
      category: body.category,
      message: body.message,
    });

    return NextResponse.json({ inquiry }, { status: 201 });
  } catch (err) {
    console.error("POST /api/inquiries failed:", err);
    return NextResponse.json(
      { error: "Failed to save inquiry" },
      { status: 500 }
    );
  }
}
