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

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  contact: string;
  lastVisit: string;
}

const initialPatients: Patient[] = [
  {
    id: 1,
    name: "John Doe",
    age: 35,
    gender: "Male",
    contact: "123-456-7890",
    lastVisit: "2023-06-01",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    gender: "Female",
    contact: "098-765-4321",
    lastVisit: "2023-06-02",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 42,
    gender: "Male",
    contact: "555-555-5555",
    lastVisit: "2023-06-03",
  },
];

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>(initialPatients);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.contact.includes(searchTerm)
  );

  const addNewPatient = (patient: Omit<Patient, "id" | "lastVisit">) => {
    const newPatient = {
      id: patients.length + 1,
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
                <TableHead>Name</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.age}</TableCell>
                  <TableCell>{patient.gender}</TableCell>
                  <TableCell>{patient.contact}</TableCell>
                  <TableCell>{patient.lastVisit}</TableCell>
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
    </div>
  );
}
