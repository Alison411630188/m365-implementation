import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { sendContactFormEmail } from "./email";
import { searchContent, initializeSearchContent } from "./db";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          email: z.string().email(),
          phone: z.string().optional(),
          subject: z.string().min(1),
          message: z.string().min(1),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await sendContactFormEmail(input);
          return {
            success: true,
            message: "感謝您的聯繫，我們已收到您的訊息。",
          };
        } catch (error) {
          console.error("[Contact Form] Error:", error);
          return {
            success: false,
            message: "發送失敗，請稍後重試。",
          };
        }
      }),
  }),

  search: router({
    query: publicProcedure
      .input(
        z.object({
          q: z.string().min(1),
          type: z.enum(["tool", "faq", "case"]).optional(),
        })
      )
      .query(async ({ input }) => {
        try {
          // 初始化搜索內容（如果還未初始化）
          await initializeSearchContent();
          
          const results = await searchContent(input.q, input.type);
          return {
            success: true,
            results,
            count: results.length,
          };
        } catch (error) {
          console.error("[Search] Error:", error);
          return {
            success: false,
            results: [],
            count: 0,
          };
        }
      }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;
