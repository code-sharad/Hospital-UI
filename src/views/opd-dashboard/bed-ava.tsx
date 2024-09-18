import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  BedIcon,
  CalendarIcon,
  ClipboardListIcon,
  HeartPulseIcon,
  MapPinIcon,
  ShieldCheckIcon,
} from "lucide-react";

export default function Component() {
  return (
    <div className="max-w-6xl p-4 mx-auto lg:px-6 sm:py-8 md:py-10">
      <section className="flex-col hidden gap-4 pb-4 sm:flex sm:flex-row sm:items-center sm:pb-8">
        <h1 className="text-xl font-semibold tracking-tight lg:text-3xl">
          City General Hospital - Bed Booking
        </h1>
        <nav className="flex items-center justify-center gap-1 sm:ml-auto">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="gap-1 underline rounded-md underline-offset-2"
          >
            <a href="#">
              <MapPinIcon className="w-4 h-4" />
              Location
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="gap-1 underline rounded-md underline-offset-2"
          >
            <a href="#">
              <ClipboardListIcon className="w-4 h-4" />
              Policies
            </a>
          </Button>
        </nav>
      </section>
      <section className="relative bg-muted">
        <div className="grid gap-2 sm:grid-cols-4">
          <div className="relative col-span-2 row-span-2 overflow-hidden transition-all rounded-xl sm:rounded-l-xl">
            <img
              src="/placeholder.svg?height=400&width=800"
              width={800}
              height={400}
              alt="Hospital Ward"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative overflow-hidden transition-all rounded-tl-xl">
            <img
              src="/placeholder.svg?height=200&width=400"
              width={400}
              height={200}
              alt="Hospital Room"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative overflow-hidden transition-all rounded-tr-xl">
            <img
              src="/placeholder.svg?height=200&width=400"
              width={400}
              height={200}
              alt="Medical Equipment"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative overflow-hidden transition-all rounded-bl-xl">
            <img
              src="/placeholder.svg?height=200&width=400"
              width={400}
              height={200}
              alt="Nursing Station"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative overflow-hidden transition-all rounded-br-xl">
            <img
              src="/placeholder.svg?height=200&width=400"
              width={400}
              height={200}
              alt="Hospital Exterior"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
      <section className="py-8 grid md:grid-cols-2 lg:grid-cols-[1fr_400px] gap-8 sm:gap-12 md:gap-16 items-start">
        <div className="grid row-start-2 gap-8 md:row-start-auto">
          <div className="flex-col hidden gap-1 md:flex">
            <h2 className="text-2xl font-semibold">
              City General Hospital - Inpatient Ward
            </h2>
            <p className="text-muted-foreground">
              24/7 Care · Private Rooms Available · ICU Facilities
            </p>
          </div>
          <Card>
            <CardContent className="relative flex items-center gap-6 p-4 sm:p-6">
              <ShieldCheckIcon className="w-10 h-10" />
              <div className="flex-1 font-semibold max-w-[16rem] hidden sm:flex md:hidden lg:flex">
                Accredited by the Joint Commission on Accreditation of
                Healthcare Organizations (JCAHO)
              </div>
              <div className="flex items-center gap-6 ml-auto">
                <div className="flex flex-col gap-1 text-center">
                  <div className="text-2xl font-semibold tracking-tighter">
                    4.8
                  </div>
                  <div className="flex items-center gap-1">
                    <HeartPulseIcon className="w-3 h-3 fill-primary" />
                    <HeartPulseIcon className="w-3 h-3 fill-primary" />
                    <HeartPulseIcon className="w-3 h-3 fill-primary" />
                    <HeartPulseIcon className="w-3 h-3 fill-primary" />
                    <HeartPulseIcon className="w-3 h-3" />
                  </div>
                </div>
                <Separator orientation="vertical" className="h-9" />
                <div className="flex flex-col gap-0.5 text-center">
                  <div className="text-2xl font-semibold tracking-tighter">
                    1000+
                  </div>
                  <div className="text-xs font-semibold underline">
                    Patient Reviews
                  </div>
                </div>
              </div>
              <a href="#" className="absolute inset-0">
                <span className="sr-only">View hospital details</span>
              </a>
            </CardContent>
          </Card>
          <div className="grid gap-4">
            <h3 className="text-xl font-semibold">Bed Types Available</h3>
            <ul className="grid gap-6 lg:grid-cols-2">
              <li className="flex gap-4">
                <BedIcon className="w-6 h-6" />
                General Ward Bed
              </li>
              <li className="flex gap-4">
                <BedIcon className="w-6 h-6" />
                Semi-Private Room
              </li>
              <li className="flex gap-4">
                <BedIcon className="w-6 h-6" />
                Private Room
              </li>
              <li className="flex gap-4">
                <BedIcon className="w-6 h-6" />
                ICU Bed
              </li>
              <li className="flex gap-4">
                <BedIcon className="w-6 h-6" />
                Pediatric Bed
              </li>
              <li className="flex gap-4">
                <BedIcon className="w-6 h-6" />
                Maternity Bed
              </li>
            </ul>
            <Button variant="outline" className="justify-self-start">
              Show all bed types
            </Button>
          </div>
          <Separator />
          <div className="grid gap-4">
            <h3 className="text-xl font-semibold">Hospital Facilities</h3>
            <ul className="grid gap-6 lg:grid-cols-2">
              <li className="flex gap-4">
                <HeartPulseIcon className="w-6 h-6" />
                24/7 Emergency Care
              </li>
              <li className="flex gap-4">
                <ClipboardListIcon className="w-6 h-6" />
                Electronic Health Records
              </li>
              <li className="flex gap-4">
                <ShieldCheckIcon className="w-6 h-6" />
                Infection Control Protocols
              </li>
              <li className="flex gap-4">
                <MapPinIcon className="w-6 h-6" />
                On-site Pharmacy
              </li>
            </ul>
            <Button variant="outline" className="justify-self-start">
              Show all facilities
            </Button>
          </div>
        </div>
        <div className="grid row-start-1 gap-4 md:row-start-auto">
          <div className="flex flex-col gap-1 sm:hidden">
            <h2 className="font-semibold sm:text-2xl">
              City General Hospital - Inpatient Ward
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              24/7 Care · Private Rooms Available · ICU Facilities
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>
                Bed Availability{" "}
                <span className="text-sm font-normal text-muted-foreground">
                  / night
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <form>
                <div className="grid gap-2">
                  <div className="flex gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex-col items-start w-full h-auto"
                        >
                          <span className="font-semibold uppercase text-[0.65rem]">
                            Check in
                          </span>
                          <span className="font-normal">4/2/2024</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 max-w-[276px]">
                        <Calendar />
                      </PopoverContent>
                    </Popover>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex-col items-start w-full h-auto"
                        >
                          <span className="font-semibold uppercase text-[0.65rem]">
                            Check out
                          </span>
                          <span className="font-normal">10/2/2024</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 max-w-[276px]">
                        <Calendar />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <Select>
                    <SelectTrigger className="h-auto">
                      <SelectValue
                        placeholder={
                          <div className="flex flex-col items-start">
                            <span className="font-semibold uppercase text-[0.65rem]">
                              Bed Type
                            </span>
                            <span className="font-normal">General Ward</span>
                          </div>
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Ward</SelectItem>
                      <SelectItem value="semi-private">
                        Semi-Private Room
                      </SelectItem>
                      <SelectItem value="private">Private Room</SelectItem>
                      <SelectItem value="icu">ICU Bed</SelectItem>
                    </SelectContent>
                  </Select>
                  <div>
                    <Button size="lg" className="w-full h-12">
                      Book Bed
                    </Button>
                  </div>
                  <div className="text-sm text-center text-muted-foreground">
                    Booking is subject to availability and doctor's approval
                  </div>
                </div>
              </form>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="text-muted-foreground">
                    Base rate (per night)
                  </div>
                  <div>$500</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-muted-foreground">
                    Medical services fee
                  </div>
                  <div>$150</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-muted-foreground">Insurance co-pay</div>
                  <div>-$400</div>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="font-semibold">Estimated total</div>
                <div>$250</div>
              </div>
            </CardContent>
          </Card>
          <Button
            variant="link"
            className="gap-2 underline text-muted-foreground hover:text-inherit"
          >
            <CalendarIcon className="w-4 h-4" />
            Check full bed availability calendar
          </Button>
        </div>
      </section>
      <Separator />
      <section className="grid gap-8 py-10">
        <h3 className="text-2xl font-semibold">Patient Reviews</h3>
        <div className="grid lg:grid-cols-2 gap-x-32 gap-y-12">
          <article className="grid gap-3">
            <div className="flex items-center gap-4">
              <img
                src="/placeholder.svg?height=40&width=40"
                width={40}
                height={40}
                alt="Patient"
                className="rounded-full"
              />
              <div className="grid">
                <div className="font-semibold">John Doe</div>
                <div className="text-sm text-muted-foreground">
                  General Ward Patient
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <div className="flex items-center gap-px">
                <HeartPulseIcon className="w-3 h-3 fill-primary" />
                <HeartPulseIcon className="w-3 h-3 fill-primary" />
                <HeartPulseIcon className="w-3 h-3 fill-primary" />
                <HeartPulseIcon className="w-3 h-3 fill-primary" />
                <HeartPulseIcon className="w-3 h-3" />
              </div>
              · <span>1 week ago</span>
            </div>
            <div>
              The care I received at City General Hospital was exceptional. The
              staff was attentive and the facilities were clean and modern.
            </div>
          </article>
          <article className="grid gap-3">
            <div className="flex items-center gap-4">
              <img
                src="/placeholder.svg?height=40&width=40"
                width={40}
                height={40}
                alt="Patient"
                className="rounded-full"
              />
              <div className="grid">
                <div className="font-semibold">Jane Smith</div>
                <div className="text-sm text-muted-foreground">ICU Patient</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <div className="flex items-center gap-px">
                <HeartPulseIcon className="w-3 h-3 fill-primary" />
                <HeartPulseIcon className="w-3 h-3 fill-primary" />
                <HeartPulseIcon className="w-3 h-3 fill-primary" />
                <HeartPulseIcon className="w-3 h-3 fill-primary" />
                <HeartPulseIcon className="w-3 h-3 fill-primary" />
              </div>
              · <span>2 weeks ago</span>
            </div>
            <div>
              The ICU team at City General Hospital saved my life. Their
              expertise and dedication are truly commendable.
            </div>
          </article>
        </div>
        <Button variant="outline" className="justify-self-start">
          Show all reviews
        </Button>
      </section>
    </div>
  );
}
