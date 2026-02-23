import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/labs/private/:path*"],
};

function unauthorized() {
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Auridian Labs"',
    },
  });
}

export function middleware(req: NextRequest) {
  const user = process.env.LABS_USER;
  const pass = process.env.LABS_PASS;

  // Fail closed if credentials are not configured
  if (!user || !pass) return unauthorized();

  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) return unauthorized();

  const base64 = auth.slice("Basic ".length);
  let decoded = "";
  try {
    decoded = Buffer.from(base64, "base64").toString("utf8");
  } catch {
    return unauthorized();
  }

  const [u, p] = decoded.split(":");
  if (u !== user || p !== pass) return unauthorized();

  return NextResponse.next();
}
