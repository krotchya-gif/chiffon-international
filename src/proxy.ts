import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["id", "en", "ar"];
const defaultLocale = "id";

function getLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLang = request.headers.get("accept-language") ?? "";
  const langs = acceptLang
    .split(",")
    .map((l) => l.split(";")[0]?.trim().toLowerCase() ?? "");

  for (const lang of langs) {
    const code = lang.split("-")[0];
    if (code === "ar") return "ar";
    if (code === "en") return "en";
    if (code === "id") return "id";
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return NextResponse.next();

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:png|jpg|jpeg|svg|webp|ico|css|js)$).*)",
  ],
};
