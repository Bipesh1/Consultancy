import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { Save } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Upload } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { courseFormSchema } from "@/formschemas/course";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import slugify from "react-slugify";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useTransition} from "react";

export default function Coursescreate({ onupdate }: { onupdate: any }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>();
  const [isPending, startTransition] = useTransition();
  const [image, setImage] = useState<File | undefined | null>();
  
  const form = useForm<z.infer<typeof courseFormSchema>>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: {
      courseName: "",
      associated_college: "",
      duration: 2,
      academic_requirement: "",
      ielts_requirement: "",
      intake: "",
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof courseFormSchema>) => {
    try {
      if (!image) {

        return;
      }

      startTransition(async () => {
        // Create unique filename
        const slugifiedName = slugify(values.courseName);
        const uniqueId = uuidv4();
        const uniqueFileName = `${slugifiedName}-${uniqueId}.png`;

        // Upload image
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("classes")
          .upload(`class/${uniqueFileName}`, image);

        if (uploadError) {
          throw new Error(`Failed to upload image: ${uploadError.message}`);
        }

        // Get public URL
        const { data: urlData } = await supabase.storage
          .from("classes")
          .getPublicUrl(`class/${uniqueFileName}`);


        if (!urlData?.publicUrl) {
          throw new Error("Failed to get public URL");
        }

        // Submit course data
        const courseData = {
          ...values,
          thumbnail: urlData.publicUrl,
        };

        const response = await axios.post(
          "http://localhost:3001/courses/",
          courseData,
          {
            withCredentials: true,
          }
        );
        onupdate();
        // Reset form on success
        form.reset();
        setIsOpen(false)
        setImage(null);
        setImagePreview(null);
      });
    } catch (err) {
      console.log("An error occured")
    }
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="float-end"><Button>Create</Button></SheetTrigger>
      <SheetContent className="overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Create a Course</SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" space-y-4 py-10"
          >
            <FormField
              control={form.control}
              name="courseName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Eg.Bachelor in Information Technology"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="thumbnail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category thumbnail</FormLabel>
                  <FormControl>
                    <div className="flex flex-col items-center justify-center w-full">
                      <Label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-52 border border-dashed rounded-lg cursor-pointer"
                      >
                        {imagePreview ? (
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <div className="flex flex-col items-center space-y-2">
                            <Upload className="h-10 w-10 text-gray-400" />
                            <span className="font-semibold">
                              Click to upload
                            </span>
                            <span className="text-xs text-muted-foreground">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </span>
                          </div>
                        )}
                        <Input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setImage(file);
                              setImagePreview(URL.createObjectURL(file));
                              // Don't set the form value here since we'll set it after upload
                            }
                          }}
                          accept="image/*"
                        />
                      </Label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="associated_college"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>College</FormLabel>
                  <FormControl>
                    <Input placeholder="Lousiana University" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <FormControl>
                    <Input placeholder="3" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="academic_requirement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Academic</FormLabel>
                  <FormControl>
                    <Input placeholder="Bachelors" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ielts_requirement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>IELTS</FormLabel>
                  <FormControl>
                    <Input placeholder="7+" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="intake"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Intake</FormLabel>
                  <FormControl>
                    <Input placeholder="January" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="This is a good course" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button size={"sm"} disabled={isPending} type="submit">
              {isPending ? (
                <LoaderCircle size={16} className=" animate-spin" />
              ) : (
                <Save size={16} />
              )}
              Create Courses
            </Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
