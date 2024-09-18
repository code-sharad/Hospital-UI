import { Button } from "@/components/ui/button";
import { Hospital, Users, Clipboard, Package } from "lucide-react";
import dashboardLogo  from "../assets/dashboard.png"
export default function LandingPage() {
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto overflow-hidden">
      <header className="px-4 h-14 flex items-center  justify-center border-b">
        <a className="flex items-center justify-center " href="#">
          <Hospital className="h-6 w-6 mr-2" />
          <a href="/" className="font-bold mr-6">
            Aryogyam
          </a>
        </a>
        <nav>
          <ul className="flex flex-wrap  gap-7 items-center justify-between sm:w-[400px] lg:w-[700px] mx-auto">
            {/* <Activity className="h-6 w-6" /> */}

            <li className="hover:underline">
              <a href="/opd">OPD Dashboard</a>
            </li>
            <li className="hover:underline">
              <a href="/inventory">Inventory Dashboard</a>
            </li>
            <li className="hover:underline">
              <a href="/admin">Admin Page</a>
            </li>
            <li className="hover:underline">
              <a href="/login">Login</a>
            </li>
            <li className="hover:underline">
              <a href="/signup">Sign Up</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 overflow-auto">
        <section className="w-full py-12 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Revolutionize Hospital Management
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
                Streamline operations, enhance patient care, and integrate
                seamlessly with city-wide systems.
              </p>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 ">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8">
              Key Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 place-content-center">
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-bold">Smart Queue Management</h3>
                  <p className="text-sm text-gray-500">
                    Optimize patient flow in OPDs
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clipboard className="h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-bold">Real-time Bed Tracking</h3>
                  <p className="text-sm text-gray-500">
                    Instant updates on bed availability
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Package className="h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-bold">Inventory Control</h3>
                  <p className="text-sm text-gray-500">
                    Efficient medicine and supply management
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Hospital className="h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-bold">Seamless Integration</h3>
                  <p className="text-sm text-gray-500">
                    Connect with city-wide healthcare modules
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 ">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 overflow-hidden lg:gap-12">
              <img
                alt="Hospital Management Dashboard"
                className="mx-auto mix-blend-darken  bg-green-300  overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src={dashboardLogo}
                width="650"
              />
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Powerful, Yet Simple
                </h2>
                <p className="text-gray-500 md:text-lg">
                  Our intuitive dashboard puts critical information at your
                  fingertips. Monitor patient flow, bed availability, and
                  inventory levels all in one place.
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center">
                    <svg
                      className=" mr-2 h-4 w-4"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Real-time updates
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" mr-2 h-4 w-4"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Customizable views
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" mr-2 h-4 w-4"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Automated reporting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
