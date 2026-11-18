import { neon } from "@neondatabase/serverless";

export type InquiryStatus = "new" | "contacted" | "quoted" | "closed";

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  category: string;
  message: string;
  status: InquiryStatus;
  createdAt: string;
}

function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not configured in environment variables.");
  }
  return neon(url);
}

let tableEnsured = false;

async function ensureTable(): Promise<void> {
  if (tableEnsured) return;
  const sql = getSql();
  await sql`
    CREATE TABLE IF NOT EXISTS inquiries (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT NOT NULL DEFAULT '',
      category TEXT NOT NULL DEFAULT 'General',
      message TEXT NOT NULL DEFAULT '',
      status TEXT NOT NULL DEFAULT 'new',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  tableEnsured = true;
}

function mapRow(row: Record<string, unknown>): Inquiry {
  return {
    id: String(row.id),
    name: String(row.name),
    phone: String(row.phone),
    email: String(row.email ?? ""),
    category: String(row.category ?? "General"),
    message: String(row.message ?? ""),
    status: (row.status as InquiryStatus) ?? "new",
    createdAt: new Date(String(row.created_at)).toISOString(),
  };
}

export async function listInquiries(): Promise<Inquiry[]> {
  await ensureTable();
  const sql = getSql();
  const rows = await sql`
    SELECT id, name, phone, email, category, message, status, created_at
    FROM inquiries
    ORDER BY created_at DESC
  `;
  return rows.map((r) => mapRow(r as Record<string, unknown>));
}

export async function createInquiry(input: {
  name: string;
  phone: string;
  email?: string;
  category?: string;
  message?: string;
}): Promise<Inquiry> {
  await ensureTable();
  const sql = getSql();
  const id = `inq_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
  const name = input.name.trim();
  const phone = input.phone.trim();
  const email = (input.email ?? "").trim();
  const category = (input.category ?? "General").trim();
  const message = (input.message ?? "").trim();

  const rows = await sql`
    INSERT INTO inquiries (id, name, phone, email, category, message, status)
    VALUES (${id}, ${name}, ${phone}, ${email}, ${category}, ${message}, 'new')
    RETURNING id, name, phone, email, category, message, status, created_at
  `;
  return mapRow(rows[0] as Record<string, unknown>);
}

export async function updateInquiryStatus(
  id: string,
  status: InquiryStatus
): Promise<Inquiry | null> {
  await ensureTable();
  const sql = getSql();
  const rows = await sql`
    UPDATE inquiries
    SET status = ${status}
    WHERE id = ${id}
    RETURNING id, name, phone, email, category, message, status, created_at
  `;
  if (rows.length === 0) return null;
  return mapRow(rows[0] as Record<string, unknown>);
}

export async function deleteInquiry(id: string): Promise<boolean> {
  await ensureTable();
  const sql = getSql();
  const rows = await sql`
    DELETE FROM inquiries
    WHERE id = ${id}
    RETURNING id
  `;
  return rows.length > 0;
}
