import { z } from "zod";

export const userSchema = z.object({
  ip: z
    .string({ required_error: "La ip es obligatoria" })
    .ip({ version: "v4", message: "Invalid IP address" }),
  username: z.string(),
  token: z.string(),
});
