import { z } from "zod"

const envSchema = z.object({
    NEXT_PUBLIC_API_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
    console.log("Invalid env variables", parsedEnv.error.flatten().fieldErrors)

    throw new Error("Invalid env variables")
}   

export const env = parsedEnv.data