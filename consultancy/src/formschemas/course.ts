import { z } from "zod";

export const courseFormSchema = z.object({
  courseName: z
    .string()
    .min(2, { message: "Course name must be at least 2 characters." })
    .max(100, { message: "Course name must be at most 100 characters." }),

  thumbnail: z.string().optional(),


  associated_college: z
    .string()
    .min(2, { message: "Associated college name must be at least 2 characters." })
    .max(100, { message: "Associated college name must be at most 100 characters." }),

  duration: z
    .string()
    .min(1, { message: "Duration is required." })
    .max(20, { message: "Duration must be at most 20 characters." }),

  academic_requirement: z
    .string()
    .min(5, { message: "Academic requirement must be at least 5 characters." })
    .max(200, { message: "Academic requirement must be at most 200 characters." }),

  ielts_requirement: z
    .string()
    .regex(/^[0-9](\.[0-9])?$/, { message: "IELTS requirement must be a valid score (e.g., 6.5, 7.0)." }),

  intake: z
    .string()
    .min(3, { message: "Intake must be at least 3 characters." })
    .max(50, { message: "Intake must be at most 50 characters." }),

  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." })
    .max(1000, { message: "Description must be at most 1000 characters." }),
});

