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
import { Bed, Plus, Search } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface BedType {
  name: string;
  total: number;
  available: number;
}

interface Bed {
  id: number;
  number: string;
  type: string;
  status: "Available" | "Occupied" | "Maintenance";
  patient?: string;
}

const initialBedTypes: BedType[] = [
  { name: "General", total: 50, available: 20 },
  { name: "ICU", total: 20, available: 5 },
  { name: "Pediatric", total: 30, available: 15 },
  { name: "Maternity", total: 25, available: 10 },
];

const initialBeds: Bed[] = [
  { id: 1, number: "A101", type: "General", status: "Available" },
  {
    id: 2,
    number: "A102",
    type: "General",
    status: "Occupied",
    patient: "John Doe",
  },
  { id: 3, number: "B201", type: "ICU", status: "Available" },
  { id: 4, number: "B202", type: "ICU", status: "Maintenance" },
  {
    id: 5,
    number: "C301",
    type: "Pediatric",
    status: "Occupied",
    patient: "Jane Smith",
  },
];

export default function BedsPage() {
  const [bedTypes, setBedTypes] = useState<BedType[]>(initialBedTypes);
  const [beds, setBeds] = useState<Bed[]>(initialBeds);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBeds = beds.filter(
    (bed) =>
      bed.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bed.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bed.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (bed.patient &&
        bed.patient.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const addNewBed = (bed: Omit<Bed, "id">) => {
    const newBed = {
      id: beds.length + 1,
      ...bed,
    };
    setBeds([...beds, newBed]);
    updateBedTypeAvailability(bed.type, 1);
  };

  const updateBedStatus = (
    bedId: number,
    newStatus: Bed["status"],
    patient?: string
  ) => {
    const updatedBeds = beds.map((bed) => {
      if (bed.id === bedId) {
        const oldStatus = bed.status;
        const newBed = { ...bed, status: newStatus, patient };
        if (oldStatus !== newStatus) {
          if (newStatus === "Available") {
            updateBedTypeAvailability(bed.type, 1);
          } else if (oldStatus === "Available") {
            updateBedTypeAvailability(bed.type, -1);
          }
        }
        return newBed;
      }
      return bed;
    });
    setBeds(updatedBeds);
  };

  const updateBedTypeAvailability = (type: string, change: number) => {
    const updatedBedTypes = bedTypes.map((bedType) => {
      if (bedType.name === type) {
        return { ...bedType, available: bedType.available + change };
      }
      return bedType;
    });
    setBedTypes(updatedBedTypes);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Bed Management</h1>

      <div className="flex justify-between items-center">
        <div className="relative w-64">
          <Input
            type="text"
            placeholder="Search beds..."
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
              Add New Bed
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Bed</DialogTitle>
              <DialogDescription>
                Enter the details for the new bed.
              </DialogDescription>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const newBed = {
                  number: formData.get("number") as string,
                  type: formData.get("type") as string,
                  status: "Available" as const,
                };
                addNewBed(newBed);
              }}
            >
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="number" className="text-right">
                    Bed Number
                  </Label>
                  <Input
                    id="number"
                    name="number"
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="type" className="text-right">
                    Bed Type
                  </Label>
                  <Select name="type" required>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select bed type" />
                    </SelectTrigger>
                    <SelectContent>
                      {bedTypes.map((type) => (
                        <SelectItem key={type.name} value={type.name}>
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogTrigger asChild>
                <Button type="submit">Add Bed</Button>
              </DialogTrigger>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Bed Availability Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={bedTypes}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#8884d8" name="Total Beds" />
                <Bar dataKey="available" fill="#82ca9d" name="Available Beds" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bed List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bed Number</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBeds.map((bed) => (
                <TableRow key={bed.id}>
                  <TableCell>{bed.number}</TableCell>
                  <TableCell>{bed.type}</TableCell>
                  <TableCell>{bed.status}</TableCell>
                  <TableCell>{bed.patient || "-"}</TableCell>
                  <TableCell>
                    <Select
                      onValueChange={(value) => {
                        if (value === "occupy") {
                          const patientName = prompt("Enter patient name:");
                          if (patientName) {
                            updateBedStatus(bed.id, "Occupied", patientName);
                          }
                        } else {
                          updateBedStatus(bed.id, value as Bed["status"]);
                        }
                      }}
                    >
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Change status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Available">Available</SelectItem>
                        <SelectItem value="occupy">Occupy</SelectItem>
                        <SelectItem value="Maintenance">Maintenance</SelectItem>
                      </SelectContent>
                    </Select>
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
