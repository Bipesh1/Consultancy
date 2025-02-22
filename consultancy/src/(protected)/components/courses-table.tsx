import {
  Table,
  TableBody,
  TableCaption,
  TableCell, TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Courseedit from "./course-edit";
import Coursedelete from "./course-delete";
export function CourseTable({ courses,onupdate }: { courses: any,onupdate:any }) {
  return (
    <Table>
      <TableCaption>List of Courses</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Course Name</TableHead>
          <TableHead>College</TableHead>
          <TableHead>Duration</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses.map((course: any) => (
          <TableRow key={course._id}>
            <TableCell className="font-medium flex items-center gap-x-3">
            <Avatar>
                <AvatarImage
                  src={course.thumbnail}
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {course.name}
              </TableCell>
            <TableCell>{course.college}</TableCell>
            <TableCell>{course.description}</TableCell>
            <TableCell>{course.duration} years</TableCell>
            <TableCell><Courseedit id={course._id} onupdate={onupdate}/></TableCell>
            <TableCell><Coursedelete id={course._id} onupdate={onupdate}/></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
