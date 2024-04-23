import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/","/Mens","/Womens","/Kids","/Products"],
});


export const config = {

  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};