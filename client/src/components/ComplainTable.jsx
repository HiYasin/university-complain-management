import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { useEffect, useState } from "react";

const complaints = [
  {
    number: "#C-001",
    title: "Water Leakage",
    status: "Pending",
    details: {
      id: "IUIC1023",
      name: "John Doe",
      profile: "https://i.pravatar.cc/40",
      description: "There is leakage in the 2nd floor restroom.",
      feedback: "Pending",
    },
  },
  {
    number: "#C-002",
    title: "Broken Chair",
    status: "Resolved",
    details: {
      id: "IUIC1056",
      name: "Jane Smith",
      profile: "https://i.pravatar.cc/40?img=2",
      description: "One of the classroom chairs is broken.",
      feedback: "Thank you!",
    },
  },
];

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800",
  Viewed: "bg-purple-100 text-purple-800",
  Approved: "bg-blue-100 text-blue-800",
  Rejected: "bg-red-100 text-red-800",
  Resolved: "bg-green-100 text-green-800",
};

export default function ComplainTable({ role = "user" }) {
  const [filter, setFilter] = useState("all");
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const filteredComplaints =
    filter === "all"
      ? complaints
      : complaints.filter((c) => c.status.toLowerCase() === filter);

  // Mark complaint as viewed when admin opens it
  useEffect(() => {
    if (selectedComplaint && role === "admin" && selectedComplaint.status === "Pending") {
      setSelectedComplaint({
        ...selectedComplaint,
        status: "Viewed",
      });
      // TODO: API call to save viewed status
    }
  }, [selectedComplaint, role]);

  return (
    <div className="p-4">
      {/* Shadcn Filter Dropdown */}
      <div className="mb-4">
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="viewed">Viewed</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Complaint No</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredComplaints.map((c, i) => (
            <TableRow key={i}>
              <TableCell>{c.number}</TableCell>
              <TableCell>{c.title}</TableCell>
              <TableCell>
                <Badge className={statusColors[c.status]}>{c.status}</Badge>
              </TableCell>
              <TableCell>
                <Button
                  size="sm"
                  onClick={() => setSelectedComplaint(c)}
                >
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Drawer for Details */}
      <Drawer open={!!selectedComplaint} onOpenChange={() => setSelectedComplaint(null)}>
        <DrawerContent>
          {selectedComplaint && (
            <>
              <DrawerHeader>
                <DrawerTitle>{selectedComplaint.title}</DrawerTitle>
                <DrawerDescription>
                  Complaint ID: {selectedComplaint.number}
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4 space-y-4">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={selectedComplaint.details.profile} />
                    <AvatarFallback>{selectedComplaint.details.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{selectedComplaint.details.name}</p>
                    <p className="text-sm text-gray-500">{selectedComplaint.details.id}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  {selectedComplaint.details.description}
                </p>
                <p className="text-sm font-medium">
                  Feedback: {selectedComplaint.details.feedback}
                </p>

                {/* Admin can update status */}
                {role === "admin" ? (
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Update Status</label>
                    <Select
                      value={selectedComplaint.status}
                      onValueChange={(newStatus) =>
                        setSelectedComplaint({
                          ...selectedComplaint,
                          status: newStatus,
                        })
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Viewed">Viewed</SelectItem>
                        <SelectItem value="Approved">Approved</SelectItem>
                        <SelectItem value="Rejected">Rejected</SelectItem>
                        <SelectItem value="Resolved">Resolved</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                ) : (
                  <Badge className={statusColors[selectedComplaint.status]}>
                    {selectedComplaint.status}
                  </Badge>
                )}
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="secondary">Close</Button>
                </DrawerClose>
                {role === "admin" && (
                  <Button onClick={() => console.log("Save to DB")}>Save Changes</Button>
                )}
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
