import { NavBar, LandingPage, Error, Footer } from "./components";
function App() {
  return (
    <div className="w-screen bg-white dark:bg-slate-900 dark:text-slate-100 text-slate-900">
      <NavBar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
