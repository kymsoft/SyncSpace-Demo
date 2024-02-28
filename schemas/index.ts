import * as z from "zod";

export const NewPasswordSchema = z.object({
    password: z.string().min(8, {
      message: "Minimum of 8 characters required",
    }),
  });
  
  export const ResetSchema = z.object({
    email: z.string().email({
      message: "Email is required",
    }),
  });
  
export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1,{
        message: "Password is required"
    }),
    code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
    name: z.string().min(1,{
        message: "",
      }),
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(8,{
        message: "Password must be at least 8 characters",
    })
});


export const NewSpaceSchema = z.object({
  name: z.string().max(20,{
    message: "Space name should not be more than 20 characters"
  }),
  description: z.optional(z.string()),
  tag: z.string().refine((data) => data.length === 6, {
    message: "Space ID name should be exactly 6 characters"
  }),
})

export const ImportSpaceSchema = z.object({
  tag: z.string().refine((data) => data.length === 6, {
    message: "Space ID name should be exactly 6 characters"
  }),
});


