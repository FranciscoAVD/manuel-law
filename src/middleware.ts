import { type NextRequest, NextResponse } from "next/server";

let locales = ["en", "es"];

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  // const { pathname } = request.nextUrl;
  // const pathnameHasLocale = locales.some(
  //   (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  // );
  // console.log(pathname);

  // if (pathnameHasLocale) return NextResponse.next();

  // // Redirect if there is no locale
  // request.nextUrl.pathname = `/en${pathname}`;
  // // e.g. incoming request is /products
  // // The new URL is now /en/products
  // return NextResponse.redirect(request.nextUrl);
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
