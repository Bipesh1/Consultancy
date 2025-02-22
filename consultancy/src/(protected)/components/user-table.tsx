import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export function UserTable({users}:{
    users:any
}) {
  return (
    <Table>
      <TableCaption>List of users</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Full Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Inquiry</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user: any) => (
          <TableRow key={user._id}>
            <TableCell>

              {user.fullname}
              </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.age}</TableCell>
            <TableCell>{user.inquiry}</TableCell>
            <TableCell><Button><a href={`mailto:${user.email}`}>Send Email to User</a></Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
