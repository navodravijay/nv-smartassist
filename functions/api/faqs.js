
import { neon } from "@neondatabase/serverless";

export async function onRequestGet({ env }) {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff"
  };

  if (
  env.FAQ_API_ENABLED !== "true" ||
  !env.DATABASE_URL
) {
    return Response.json(
      { error: "Database not configured" },
      { status: 503, headers }
    );
  }

  try {
    const sql = neon(env.DATABASE_URL);

    const faqs = await sql`
      SELECT id, question, answer, category
      FROM public.smartassist_faqs
      WHERE is_active = TRUE
      ORDER BY id
      LIMIT 50
    `;

    return Response.json(
      { success: true, faqs },
      { headers }
    );
  } catch {
    return Response.json(
      { error: "Unable to load FAQs" },
      { status: 500, headers }
    );
  }
}
