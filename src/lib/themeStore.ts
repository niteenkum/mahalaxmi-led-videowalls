import { neon } from "@neondatabase/serverless";
import { THEMES } from "@/data/themes";

export const DEFAULT_THEME_ID = "obsidian-mono";
const THEME_SETTING_KEY = "active_theme";

function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not configured in environment variables.");
  }
  return neon(url);
}

let settingsTableEnsured = false;

async function ensureSettingsTable(): Promise<void> {
  if (settingsTableEnsured) return;
  const sql = getSql();
  await sql`
    CREATE TABLE IF NOT EXISTS site_settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  settingsTableEnsured = true;
}

export function isValidThemeId(id: string): boolean {
  return THEMES.some((t) => t.id === id);
}

export async function getActiveTheme(): Promise<string> {
  try {
    await ensureSettingsTable();
    const sql = getSql();
    const rows = await sql`
      SELECT value FROM site_settings WHERE key = ${THEME_SETTING_KEY} LIMIT 1
    `;
    const val = rows[0]?.value ? String(rows[0].value) : DEFAULT_THEME_ID;
    return isValidThemeId(val) ? val : DEFAULT_THEME_ID;
  } catch (err) {
    console.error("getActiveTheme failed, using default:", err);
    return DEFAULT_THEME_ID;
  }
}

export async function setActiveTheme(themeId: string): Promise<string> {
  if (!isValidThemeId(themeId)) {
    throw new Error("Invalid theme ID");
  }
  await ensureSettingsTable();
  const sql = getSql();
  await sql`
    INSERT INTO site_settings (key, value, updated_at)
    VALUES (${THEME_SETTING_KEY}, ${themeId}, NOW())
    ON CONFLICT (key)
    DO UPDATE SET value = EXCLUDED.value, updated_at = NOW()
  `;
  return themeId;
}
