import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { searchContent, initializeSearchContent } from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  search: router({
    query: publicProcedure
      .input(z.object({ q: z.string().min(1), type: z.enum(["tool", "faq", "case"]).optional() }))
      .query(async ({ input }) => {
        try {
          await initializeSearchContent();
          const results = await searchContent(input.q, input.type);
          return { success: true, results, count: results.length };
        } catch (error) {
          console.error("[Search] Error:", error);
          return { success: false, results: [], count: 0 };
        }
      }),
  }),
});
export type AppRouter = typeof appRouter;
