import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const notionRouter = createTRPCRouter({
  notion: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        notionGreeting: `Hello ${input.text}`,
        age: 12
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
