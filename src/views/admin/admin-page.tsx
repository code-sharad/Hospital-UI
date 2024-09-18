
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<StaffType>("doctors");
  type StaffType = "doctors" | "nurses" | "inventoryManagers" | "generalManagers";

  type StaffMember = {
    id: number;
    name: string;
    email: string;
    mobile: string;
    role: string;
    permission: string;
    department: string;
    specialty?: string;
    area?: string;
  };

  const [staffList, setStaffList] = useState<Record<StaffType, StaffMember[]>>({
    doctors: [
      {
        id: 1,
        name: "Dr. Ram",
        specialty: "Cardiology",
        email: "Ram.roy@hospital.com",
        mobile: "1234567890",
        role: "Senior Doctor",
        permission: "Full Access",
        department: "Cardiology",
      },
    ],
    nurses: [
      {
        id: 1,
        name: "Rohit Sharma",
        specialty: "Critical Care",
        email: "rohit.harma@hospital.com",
        mobile: "2345678901",
        role: "Head Nurse",
        permission: "Write Access",
        department: "ICU",
      },
    ],
    inventoryManagers: [
      {
        id: 1,
        name: "Mike Johnson",
        department: "Pharmacy",
        email: "mike.johnson@hospital.com",
        mobile: "9876543210",
        role: "Inventory Manager",
        permission: "Inventory Access",
      },
    ],
    generalManagers: [
      {
        id: 1,
        name: "Sarah Brown",
        area: "Operations",
        email: "sarah.brown@hospital.com",
        mobile: "5555555555",
        role: "General Manager",
        permission: "Full Access",
        department: "Administration",
      },
    ],
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newStaff = {
      id: staffList[activeTab].length + 1,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      mobile: formData.get("mobile") as string,
      role: formData.get("role") as string,
      permission: formData.get("permission") as string,
      department: formData.get("department") as string,
      [activeTab === "doctors" || activeTab === "nurses"
        ? "specialty"
        : activeTab === "inventoryManagers"
        ? "department"
        : "area"]: formData.get("detail") as string,
    };
    setStaffList((prev) => ({
      ...prev,
      [activeTab]: [...prev[activeTab], newStaff],
    }));
    event.currentTarget.reset();
  };

  const staffTypes = [
    "doctors",
    "nurses",
    "inventoryManagers",
    "generalManagers",
  ];

  return (
    <div className=" mx-auto p-4 max-w-6xl">
      <a href="/">
        <h1 className="text-2xl font-bold mb-6">Hospital Staff Management</h1>
      </a>
      <Tabs
        defaultValue="doctors"
        className="space-y-4"
        onValueChange={(value: string) => setActiveTab(value as StaffType)}
      >
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="doctors">Doctors</TabsTrigger>
          <TabsTrigger value="nurses">Nurses</TabsTrigger>
          <TabsTrigger value="inventoryManagers">
            Inventory Managers
          </TabsTrigger>
          <TabsTrigger value="generalManagers">General Managers</TabsTrigger>
        </TabsList>
        {staffTypes.map((staffType) => (
          <TabsContent key={staffType} value={staffType}>
            <Card>
              <CardHeader>
                <CardTitle>
                  Add New{" "}
                  {staffType === "doctors"
                    ? "Doctor"
                    : staffType === "nurses"
                    ? "Nurse"
                    : staffType === "inventoryManagers"
                    ? "Inventory Manager"
                    : "General Manager"}
                </CardTitle>
                <CardDescription>
                  Fill in the details to add a new staff member.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile Number</Label>
                      <Input
                        id="mobile"
                        name="mobile"
                        placeholder="Enter mobile number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Select name="role">
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="junior">Junior</SelectItem>
                          <SelectItem value="senior">Senior</SelectItem>
                          <SelectItem value="head">Head</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="permission">Permission</Label>
                      <Select name="permission">
                        <SelectTrigger>
                          <SelectValue placeholder="Select permission" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="read">Read Only</SelectItem>
                          <SelectItem value="write">Read & Write</SelectItem>
                          <SelectItem value="full">Full Access</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Input
                        id="department"
                        name="department"
                        placeholder="Enter department"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="detail">
                        {staffType === "doctors" || staffType === "nurses"
                          ? "Specialty"
                          : staffType === "inventoryManagers"
                          ? "Inventory Area"
                          : "Management Area"}
                      </Label>
                      <Input
                        id="detail"
                        name="detail"
                        placeholder={`Enter ${
                          staffType === "doctors" || staffType === "nurses"
                            ? "specialty"
                            : staffType === "inventoryManagers"
                            ? "inventory area"
                            : "management area"
                        }`}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit">Add Staff Member</Button>
                </CardFooter>
              </form>
            </Card>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Existing Staff</CardTitle>
                <CardDescription>List of current {staffType}.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {staffList[staffType].map((staff) => (
                    <div
                      key={staff.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg bg-muted"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>
                            {staff.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{staff.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {staff.email}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0 text-sm">
                        <p>Role: {staff.role}</p>
                        <p>Department: {staff.department}</p>
                        <p>
                          {staffType === "doctors" || staffType === "nurses"
                            ? `Specialty: ${staff.specialty}`
                            : staffType === "inventoryManagers"
                            ? `Inventory Area: ${staff.department}`
                            : `Management Area: ${staff.area}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
