import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { classFormSchema } from "@/formschemas/class";
import { supabase } from "@/lib/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { LoaderCircle, Save, Upload } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import slugify from "react-slugify";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

export default function Classcreate({ onupdate }: { onupdate: any }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imagePreviewThumbnail, setImagePreviewThumbnail] = useState<
    string | null
  >();
  const [imagePreviewTutorThumbnail, setImagePreviewTutorThumbnail] = useState<
    string | null
  >();
  const [isPending, startTransition] = useTransition();
  const [imageThumbnail, setImageThumbnail] = useState<
    File | undefined | null
  >();
  const [imageTutorThumbnail, setImageTutorThumbnail] = useState<
    File | undefined | null
  >();

  const form = useForm<z.infer<typeof classFormSchema>>({
    resolver: zodResolver(classFormSchema),
    defaultValues: {
      className: "",
      thumbnail: "",
      duration: 2,
      tutor: "",
      tutorthumbnail: "",
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof classFormSchema>) => {
    console.log(values)
    try {
      if (!imageThumbnail || !imageTutorThumbnail) {
        return;
      }

      startTransition(async () => {
        // Create unique filename
        const slugifiedName = slugify(values.className);
        const uniqueId1 = uuidv4();
        const uniqueId2 = uuidv4();
        const uniqueFileName1 = `${slugifiedName}-${uniqueId1}.png`;
        const uniqueFileName2 = `${slugifiedName}-${uniqueId2}.png`;

        // Upload image
        const {error: uploadError } = await supabase.storage
          .from("classes")
          .upload(`class/${uniqueFileName1}`, imageThumbnail);

        // Upload image
        const { error: uploadErrorTutor } =
          await supabase.storage
            .from("classes")
            .upload(`class/${uniqueFileName2}`, imageTutorThumbnail);

        if (uploadErrorTutor || uploadError) {
          throw new Error("Failed to upload image");
        }

        // Get public URL
        const { data: urlDataImage } = await supabase.storage
          .from("classes")
          .getPublicUrl(`class/${uniqueFileName1}`);

        // Get public URL
        const { data: urlDataImageTutor } = await supabase.storage
          .from("classes")
          .getPublicUrl(`class/${uniqueFileName2}`);

        if (!urlDataImage?.publicUrl || !urlDataImageTutor.publicUrl) {
          throw new Error("Failed to get public URL");
        }

        // Submit class data
        const classData = {
          ...values,
          thumbnail: urlDataImage.publicUrl,
          tutorthumbnail: urlDataImageTutor.publicUrl,
        };
        console.log(classData)

         await axios.post(
          `${import.meta.env.VITE_API_URL}/classes`,
          classData
        );
        onupdate();
        form.reset();
        setIsOpen(false)
        setImageThumbnail(null);
        setImageTutorThumbnail(null);
        setImagePreviewThumbnail(null);
        setImagePreviewTutorThumbnail(null);
      });
    } catch (err) {
      console.log("An error occured");
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
              name="className"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Class Name</FormLabel>
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
              render={() => (
                <FormItem>
                  <FormLabel>Class thumbnail</FormLabel>
                  <FormControl>
                    <div className="flex flex-col items-center justify-center w-full">
                      <Label
                        htmlFor="class-thumbnail-upload"
                        className="flex flex-col items-center justify-center w-full h-52 border border-dashed rounded-lg cursor-pointer"
                      >
                        {imagePreviewThumbnail ? (
                          <img
                            src={imagePreviewThumbnail}
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
                          id="class-thumbnail-upload"
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setImageThumbnail(file);
                              setImagePreviewThumbnail(
                                URL.createObjectURL(file)
                              );
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
              name="tutor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tutor</FormLabel>
                  <FormControl>
                    <Input placeholder="Bipesh Adhikari" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tutorthumbnail"
              render={() => (
                <FormItem>
                  <FormLabel>Tutor thumbnail</FormLabel>
                  <FormControl>
                    <div className="flex flex-col items-center justify-center w-full">
                      <Label
                        htmlFor="tutor-thumbnail-upload"
                        className="flex flex-col items-center justify-center w-full h-52 border border-dashed rounded-lg cursor-pointer"
                      >
                        {imagePreviewTutorThumbnail ? (
                          <img
                            src={imagePreviewTutorThumbnail}
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
                          id="tutor-thumbnail-upload"
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setImageTutorThumbnail(file);
                              setImagePreviewTutorThumbnail(
                                URL.createObjectURL(file)
                              );
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
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                  <Textarea
                  className="h-52 outline-none resize-none"
                      placeholder="Eg. The latest iphone from apple"
                      {...field}
                    />
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
              Create Classes
            </Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
