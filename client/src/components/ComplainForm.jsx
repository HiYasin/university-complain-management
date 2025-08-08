import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";


import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { getMatricIdFromEmail } from "@/lib/utils";
import { useCreateComplainMutation } from "@/redux/features/complainApi";

export default function ComplainForm() {
  const { user } = useContext(AuthContext);
  const matricId = getMatricIdFromEmail(user?.email);
  const [createComplain, { isLoading }] = useCreateComplainMutation();
  const [formData, setFormData] = useState({
    subject: "",
    description: "",
    status: "pending",
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!matricId) {
      toast.error("User not found. Please login.");
      return;
    }
    try {
      await createComplain({
        userMatricId: matricId,
        subject: formData.subject,
        description: formData.description,
        status: formData.status,
      }).unwrap();
      toast.success("Complaint submitted successfully!");
      setFormData({ subject: "", description: "", status: "pending" });
      setIsChecked(false);
    } catch (error) {
      toast.error(`Failed to submit complaint.${error?.status}`);
    }
  };


  return (
    <Card className="max-w-lg mx-auto mt-6">
      <CardHeader>
        <CardTitle>Submit a Complain</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Subject */}
          <div>
            <Label className="pb-3" htmlFor="subject">
              Subject
            </Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter complaint subject"
              required
            />
          </div>

          {/* Description */}
          <div>
            <Label className="pb-3" htmlFor="description">
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your issue"
              required
              className="h-20 resize-none overflow-y-auto w-full md:w-[462.4px]"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="confirm"
              checked={isChecked}
              onCheckedChange={(checked) => setIsChecked(checked)}
            />
            <Label htmlFor="confirm" className="text-sm">
              Jaha gotece tahai Boleci, Motta kicw boli nye.
            </Label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            disabled={!isChecked || isLoading}
            title="Submit Complain"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
