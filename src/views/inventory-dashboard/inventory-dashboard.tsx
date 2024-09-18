// @ts-nocheck
import React, { useState } from "react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Plus,
  Pill,
  Package,
  AlertTriangle,
  Edit,
  Trash,
  BarChart2,
  PieChart,
  DollarSign,
} from "lucide-react";
import {
  BarChart,
  Bar,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
  AreaChart,
  Area,
} from "recharts";

interface Medicine {
  id: string;
  name: string;
  category: string;
  quantity: number;
  expiryDate: string;
  price: number;
}

interface Category {
  id: string;
  name: string;
}

export default function Dashboard() {
  const [medicines, setMedicines] = useState<Medicine[]>([
    {
      id: "1",
      name: "Aspirin",
      category: "Pain Relief",
      quantity: 100,
      expiryDate: "2024-12-31",
      price: 5.99,
    },
    {
      id: "2",
      name: "Ibuprofen",
      category: "Pain Relief",
      quantity: 50,
      expiryDate: "2024-06-30",
      price: 7.99,
    },
    {
      id: "3",
      name: "Amoxicillin",
      category: "Antibiotics",
      quantity: 30,
      expiryDate: "2023-12-31",
      price: 15.99,
    },
    {
      id: "4",
      name: "Lisinopril",
      category: "Blood Pressure",
      quantity: 60,
      expiryDate: "2025-03-31",
      price: 12.99,
    },
    {
      id: "5",
      name: "Metformin",
      category: "Diabetes",
      quantity: 90,
      expiryDate: "2024-09-30",
      price: 8.99,
    },
    {
      id: "6",
      name: "Omeprazole",
      category: "Gastrointestinal",
      quantity: 75,
      expiryDate: "2024-11-30",
      price: 14.99,
    },
    {
      id: "7",
      name: "Levothyroxine",
      category: "Thyroid",
      quantity: 120,
      expiryDate: "2025-02-28",
      price: 11.99,
    },
    {
      id: "8",
      name: "Amlodipine",
      category: "Blood Pressure",
      quantity: 45,
      expiryDate: "2024-08-31",
      price: 9.99,
    },
    {
      id: "9",
      name: "Sertraline",
      category: "Mental Health",
      quantity: 60,
      expiryDate: "2024-10-31",
      price: 18.99,
    },
    {
      id: "10",
      name: "Albuterol",
      category: "Respiratory",
      quantity: 25,
      expiryDate: "2023-12-31",
      price: 22.99,
    },
  ]);

  const [categories, setCategories] = useState<Category[]>([
    { id: "1", name: "Pain Relief" },
    { id: "2", name: "Antibiotics" },
    { id: "3", name: "Blood Pressure" },
    { id: "4", name: "Diabetes" },
    { id: "5", name: "Gastrointestinal" },
    { id: "6", name: "Thyroid" },
    { id: "7", name: "Mental Health" },
    { id: "8", name: "Respiratory" },
  ]);

  const [isAddMedicineModalOpen, setIsAddMedicineModalOpen] = useState(false);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentMedicine, setCurrentMedicine] = useState<Medicine | null>(null);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleAddOrUpdateMedicine = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const newMedicine = {
      id: currentMedicine?.id || Date.now().toString(),
      name: formData.get("name") as string,
      category: formData.get("category") as string,
      quantity: parseInt(formData.get("quantity") as string),
      expiryDate: formData.get("expiryDate") as string,
      price: parseFloat(formData.get("price") as string),
    };

    if (currentMedicine) {
      setMedicines(
        medicines.map((med) =>
          med.id === currentMedicine.id ? newMedicine : med
        )
      );
    } else {
      setMedicines([...medicines, newMedicine]);
    }
    setIsAddMedicineModalOpen(false);
    setCurrentMedicine(null);
  };

  const handleAddOrUpdateCategory = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const newCategory = {
      id: currentCategory?.id || Date.now().toString(),
      name: formData.get("name") as string,
    };

    if (currentCategory) {
      setCategories(
        categories.map((cat) =>
          cat.id === currentCategory.id ? newCategory : cat
        )
      );
    } else {
      setCategories([...categories, newCategory]);
    }
    setIsAddCategoryModalOpen(false);
    setCurrentCategory(null);
  };

  const handleDeleteMedicine = () => {
    if (currentMedicine) {
      setMedicines(medicines.filter((med) => med.id !== currentMedicine.id));
      setIsDeleteDialogOpen(false);
      setCurrentMedicine(null);
    }
  };

  const filteredMedicines = medicines.filter(
    (medicine) =>
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedCategory || medicine.category === selectedCategory)
  );

  const categoryData = categories.map((category) => ({
    name: category.name,
    value: medicines.filter((med) => med.category === category.name).length,
  }));

  const stockLevelData = [
    {
      name: "Low Stock",
      value: medicines.filter((med) => med.quantity < 50).length,
    },
    {
      name: "Adequate Stock",
      value: medicines.filter((med) => med.quantity >= 50 && med.quantity < 100)
        .length,
    },
    {
      name: "High Stock",
      value: medicines.filter((med) => med.quantity >= 100).length,
    },
  ];

  const expiryData = [
    {
      name: "Expiring in 30 days",
      value: medicines.filter((med) => {
        const expiryDate = new Date(med.expiryDate);
        const daysUntilExpiry = Math.ceil(
          (expiryDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24)
        );
        return daysUntilExpiry <= 30 && daysUntilExpiry > 0;
      }).length,
    },
    {
      name: "Expiring in 90 days",
      value: medicines.filter((med) => {
        const expiryDate = new Date(med.expiryDate);
        const daysUntilExpiry = Math.ceil(
          (expiryDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24)
        );
        return daysUntilExpiry > 30 && daysUntilExpiry <= 90;
      }).length,
    },
    {
      name: "Expiring in 180 days",
      value: medicines.filter((med) => {
        const expiryDate = new Date(med.expiryDate);
        const daysUntilExpiry = Math.ceil(
          (expiryDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24)
        );
        return daysUntilExpiry > 90 && daysUntilExpiry <= 180;
      }).length,
    },
    {
      name: "Expiring after 180 days",
      value: medicines.filter((med) => {
        const expiryDate = new Date(med.expiryDate);
        const daysUntilExpiry = Math.ceil(
          (expiryDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24)
        );
        return daysUntilExpiry > 180;
      }).length,
    },
  ];

  const inventoryValueData = categories.map((category) => ({
    name: category.name,
    value: medicines
      .filter((med) => med.category === category.name)
      .reduce((sum, med) => sum + med.quantity * med.price, 0),
  }));

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
    "#82CA9D",
    "#A4DE6C",
    "#D0ED57",
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top App Bar */}
      <header className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-900">
            <a href="/">Medicine Inventory</a>
          </h1>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search medicines"
                className="pl-10 pr-4 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select onValueChange={(value) => setSelectedCategory(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={null}>All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="inventory" className="space-y-4">
            <TabsList>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="inventory" className="space-y-4">
              {/* Metrics Cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Medicines
                    </CardTitle>
                    <Pill className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{medicines.length}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Low Stock
                    </CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {medicines.filter((med) => med.quantity < 50).length}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Expiring Soon
                    </CardTitle>
                    <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {
                        medicines.filter(
                          (med) =>
                            new Date(med.expiryDate) <
                            new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
                        ).length
                      }
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Medicine Inventory Table */}
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Expiry Date</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredMedicines.map((medicine) => (
                      <TableRow key={medicine.id}>
                        <TableCell className="font-medium">
                          {medicine.name}
                        </TableCell>
                        <TableCell>{medicine.category}</TableCell>
                        <TableCell>{medicine.quantity}</TableCell>
                        <TableCell>{medicine.expiryDate}</TableCell>
                        <TableCell>${medicine.price.toFixed(2)}</TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                              setCurrentMedicine(medicine);
                              setIsAddMedicineModalOpen(true);
                            }}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                              setCurrentMedicine(medicine);
                              setIsDeleteDialogOpen(true);
                            }}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="col-span-1 md:col-span-2 lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Inventory Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-blue-100 p-4 rounded-lg">
                        <div className="text-blue-600 text-sm font-medium">
                          Total Medicines
                        </div>
                        <div className="mt-2 flex justify-between items-end">
                          <div className="text-2xl font-bold text-blue-800">
                            {medicines.length}
                          </div>
                          <Pill className="h-4 w-4 text-blue-600" />
                        </div>
                      </div>
                      <div className="bg-green-100 p-4 rounded-lg">
                        <div className="text-green-600 text-sm font-medium">
                          Total Categories
                        </div>
                        <div className="mt-2 flex justify-between items-end">
                          <div className="text-2xl font-bold text-green-800">
                            {categories.length}
                          </div>
                          <BarChart2 className="h-4 w-4 text-green-600" />
                        </div>
                      </div>
                      <div className="bg-yellow-100 p-4 rounded-lg">
                        <div className="text-yellow-600 text-sm font-medium">
                          Low Stock Items
                        </div>
                        <div className="mt-2 flex justify-between items-end">
                          <div className="text-2xl font-bold text-yellow-800">
                            {
                              medicines.filter((med) => med.quantity < 50)
                                .length
                            }
                          </div>
                          <AlertTriangle className="h-4 w-4 text-yellow-600" />
                        </div>
                      </div>
                      <div className="bg-purple-100 p-4 rounded-lg">
                        <div className="text-purple-600 text-sm font-medium">
                          Total Inventory Value
                        </div>
                        <div className="mt-2 flex justify-between items-end">
                          <div className="text-2xl font-bold text-purple-800">
                            $
                            {medicines
                              .reduce(
                                (sum, med) => sum + med.quantity * med.price,
                                0
                              )
                              .toFixed(2)}
                          </div>
                          <DollarSign className="h-4 w-4 text-purple-600" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Medicines by Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={categoryData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {categoryData.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                              />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Stock Levels</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={stockLevelData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="value" fill="#8884d8">
                            {stockLevelData.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                              />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Expiry Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={expiryData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#8884d8"
                            fill="#8884d8"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                <Card className="col-span-1 md:col-span-2 lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Inventory Value by Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={inventoryValueData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="value" fill="#8884d8">
                            {inventoryValueData.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                              />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed right-8 bottom-8 flex flex-col gap-4">
        <Button
          className="w-14 h-14 rounded-full shadow-lg"
          size="icon"
          onClick={() => setIsAddCategoryModalOpen(true)}
        >
          <BarChart2 className="h-6 w-6" />
        </Button>
        <Button
          className="w-14 h-14 rounded-full shadow-lg"
          size="icon"
          onClick={() => setIsAddMedicineModalOpen(true)}
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>

      {/* Add/Edit Medicine Modal */}
      <Dialog
        open={isAddMedicineModalOpen}
        onOpenChange={setIsAddMedicineModalOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {currentMedicine ? "Edit Medicine" : "Add New Medicine"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddOrUpdateMedicine}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  defaultValue={currentMedicine?.name}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <Select
                  name="category"
                  defaultValue={currentMedicine?.category}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="quantity" className="text-right">
                  Quantity
                </Label>
                <Input
                  id="quantity"
                  name="quantity"
                  type="number"
                  defaultValue={currentMedicine?.quantity}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="expiryDate" className="text-right">
                  Expiry Date
                </Label>
                <Input
                  id="expiryDate"
                  name="expiryDate"
                  type="date"
                  defaultValue={currentMedicine?.expiryDate}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Price
                </Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  defaultValue={currentMedicine?.price}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">
                {currentMedicine ? "Update" : "Add"} Medicine
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Add/Edit Category Modal */}
      <Dialog
        open={isAddCategoryModalOpen}
        onOpenChange={setIsAddCategoryModalOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {currentCategory ? "Edit Category" : "Add New Category"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddOrUpdateCategory}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  defaultValue={currentCategory?.name}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">
                {currentCategory ? "Update" : "Add"} Category
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              medicine from your inventory.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteMedicine}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
