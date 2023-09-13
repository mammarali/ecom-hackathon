import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  // "/" will be accessible to all users
  publicRoutes: [
    "/",
    "/products",
    "/male",
    "/kids",
    "/female",
    "/api/webhooks/:path*",
    "/studio/:path*",
  ],
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/api/cart:path*",
  ],
};
