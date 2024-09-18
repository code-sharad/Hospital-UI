import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
import {
  Bell,
  Calendar,
  Home,
  Menu,
  Mic,
  Search,
  Settings,
  User,
  X,
  Bed,
  //   BarChart,
} from "lucide-react";
import PatientsPage from "../patient/Patient";

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  lastVisit: string;
}

interface Bed {
  id: number;
  number: string;
  type: string;
  status: "Available" | "Occupied" | "Maintenance";
  patient?: Patient;
}
export default function OPDDashboard() {
  const releaseBed = (bedId: number) => {
    // Implement the logic to release the bed
    console.log(`Releasing bed with ID: ${bedId}`);
  };
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [patients] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 35,
      gender: "Male",
      lastVisit: "2023-05-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      gender: "Female",
      lastVisit: "2023-05-18",
    },
    {
      id: 3,
      name: "Bob Johnson",
      age: 42,
      gender: "Male",
      lastVisit: "2023-05-20",
    },
  ]);

  const [selectedPatient, setSelectedPatient] = useState<Patient>();
  const [beds, setBeds] = useState<Bed[]>([
    { id: 1, number: "A101", type: "General", status: "Available" },
    {
      id: 2,
      number: "A102",
      type: "General",
      status: "Occupied",
      patient: patients[0],
    },
    { id: 3, number: "B201", type: "ICU", status: "Available" },
    { id: 4, number: "B202", type: "ICU", status: "Maintenance" },
    {
      id: 5,
      number: "C301",
      type: "Pediatric",
      status: "Occupied",
      patient: patients[1],
    },
  ]);
  // const addNewPatient = (patient) => {
  //   const newPatient = {
  //     id: patients.length + 1,
  //     ...patient,
  //     lastVisit: new Date().toISOString().split("T")[0],
  //   };
  //   setPatients([...patients, newPatient]);
  // };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
              <a href="/" className="flex items-center">
                <span className="text-xl font-semibold text-blue-600 ml-2 lg:ml-0">
                  OPD Dashboard
                </span>
              </a>
            </div>
            <nav className="hidden lg:flex space-x-4">
              <NavItem
                href="/"
                icon={<Home className="h-5 w-5" />}
                text="Home"
              />
              <NavItem
                href="/patients"
                icon={<User className="h-5 w-5" />}
                text="Patients"
              />
              <NavItem
                href="/appointments"
                icon={<Calendar className="h-5 w-5" />}
                text="Appointments"
              />
              <NavItem
                href="/settings"
                icon={<Settings className="h-5 w-5" />}
                text="Settings"
              />
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isNavOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsNavOpen(false)}
        >
          <div
            className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-xl font-semibold text-blue-600">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsNavOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="p-4">
              <NavItem
                href="/"
                icon={<Home className="h-5 w-5" />}
                text="Home"
                mobile
              />
              <NavItem
                href="/patients"
                icon={<User className="h-5 w-5" />}
                text="Patients"
                mobile
              />
              <NavItem
                href="/appointments"
                icon={<Calendar className="h-5 w-5" />}
                text="Appointments"
                mobile
              />
              <NavItem
                href="/settings"
                icon={<Settings className="h-5 w-5" />}
                text="Settings"
                mobile
              />
            </nav>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Input
              className="w-full pl-10 pr-4 py-2 rounded-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search patients, appointments, or records"
              type="search"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute inset-y-0 right-0 pr-3"
            >
              <Mic className="h-5 w-5 text-blue-500" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium text-gray-900">
                Recent Patients
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="divide-y divide-gray-200">
                {patients.slice(-4).map((patient) => (
                  <li key={patient.id} className="py-4 flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <User className="h-6 w-6 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {patient.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        Last visit: {patient.lastVisit}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium text-gray-900">
                Upcoming Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="divide-y divide-gray-200">
                {[1, 2, 3].map((i) => (
                  <li
                    key={i}
                    className="py-4 flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Appointment {i}
                        </p>
                        <p className="text-sm text-gray-500">Today, 2:00 PM</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium text-gray-900">
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="flex flex-col items-center justify-center h-24 bg-blue-100 text-blue-600 hover:bg-blue-200">
                      <Calendar className="h-6 w-6 mb-2" />
                      Schedule
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Schedule Appointment</DialogTitle>
                      <DialogDescription>
                        Enter the details for the new appointment.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="patient" className="text-right">
                          Patient
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select patient" />
                          </SelectTrigger>
                          <SelectContent>
                            {patients.map((patient) => (
                              <SelectItem
                                key={patient.id}
                                value={patient.id.toString()}
                              >
                                {patient.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date" className="text-right">
                          Date
                        </Label>
                        <Input id="date" type="date" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="time" className="text-right">
                          Time
                        </Label>
                        <Input id="time" type="time" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="reason" className="text-right">
                          Reason
                        </Label>
                        <Textarea id="reason" className="col-span-3" />
                      </div>
                    </div>
                    <DialogTrigger asChild>
                      <Button type="submit">Schedule Appointment</Button>
                    </DialogTrigger>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="flex flex-col items-center justify-center h-24 bg-green-100 text-green-600 hover:bg-green-200">
                      <User className="h-6 w-6 mb-2" />
                      Patient List
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>Patient List</DialogTitle>
                      <DialogDescription>
                        View and manage your patients.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <Input
                        className="mb-4"
                        placeholder="Search patients..."
                      />
                      <div className="border rounded-lg overflow-hidden">
                        <table className="w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Age
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Gender
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Last Visit
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {patients.map((patient) => (
                              <tr key={patient.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {patient.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {patient.age}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {patient.gender}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {patient.lastVisit}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() =>
                                          setSelectedPatient(patient)
                                        }
                                      >
                                        View
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                      <DialogHeader>
                                        <DialogTitle>
                                          Patient Details
                                        </DialogTitle>
                                      </DialogHeader>
                                      <div className="py-4">
                                        <div className="grid grid-cols-2 gap-4">
                                          <div>
                                            <Label>Name</Label>
                                            <p className="mt-1">
                                              {selectedPatient?.name}
                                            </p>
                                          </div>
                                          <div>
                                            <Label>Age</Label>
                                            <p className="mt-1">
                                              {selectedPatient?.age}
                                            </p>
                                          </div>
                                          <div>
                                            <Label>Gender</Label>
                                            <p className="mt-1">
                                              {selectedPatient?.gender}
                                            </p>
                                          </div>
                                          <div>
                                            <Label>Last Visit</Label>
                                            <p className="mt-1">
                                              {selectedPatient?.lastVisit}
                                            </p>
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
                                          <p className="mt-1">
                                            No upcoming appointments
                                          </p>
                                        </div>
                                      </div>
                                    </DialogContent>
                                  </Dialog>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="flex flex-col items-center justify-center h-24 bg-blue-100 text-blue-600 hover:bg-blue-200">
                      <Bed className="h-6 w-6 mb-2" />
                      Manage Beds
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>Bed Management</DialogTitle>
                      <DialogDescription>
                        View and manage hospital beds.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <Input className="mb-4" placeholder="Search beds..." />
                      <div className="border rounded-lg overflow-hidden">
                        <table className="w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Bed Number
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Type
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Patient
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {beds.map((bed) => (
                              <tr key={bed.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {bed.number}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {bed.type}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span
                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                      bed.status === "Available"
                                        ? "bg-green-100 text-green-800"
                                        : bed.status === "Occupied"
                                        ? "bg-red-100 text-red-800"
                                        : "bg-yellow-100 text-yellow-800"
                                    }`}
                                  >
                                    {bed.status}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {bed.patient ? bed.patient.name : "-"}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {bed.status === "Available" ? (
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => {
                                        // Open bed booking dialog
                                      }}
                                    >
                                      Book
                                    </Button>
                                  ) : bed.status === "Occupied" ? (
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => releaseBed(bed.id)}
                                    >
                                      Release
                                    </Button>
                                  ) : (
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => {
                                        // Mark bed as available
                                        setBeds(
                                          beds.map((b) =>
                                            b.id === bed.id
                                              ? { ...b, status: "Available" }
                                              : b
                                          )
                                        );
                                      }}
                                    >
                                      Mark Available
                                    </Button>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
        <PatientsPage/>
      </main>
    </div>
  );
}

function NavItem({
  href,
  icon,
  text,
  mobile = false,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  mobile?: boolean;
}) {
  return (
    <a
      href={href}
      className={`flex items-center space-x-2 ${
        mobile
          ? "text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-2 py-2 rounded-md text-base font-medium"
          : "text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
      }`}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}
