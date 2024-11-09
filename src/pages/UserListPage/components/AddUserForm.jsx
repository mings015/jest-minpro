import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BASE_URL, END_POINT } from "@/helper/constants/endpoint";

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${BASE_URL.API}${END_POINT.GET_USERS}`,
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
        }
      );
      console.log("User added:", response.data);
      setSuccess(true);

      setFormData({ firstName: "", lastName: "", email: "" }); // Reset form
    } catch (err) {
      setError("Failed to add user. Please try again.");
      console.error("Error adding user:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription>
            Complete the form below. Click Add when youre done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="firstName" className="text-right">
                First Name
              </Label>
              <Input
                id="firstName"
                className="col-span-3"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="lastName" className="text-right">
                Last Name
              </Label>
              <Input
                id="lastName"
                className="col-span-3"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                autoComplete="off"
                id="email"
                type="email"
                className="col-span-3"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Adding..." : "Save"}
            </Button>
          </DialogFooter>
          {success && (
            <p className="my-2 text-sm text-green-500">
              Success Add User, Show Data in Console
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserForm;
