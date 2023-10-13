import { NavBar, LandingPage, OurTeam, Error, Footer, Contact } from "./components";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="w-screen bg-white dark:bg-slate-900 dark:text-slate-100 text-slate-900">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
