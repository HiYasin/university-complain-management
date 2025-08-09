import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useContext } from "react";
import { useDeleteComplainMutation } from "@/redux/features/complainApi";
import { useUpdateComplainMutation } from "@/redux/features/complainApi";
import { Card } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerFooter,
    DrawerClose,
} from "@/components/ui/drawer";
import { AuthContext } from "@/providers/AuthProvider";
import { checkRole } from "@/lib/utils";

const statusColors = {
    Pending: "bg-yellow-100 text-yellow-800",
    Viewed: "bg-purple-100 text-purple-800",
    Approved: "bg-blue-100 text-blue-800",
    Rejected: "bg-red-100 text-red-800",
    Resolved: "bg-green-100 text-green-800",
};

export default function ComplaintTable({ complaints = [] }) {
    const { user } = useContext(AuthContext);
    const [selectedComplaint, setSelectedComplaint] = useState(null);
    const [deleteComplain, { isLoading: isDeleting }] = useDeleteComplainMutation();
    const [localComplaints, setLocalComplaints] = useState(complaints);
    const role = checkRole(user?.email);
    const [statusValue, setStatusValue] = useState("");
    const [statusUpdating, setStatusUpdating] = useState(false);
    const [updateComplain] = useUpdateComplainMutation();

    // When a complaint is selected, set statusValue to its status
    useEffect(() => {
        if (selectedComplaint) {
            setStatusValue(selectedComplaint.status);
        }
    }, [selectedComplaint]);

    const updateStatus = async () => {
        setStatusUpdating(true);
        try {
            await updateComplain({
                id: selectedComplaint._id || selectedComplaint.id,
                data: { status: statusValue },
            }).unwrap();
            setSelectedComplaint({ ...selectedComplaint, status: statusValue });
            setLocalComplaints((prev) => prev.map((c) =>
                (c._id === selectedComplaint._id ? { ...c, status: statusValue } : c)
            ));
        } catch (err) {
            // Optionally show error toast
            console.error("Status update failed", err);
        }
        setStatusUpdating(false);
    };



    useEffect(() => {
        setLocalComplaints(complaints);
    }, [complaints]);

    const handleDelete = async (id) => {
        try {
            await deleteComplain(id).unwrap();
            setLocalComplaints((prev) => prev.filter((c) => c._id !== id && c.id !== id));
        } catch (err) {
            // Optionally show error toast
            console.error("Delete failed", err);
        }
    };
    return (
        <div className="p-4">
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
                    {localComplaints.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center text-gray-500">
                                No complaints found.
                            </TableCell>
                        </TableRow>
                    ) : (
                        localComplaints.map((c, i) => (
                            <TableRow key={c._id || c.id || i}>
                                <TableCell>{c._id || c.id || `#${i + 1}`}</TableCell>
                                <TableCell>{c.subject}</TableCell>
                                <TableCell>
                                    <Badge className={statusColors[c.status] || "bg-gray-100 text-gray-800"}>{c.status}</Badge>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        size="sm"
                                        className="mr-2"
                                        onClick={() => setSelectedComplaint(c)}
                                    >
                                        View Details
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="destructive"
                                        disabled={isDeleting}
                                        onClick={() => handleDelete(c._id || c.id)}
                                    >
                                        {isDeleting ? "Deleting..." : "Delete"}
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>

            {/* Drawer for Details */}
            <Drawer open={!!selectedComplaint} onOpenChange={() => setSelectedComplaint(null)}>
                <DrawerContent>
                    {selectedComplaint && (
                        <div className="flex justify-center items-center min-h-[60vh]">
                            <Card className="w-full max-w-md mx-auto shadow-lg rounded-xl p-6 bg-white flex flex-col items-center">
                                <h2 className="text-2xl font-bold mb-2 text-center text-primary">{selectedComplaint.subject}</h2>
                                <p className="text-sm text-gray-500 mb-4 text-center">Complaint ID: {selectedComplaint._id || selectedComplaint.id}</p>
                                <p className="text-base text-gray-700 mb-4 text-center">{selectedComplaint.description}</p>
                                <Badge className={statusColors[selectedComplaint.status] || "bg-gray-100 text-gray-800"}>
                                    {selectedComplaint.status}
                                </Badge>
                                {role === "admin" && (
                                    <div className="w-full mt-4">
                                        <label className="block text-sm font-medium mb-2">Change Status</label>
                                        <Select
                                            value={statusValue}
                                            onValueChange={setStatusValue}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="pending">Pending</SelectItem>
                                                <SelectItem value="approved">Approved</SelectItem>
                                                <SelectItem value="rejected">Rejected</SelectItem>
                                                <SelectItem value="resolved">Resolved</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Button
                                            className="mt-4 w-full"
                                            onClick={updateStatus}
                                            disabled={statusUpdating || statusValue === selectedComplaint.status}
                                        >
                                            {statusUpdating ? "Updating..." : "Update"}
                                        </Button>
                                    </div>
                                )}
                                <div className="mt-6 w-full flex justify-center">
                                    <DrawerClose asChild>
                                        <Button variant="secondary">Close</Button>
                                    </DrawerClose>
                                </div>
                            </Card>
                        </div>
                    )}
                </DrawerContent>
            </Drawer>
        </div>
    );
}
