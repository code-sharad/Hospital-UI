import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bed, Clipboard, Package, Server } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen  items-center">
      <header className=" h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <span className="sr-only">HospitalChain</span>
        </a>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-100 via-blue-50 to-white">
          <div className="container ">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Revolutionizing Hospital Management with Blockchain
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Streamline patient care, optimize resource allocation, and
                  enhance inventory management with our Hyperledger
                  Fabric-powered solution.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Bed className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Smart Bed Management</h3>
                <p className="text-gray-500">
                  Real-time tracking of bed availability and optimized patient
                  admission.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clipboard className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">
                  Efficient OPD Queuing
                </h3>
                <p className="text-gray-500">
                  Implement advanced queuing models to reduce wait times and
                  improve patient flow.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Package className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Inventory Management</h3>
                <p className="text-gray-500">
                  Track medicines and consumables with blockchain-powered
                  transparency and efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="technology"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <img
                alt="Blockchain Technology"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg?height=310&width=550"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Powered by Hyperledger Fabric
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our solution leverages the power of Hyperledger Fabric, a
                    permissioned blockchain framework, to ensure data integrity,
                    security, and seamless integration with existing hospital
                    systems.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Server className="h-4 w-4" />
                    <span className="font-medium">
                      Decentralized and Secure
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Server className="h-4 w-4" />
                    <span className="font-medium">Scalable Architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Server className="h-4 w-4" />
                    <span className="font-medium">
                      Interoperable with Existing Systems
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your Hospital?
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with us to learn how our blockchain-powered
                  solution can revolutionize your hospital management.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2023 HospitalChain. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
