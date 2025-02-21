import { z } from "zod";

export const classFormSchema = z.object({
  className: z
    .string()
    .min(2, { message: "Class name must be at least 2 characters." })
    .max(100, { message: "Class name must be at most 100 characters." }),

  thumbnail: z.string().optional(),


  tutor: z
    .string()
    .min(2, { message: "Tutor name must be at least 2 characters." })
    .max(100, { message: "Tutor name must be at most 100 characters." }),

  tutorthumbnail: z.string().optional(),

  duration:z.number().min(1, { message: "Duration must provided." }),
    
    description: z
        .string()
        .min(1, { message: "Description is required." })
        .max(200, { message: "Description must be at most 20 characters." }),
});


