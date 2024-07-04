"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

import { db } from "../db";
import { eq } from "drizzle-orm";
import { users } from "../db/schema/schema";
import * as argon2 from "argon2";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid email or password" };
  }

  const { email, name, password } = validatedFields.data;

  const hashedPassword = await argon2.hash(password);

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email));

  if (existingUser.length > 0) {
    return { error: "Account already exists" };
  }

  await db
    .insert(users)
    .values({ email, name, password: hashedPassword })
    .run();

  // TODO: Add email verification

  return { success: "Account registered successfully" };
};
