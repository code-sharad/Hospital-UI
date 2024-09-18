import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Patient {
  id: number;
  token: string;
  name: string;
  age: number;
  gender: string;
  contact: string;
  lastVisit: string;
  issue: string;
  category: string;
}

const initialPatients: Patient[] = [
  {
    id: 1,
    token: "PT001",
    name: "John Doe",
    age: 35,
    gender: "Male",
    contact: "123-456-7890",
    lastVisit: "2023-06-01",
    issue: "Chronic back pain",
    category: "Chronic",
  },
  {
    id: 2,
    token: "PT002",
    name: "Jane Smith",
    age: 28,
    gender: "Female",
    contact: "098-765-4321",
    lastVisit: "2023-06-02",
    issue: "Flu symptoms",
    category: "Acute",
  },
  {
    id: 3,
    token: "PT003",
    name: "Bob Johnson",
    age: 42,
    gender: "Male",
    contact: "555-555-5555",
    lastVisit: "2023-06-03",
    issue: "Regular checkup",
    category: "Preventive",
  },
];

const categories = ["All", "Acute", "Chronic", "Preventive", "Emergency"];

function generateUniqueToken(patients: Patient[]): string {
  const tokens = patients.map((p) => p.token);
  let newToken = "";
  do {
    newToken = "PT" + Math.floor(1000 + Math.random() * 9000).toString();
  } while (tokens.includes(newToken));
  return newToken;
}

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>(initialPatients);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPatients = patients.filter(
    (patient) =>
      (patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.contact.includes(searchTerm) ||
        patient.token.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (activeCategory === "All" || patient.category === activeCategory)
  );

  const addNewPatient = (
    patient: Omit<Patient, "id" | "token" | "lastVisit">
  ) => {
    const newPatient = {
      id: patients.length + 1,
      token: generateUniqueToken(patients),
      ...patient,
      lastVisit: new Date().toISOString().split("T")[0],
    };
    setPatients([...patients, newPatient]);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Patients</h1>

      <div className="flex justify-between items-center">
        <div className="relative w-64">
          <Input
            type="text"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Patient
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Patient</DialogTitle>
              <DialogDescription>
                Enter the details of the new patient below.
              </DialogDescription>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const newPatient = {
                  name: formData.get("name") as string,
                  age: parseInt(formData.get("age") as string),
                  gender: formData.get("gender") as string,
                  contact: formData.get("contact") as string,
                  issue: formData.get("issue") as string,
                  category: formData.get("category") as string,
                };
                addNewPatient(newPatient);
              }}
            >
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="age" className="text-right">
                    Age
                  </Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="gender" className="text-right">
                    Gender
                  </Label>
                  <Select name="gender" required>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="contact" className="text-right">
                    Contact
                  </Label>
                  <Input
                    id="contact"
                    name="contact"
                    type="tel"
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="issue" className="text-right">
                    Issue
                  </Label>
                  <Textarea
                    id="issue"
                    name="issue"
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="category" className="text-right">
                    Category
                  </Label>
                  <Select name="category" required>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories
                        .filter((category) => category !== "All")
                        .map((category) => (
                          <SelectItem
                            key={category}
                            value={category.toLowerCase()}
                          >
                            {category}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogTrigger asChild>
                <Button type="submit">Add Patient</Button>
              </DialogTrigger>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Patient List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Token</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead>Issue</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>{patient.token}</TableCell>
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.age}</TableCell>
                  <TableCell>{patient.gender}</TableCell>
                  <TableCell>{patient.contact}</TableCell>
                  <TableCell>{patient.lastVisit}</TableCell>
                  <TableCell>{patient.issue}</TableCell>
                  <TableCell>{patient.category}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Patient Details</DialogTitle>
                        </DialogHeader>
                        <div className="py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label>Token</Label>
                              <p className="mt-1">{patient.token}</p>
                            </div>
                            <div>
                              <Label>Name</Label>
                              <p className="mt-1">{patient.name}</p>
                            </div>
                            <div>
                              <Label>Age</Label>
                              <p className="mt-1">{patient.age}</p>
                            </div>
                            <div>
                              <Label>Gender</Label>
                              <p className="mt-1">{patient.gender}</p>
                            </div>
                            <div>
                              <Label>Contact</Label>
                              <p className="mt-1">{patient.contact}</p>
                            </div>
                            <div>
                              <Label>Last Visit</Label>
                              <p className="mt-1">{patient.lastVisit}</p>
                            </div>
                            <div>
                              <Label>Issue</Label>
                              <p className="mt-1">{patient.issue}</p>
                            </div>
                            <div>
                              <Label>Category</Label>
                              <p className="mt-1">{patient.category}</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <Label>Medical History</Label>
                            <Textarea
                              className="mt-1"
                              placeholder="No medical history available"
                            />
                          </div>
                          <div className="mt-4">
                            <Label>Upcoming Appointments</Label>
                            <p className="mt-1">No upcoming appointments</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Patient Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs
            defaultValue="All"
            className="w-full"
            onValueChange={setActiveCategory}
          >
            <TabsList className="flex flex-wrap">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {patients
                    .filter(
                      (patient) =>
                        category === "All" ||
                        patient.category.toLowerCase() ===
                          category.toLowerCase()
                    )
                    .map((patient) => (
                      <div
                        key={patient.id}
                        className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium">
                            {patient.token}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {patient.name}
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            {patient.issue}
                          </p>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Patient Details</DialogTitle>
                            </DialogHeader>
                            <div className="py-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label>Token</Label>
                                  <p className="mt-1">{patient.token}</p>
                                </div>
                                <div>
                                  <Label>Name</Label>
                                  <p className="mt-1">{patient.name}</p>
                                </div>
                                <div>
                                  <Label>Age</Label>
                                  <p className="mt-1">{patient.age}</p>
                                </div>
                                <div>
                                  <Label>Gender</Label>
                                  <p className="mt-1">{patient.gender}</p>
                                </div>
                                <div>
                                  <Label>Contact</Label>
                                  <p className="mt-1">{patient.contact}</p>
                                </div>
                                <div>
                                  <Label>Last Visit</Label>
                                  <p className="mt-1">{patient.lastVisit}</p>
                                </div>
                                <div>
                                  <Label>Issue</Label>
                                  <p className="mt-1">{patient.issue}</p>
                                </div>
                                <div>
                                  <Label>Category</Label>
                                  <p className="mt-1">{patient.category}</p>
                                </div>
                              </div>
                              <div className="mt-4">
                                <Label>Medical History</Label>
                                <Textarea
                                  className="mt-1"
                                  placeholder="No medical history available"
                                />
                              </div>
                              <div className="mt-4">
                                <Label>Upcoming Appointments</Label>
                                <p className="mt-1">No upcoming appointments</p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
