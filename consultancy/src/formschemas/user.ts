import { z } from "zod";

export const userFormSchema = z.object({
  fullname: z
    .string()
    .min(2, { message: "Name name must be at least 2 characters." })
    .max(100, { message: "Name name must be at most 100 characters." }),

  email: z.string().email({message:"Please enter a valid email"}),


  number: z
    .string()
    .min(10, { message: "Number must be at least 10 characters." })
    .max(10, { message: "Number must be at most 10 characters." }),

  age: z.string().min(2, { message: "Enter a valid age" })
  .max(2, { message: "Enter a valid age." }),

    
    inquiry: z
        .string()
        .min(1, { message: "Inquiry is required." })
        .max(200, { message: "Inquiry must be at most 200 characters." }),
});


