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

export default function ComplainForm() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    file: null,
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Complaint submitted successfully!");
    setFormData({ title: "", category: "", description: "", file: null });
    setIsChecked(false);
  };

  return (
    <Card className="max-w-lg mx-auto mt-6">
      <CardHeader>
        <CardTitle>Submit a Complain</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <Label className="pb-3" htmlFor="title">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter complaint title"
              required
            />
          </div>

          {/* Categories */}
          <div>
            <Label className="pb-3">Category</Label>
            <Select
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, category: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="administration">Administration</SelectItem>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="Departmental">Departmental</SelectItem>
                <SelectItem value="transport">Transport</SelectItem>
                <SelectItem value="library">Library</SelectItem>
                <SelectItem value="hostel">Hostel</SelectItem>
                <SelectItem value="infrastructure">Infrastructure</SelectItem>
                <SelectItem value="canteen">Cafeteria</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
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

          {/* File Upload */}
          <div>
            <Label htmlFor="file" className="pb-3">
              Image/Video (Optional)
            </Label>
            <Input
              id="file"
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
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
            disabled={!isChecked}
            title="Submit Complain"
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
