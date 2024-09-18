import { Activity } from "lucide-react";
import "./App.css";
import LandingPage from "./views/landing-page";

function App() {
  return (
    <main className="">
      <div>
        <nav>
          <ul className="flex flex-wrap  gap-7 mt-10 justify-between sm:w-[400px] lg:w-[700px] mx-auto">
            <Activity className="h-6 w-6" />

            <li className="hover:underline">
              <a href="/">Home</a>
            </li>
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
      </div>
      <LandingPage />
    </main>
  );
}

export default App;
