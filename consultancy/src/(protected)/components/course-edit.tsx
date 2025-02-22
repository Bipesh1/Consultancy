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
import { courseFormSchema } from "@/formschemas/course";
import { supabase } from "@/lib/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { LoaderCircle, Save, Upload } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import slugify from "react-slugify";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

export default function Courseedit({ onupdate,id }: { onupdate: any,id:string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [_, setImagePreview] = useState<string | null>();
  const [isPending, startTransition] = useTransition();
  const [image, setImage] = useState<File | undefined | null>();
  const [course,setCourse]=useState<any>()

  useEffect(() => {
    const fetchCourse=async()=>{

        startTransition(async () => {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/courses/${id}`, {
                withCredentials: true,
            });
            console.log(response)
            setCourse(response.data)
            if (response.data) {
                form.reset({
                    courseName: response.data.name,
                    thumbnail: response.data.thumbnail,
                    duration: response.data.duration,
                    associated_college: response.data.college,
                    academic_requirement: response.data.academic_requirement,
                    ielts_requirement: response.data.ielts_requirement,
                    description: response.data.description,
                    intake:response.data.intake,

                });
            }
        });
    }
    if(isOpen){
        fetchCourse()
    }
  }, [isOpen,id]);
  
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
      startTransition(async () => {
        let thumbnailUrl= course?.thumbnail
        // Create unique filename
        if(image){

        
        const slugifiedName = slugify(values.courseName);
        const uniqueId = uuidv4();
        const uniqueFileName = `${slugifiedName}-${uniqueId}.png`;

        // Upload image
        const {  error: uploadError } = await supabase.storage
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
        thumbnailUrl= urlData.publicUrl
    }

        // Submit course data
        const courseData = {
          ...values,
          thumbnail: thumbnailUrl,
        };

       await axios.put(
          `http://localhost:3001/courses/${id}`,
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
      <SheetTrigger className="float-end"><Button>Update</Button></SheetTrigger>
      <SheetContent className="overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Update a Course</SheetTitle>
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
              render={() => (
                <FormItem>
                  <FormLabel>Category thumbnail</FormLabel>
                  <FormControl>
                    <div className="flex flex-col items-center justify-center w-full">
                      <Label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-52 border border-dashed rounded-lg cursor-pointer"
                      >
                        {course?.thumbnail ? (
                          <img
                            src={course.thumbnail}
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
              Update Courses
            </Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
