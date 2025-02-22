
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Classeditor from "./class-edit";
import Classdelete from "./class-delete";
export function ClassTable({
  classes,
  onupdate,
}: {
  classes: any;
  onupdate: any;
}) {
  return (
    <Table>
      <TableCaption>List of Courses</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Class Name</TableHead>
          <TableHead>Tutor</TableHead>
          <TableHead>Duration</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {classes.map((cl: any) => (
          <TableRow key={cl._id}>
            <TableCell className="font-medium flex items-center gap-x-3">
              <Avatar>
                <AvatarImage
                  src={cl.thumbnail}
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {cl.name}
            </TableCell>
            <TableCell>{cl.tutor}</TableCell>
            <TableCell>{cl.duration}</TableCell>
            <TableCell>
              <Classeditor id={cl._id} onupdate={onupdate} />
            </TableCell>
            <TableCell>
              <Classdelete id={cl._id} onupdate={onupdate} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
